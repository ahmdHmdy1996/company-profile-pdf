import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load template components dynamically
async function getTemplateComponent(templateId) {
  switch (templateId) {
    case "classic":
      return (await import("./templates/Classic.js")).default;
    case "premium":
      return (await import("./templates/Premium.js")).default;
    case "business":
      return (await import("./templates/Business.js")).default;
    case "creative":
      return (await import("./templates/Creative.js")).default;
    case "minimal":
      return (await import("./templates/Minimal.js")).default;
    case "modern":
    default:
      return (await import("./templates/Modern.js")).default;
  }
}

// For new templates that return HTML strings directly
async function getTemplateHTML(templateId, data) {
  const templateFunction = await getTemplateComponent(templateId);

  // Check if it's a React component or HTML string function
  if (templateId === "premium" || templateId === "business") {
    return templateFunction({ data });
  }

  // For React components (modern, classic, creative, minimal)
  const dirAttr = data?.rtl ? "rtl" : "ltr";
  const html = renderToStaticMarkup(
    React.createElement(
      "html",
      { lang: data?.rtl ? "ar" : "en", dir: dirAttr },
      React.createElement(
        "head",
        null,
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        }),
        React.createElement("style", null, baseStyles),
        React.createElement(
          "title",
          null,
          data?.company?.name || "Company Profile"
        )
      ),
      React.createElement(
        "body",
        null,
        React.createElement(templateFunction, { data })
      )
    )
  );
  return "<!doctype html>" + html;
}

// Basic CSS injected for React-based templates
const baseStyles = `
  @font-face {
    font-family: 'Tajawal';
    src: url('https://fonts.gstatic.com/s/tajawal/v11/Iurf6YBj_oCad4k1lA.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Cairo';
    src: url('https://fonts.gstatic.com/s/cairo/v21/SLXGc1nY6HkvalIhTQ.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Tajawal, system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Helvetica Neue'; color: #0f172a; }
  h1,h2,h3 { font-family: Cairo, Tajawal, sans-serif; margin: 0 0 .5rem 0; }
  .chip { display:inline-block; padding:.25rem .5rem; border-radius:999px; border:1px solid #e2e8f0; font-size:.75rem; }
  .grid { display:grid; gap: 12px; }
  .muted { color:#475569; }
  .card { border:1px solid #e2e8f0; border-radius:16px; padding:16px; }
  .section { margin-bottom: 16px; }
`;

// Build full HTML document
export async function renderTemplateHTML(templateId, data) {
  return await getTemplateHTML(templateId, data);
}
