const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@underdogsoftware.xyz";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "hello@underdogsoftware.xyz";

function cleanLine(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanMessage(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, 5000);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readFields(body) {
  const source = typeof body === "string" ? safeJson(body) : body || {};
  return {
    name: cleanLine(source.name, 120),
    email: cleanLine(source.email, 200),
    message: cleanMessage(source.message),
    company: cleanLine(source.company, 200),
  };
}

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

function validate(fields) {
  if (fields.company) return { spam: true };
  if (!fields.name) return { error: "Please add your name." };
  if (!isEmail(fields.email)) return { error: "Please add a valid email address." };
  if (fields.message.length < 10) {
    return { error: "Tell us a little more about the project." };
  }
  return { ok: true };
}

async function sendMail({ name, email, message }) {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL, name: "Underdog Software" },
      reply_to: { email, name },
      subject: `Website inquiry from ${name}`,
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
        },
      ],
    }),
  });

  if (response.status !== 202) {
    const detail = await response.text();
    const error = new Error(`SendGrid ${response.status}`);
    error.detail = detail.slice(0, 500);
    throw error;
  }
}

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const fields = readFields(req.body);
  const result = validate(fields);
  if (result.spam) {
    res.status(200).json({ ok: true });
    return;
  }
  if (result.error) {
    res.status(400).json({ error: result.error });
    return;
  }
  if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is not set");
    res.status(503).json({
      error: `We couldn’t send that just now. Email ${TO_EMAIL} instead.`,
    });
    return;
  }

  try {
    await sendMail(fields);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error.message, error.detail || "");
    res.status(502).json({
      error: `We couldn’t send that just now. Email ${TO_EMAIL} instead.`,
    });
  }
}

module.exports = handler;
module.exports.readFields = readFields;
module.exports.validate = validate;
