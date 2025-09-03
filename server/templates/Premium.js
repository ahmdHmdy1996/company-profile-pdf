import React from "react";
import { renderToString } from "react-dom/server";

const Premium = ({ data }) => {
  const {
    rtl = false,
    brand = {},
    company = {},
    about = "",
    clients = [],
    services = [],
    projects = [],
    team = [],
    contacts = {},
    approvals = [],
  } = data;
  const direction = rtl ? "rtl" : "ltr";
  const textAlign = rtl ? "text-right" : "text-left";
  const primaryColor = brand.color || "#6366f1";
  const accentColor = brand.accent || "#10b981";

  const styles = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: ${
          rtl
            ? "'Noto Sans Arabic', Arial, sans-serif"
            : "'Inter', Arial, sans-serif"
        };
        line-height: 1.6;
        color: #1f2937;
        direction: ${direction};
        text-align: ${textAlign};
      }
      
      .container {
        max-width: 210mm;
        margin: 0 auto;
        background: white;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
      }
      
      .header {
        background: linear-gradient(135deg, ${primaryColor}, ${accentColor});
        color: white;
        padding: 3rem 2rem;
        position: relative;
        overflow: hidden;
      }
      
      .header::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -20%;
        width: 200px;
        height: 200px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
      }
      
      .header::after {
        content: '';
        position: absolute;
        bottom: -30%;
        left: -10%;
        width: 150px;
        height: 150px;
        background: rgba(255,255,255,0.05);
        border-radius: 50%;
      }
      
      .header-content {
        position: relative;
        z-index: 2;
      }
      
      .company-name {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .tagline {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-bottom: 1rem;
      }
      
      .location {
        font-size: 1rem;
        opacity: 0.8;
        display: flex;
        align-items: center;
        ${rtl ? "justify-content: flex-end;" : ""}
      }
      
      .section {
        padding: 2rem;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .section:last-child {
        border-bottom: none;
      }
      
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${primaryColor};
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        ${rtl ? "right: 0;" : "left: 0;"}
        width: 50px;
        height: 3px;
        background: ${accentColor};
      }
      
      .about-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #4b5563;
      }
      
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
      }
      
      .card {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        transition: transform 0.2s;
      }
      
      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      
      .card-title {
        font-weight: 600;
        color: ${primaryColor};
        margin-bottom: 0.5rem;
      }
      
      .list {
        list-style: none;
      }
      
      .list-item {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e5e7eb;
        position: relative;
        ${rtl ? "padding-right: 1.5rem;" : "padding-left: 1.5rem;"}
      }
      
      .list-item:last-child {
        border-bottom: none;
      }
      
      .list-item::before {
        content: '●';
        color: ${accentColor};
        font-weight: bold;
        position: absolute;
        ${rtl ? "right: 0;" : "left: 0;"}
      }
      
      .team-member {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      }
      
      .member-name {
        font-weight: 600;
        color: ${primaryColor};
        margin-bottom: 0.3rem;
      }
      
      .member-title {
        color: ${accentColor};
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      
      .member-bio {
        color: #6b7280;
        font-size: 0.9rem;
      }
      
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }
      
      .contact-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        background: #f3f4f6;
        border-radius: 8px;
        ${rtl ? "flex-direction: row-reverse;" : ""}
      }
      
      .contact-icon {
        width: 20px;
        height: 20px;
        margin-right: ${rtl ? "0" : "0.75rem"};
        margin-left: ${rtl ? "0.75rem" : "0"};
        color: ${primaryColor};
      }
      
      .footer {
        background: #1f2937;
        color: white;
        padding: 2rem;
        text-align: center;
      }
      
      .logo-placeholder {
        width: 80px;
        height: 80px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
      }
    </style>
  `;

  return `
    <!DOCTYPE html>
    <html dir="${direction}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Company Profile - Premium</title>
      ${styles}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-content">
            ${
              data.logo
                ? `<img src="${data.logo}" alt="Company Logo" style="width: 80px; height: 80px; margin-bottom: 1rem; border-radius: 50%;" />`
                : `<div class="logo-placeholder">${
                    company.name ? company.name.charAt(0) : "C"
                  }</div>`
            }
            <h1 class="company-name">${company.name || "Company Name"}</h1>
            <p class="tagline">${company.tagline || "Your Business Tagline"}</p>
            <div class="location">📍 ${
              company.location || "Your Location"
            }</div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">${rtl ? "نبذة عنا" : "About Us"}</h2>
          <p class="about-text">${
            about || "Your company description goes here..."
          }</p>
        </div>

        ${
          services.length > 0
            ? `
        <div class="section">
          <h2 class="section-title">${rtl ? "خدماتنا" : "Our Services"}</h2>
          <div class="grid">
            ${services
              .map(
                (service) =>
                  `<div class="card"><div class="card-title">${service}</div></div>`
              )
              .join("")}
          </div>
        </div>
        `
            : ""
        }

        ${
          projects.length > 0
            ? `
        <div class="section">
          <h2 class="section-title">${rtl ? "مشاريعنا" : "Our Projects"}</h2>
          <div class="grid">
            ${projects
              .map(
                (project) => `
              <div class="card">
                <div class="card-title">${project.name}</div>
                <div style="color: ${accentColor}; font-weight: 500;">${project.year}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        `
            : ""
        }

        ${
          team.length > 0
            ? `
        <div class="section">
          <h2 class="section-title">${rtl ? "فريقنا" : "Our Team"}</h2>
          <div class="grid">
            ${team
              .map(
                (member) => `
              <div class="team-member">
                <div class="member-name">${member.name}</div>
                <div class="member-title">${member.title}</div>
                <div class="member-bio">${member.bio}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        `
            : ""
        }

        ${
          clients.length > 0
            ? `
        <div class="section">
          <h2 class="section-title">${rtl ? "عملاؤنا" : "Our Clients"}</h2>
          <ul class="list">
            ${clients
              .map((client) => `<li class="list-item">${client}</li>`)
              .join("")}
          </ul>
        </div>
        `
            : ""
        }

        <div class="section">
          <h2 class="section-title">${rtl ? "تواصل معنا" : "Contact Us"}</h2>
          <div class="contact-grid">
            ${
              contacts.phone
                ? `<div class="contact-item"><div class="contact-icon">📞</div><div>${contacts.phone}</div></div>`
                : ""
            }
            ${
              contacts.email
                ? `<div class="contact-item"><div class="contact-icon">✉️</div><div>${contacts.email}</div></div>`
                : ""
            }
            ${
              contacts.website
                ? `<div class="contact-item"><div class="contact-icon">🌐</div><div>${contacts.website}</div></div>`
                : ""
            }
          </div>
        </div>

        <div class="footer">
          <p>${rtl ? "شكراً لاختياركم لنا" : "Thank you for choosing us"}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default Premium;
