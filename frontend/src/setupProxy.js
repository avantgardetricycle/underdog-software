const contact = require("../api/contact");

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

module.exports = function setupProxy(app) {
  app.post("/api/contact", async (req, res) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        req.body = await readJson(req);
      }
    } catch {
      res.status(400).json({ error: "That message couldn’t be read." });
      return;
    }
    return contact(req, res);
  });
};
