import { useEffect, useRef, useState } from "react";

const chips = [
  "Add my spring show dates",
  "Shorten the homepage intro",
  "Swap the Contact photo",
];

type Step = {
  title: string;
  detail: string;
  time: string;
  state: "idle" | "active" | "done" | "live";
};

const initialSteps: Step[] = [
  {
    title: "Request received",
    detail: "Logged as a change request",
    time: "0:00",
    state: "done",
  },
  {
    title: "Change made",
    detail: "Updated the About page photo",
    time: "1:38",
    state: "done",
  },
  {
    title: "Preview ready",
    detail: "Check it before anything goes live",
    time: "1:52",
    state: "done",
  },
  {
    title: "Live on your site",
    detail: "Approved and published",
    time: "2:10",
    state: "live",
  },
];

function summarize(raw: string) {
  const text = raw.toLowerCase();
  if (/photo|image|picture/.test(text)) {
    return /contact/.test(text)
      ? "Updated the Contact page photo"
      : "Updated the About page photo";
  }
  if (/date|show|event|schedule/.test(text)) return "Added new dates to the Events section";
  if (/shorten|intro|text|copy|wording/.test(text)) return "Tightened the homepage intro text";
  if (/color|colour|font/.test(text)) return "Adjusted the site styling";
  return "Made the requested update";
}

function Check() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M2.5 6.2 5 8.6l4.6-5" />
    </svg>
  );
}

export function PortalDemo() {
  const [request, setRequest] = useState(
    "On the About page, swap in the new photo I uploaded."
  );
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [busy, setBusy] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => timers.current.forEach((id) => window.clearTimeout(id));
  }, []);

  function run() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const what = summarize(request);
    const plan = [
      { time: "0:00", detail: "Logged as a change request", wait: reduce ? 0 : 500 },
      {
        time: `1:4${Math.floor(Math.random() * 9)}`,
        detail: what,
        wait: reduce ? 0 : 2200,
      },
      {
        time: `1:5${Math.floor(Math.random() * 9)}`,
        detail: "Check it before anything goes live",
        wait: reduce ? 0 : 1300,
      },
      {
        time: `2:1${Math.floor(Math.random() * 9)}`,
        detail: "Approved and published",
        wait: reduce ? 0 : 1300,
      },
    ];

    setBusy(true);
    setSteps(
      initialSteps.map((step) => ({
        ...step,
        detail: "",
        time: "",
        state: "idle",
      }))
    );

    let elapsed = 0;
    plan.forEach((item, index) => {
      timers.current.push(
        window.setTimeout(() => {
          setSteps((current) =>
            current.map((step, stepIndex) =>
              stepIndex === index ? { ...step, state: "active" } : step
            )
          );
        }, elapsed)
      );
      elapsed += item.wait;
      timers.current.push(
        window.setTimeout(() => {
          setSteps((current) =>
            current.map((step, stepIndex) =>
              stepIndex === index
                ? {
                    ...step,
                    state: index === 3 ? "live" : "done",
                    detail: item.detail,
                    time: item.time,
                  }
                : step
            )
          );
          if (index === 3) setBusy(false);
        }, elapsed)
      );
    });
  }

  return (
    <div className="portal rise d2" aria-label="Demo of the client editing portal">
      <div className="portal-bar">
        <div className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>your-site · edit portal</span>
        <span className="live-pill">Live</span>
      </div>
      <div className="portal-body">
        <div className="req-row">
          <label htmlFor="req">What would you like to change?</label>
          <textarea
            id="req"
            className="req-input"
            value={request}
            onChange={(event) => setRequest(event.target.value)}
          />
          <div className="chips">
            {chips.map((chip) => (
              <button
                key={chip}
                className="chip"
                type="button"
                onClick={() => {
                  setRequest(chip);
                  document.getElementById("req")?.focus();
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        <div className="req-actions">
          <span className="note">Demo · real changes take ~1–3 min</span>
          <button className="btn btn-primary" type="button" onClick={run} disabled={busy}>
            Send request <span className="arr">→</span>
          </button>
        </div>
        <ol className="steps" aria-live="polite">
          {steps.map((step) => (
            <li
              key={step.title}
              className={`step${step.state === "done" || step.state === "live" ? " done" : ""}${
                step.state === "active" ? " active" : ""
              }${step.state === "live" ? " live" : ""}`}
            >
              <span className="dot">
                <Check />
              </span>
              <div>
                <b>{step.title}</b>
                <small>{step.detail}</small>
              </div>
              <time>{step.time}</time>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
