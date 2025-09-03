import express from "express";
import cors from "cors";
import { renderTemplateHTML } from "./render.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// List available templates
app.get("/templates", (req, res) => {
  const templates = [
    { id: "premium", name: "Premium (Modern Gradient)", rtl: true },
    { id: "business", name: "Business (Professional)", rtl: true },
    { id: "modern", name: "Modern (Clean)", rtl: true },
    { id: "classic", name: "Classic (Corporate Blue)", rtl: true },
    { id: "creative", name: "Creative (Colorful)", rtl: true },
    { id: "minimal", name: "Minimal (Elegant)", rtl: true },
  ];
  res.json(templates);
});

// Render HTML for a given template + data (useful for preview or debugging)
app.post("/render", async (req, res) => {
  const { templateId, data } = req.body || {};
  try {
    const html = await renderTemplateHTML(templateId || "modern", data || {});
    res.type("html").send(html);
  } catch (e) {
    res.status(500).json({ error: e?.message || String(e) });
  }
});

// Export PDF using headless Chrome (Puppeteer)
app.post("/export", async (req, res) => {
  const { templateId, data, options } = req.body || {};
  try {
    const html = await renderTemplateHTML(templateId || "modern", data || {});
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({
      format: (options && options.format) || "A4",
      margin: { top: "15mm", bottom: "15mm", left: "12mm", right: "12mm" },
      printBackground: true,
    });
    await browser.close();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="company-profile-${templateId}.pdf"`
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  } catch (e) {
    res.status(500).json({ error: e?.message || String(e) });
  }
});

// Serve a simple health check
app.get("/", (req, res) => res.send("Company Profile PDF Server is running."));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
