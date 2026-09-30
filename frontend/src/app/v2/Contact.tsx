import { FormEvent, useState } from "react";

const fallbackEmail = "hello@underdogsoftware.xyz";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || `Email ${fallbackEmail} instead.`);
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : `Email ${fallbackEmail} instead.`);
    }
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <p className="eyebrow">Start a project</p>
          <h2>Let’s build a site you’ll actually keep up to date.</h2>
          <p className="lede">
            Tell us a little about your business, org, or practice and what you want the site to
            do. We’ll reply within a couple of days with next steps.
          </p>
        </div>
        {status === "sent" ? (
          <div className="mail-card" role="status">
            <span className="ctl-label">Message sent</span>
            <p className="form-thanks">Thanks. We’ll reply within a couple of days.</p>
          </div>
        ) : (
          <form className="mail-card" onSubmit={onSubmit}>
            <label className="field">
              <span className="ctl-label">Name</span>
              <input name="name" type="text" autoComplete="name" required maxLength={120} />
            </label>
            <label className="field">
              <span className="ctl-label">Email</span>
              <input name="email" type="email" autoComplete="email" required maxLength={200} />
            </label>
            <label className="field">
              <span className="ctl-label">About the project</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="What you do and who it’s for, a site or two you like the feel of, and your timeline."
              />
            </label>
            <label className="hp" aria-hidden="true">
              Company
              <input name="company" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            {status === "error" && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              {status !== "sending" && <span className="arr">→</span>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
