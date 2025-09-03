import React from "react";

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

  return (
    <div className="premium-template" dir={direction}>
      <div dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            {data.logo && (
              <img
                src={data.logo}
                alt="Company Logo"
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1rem",
                  borderRadius: "50%",
                }}
              />
            )}
            {!data.logo && (
              <div className="logo-placeholder">
                {company.name ? company.name.charAt(0) : "C"}
              </div>
            )}
            <h1 className="company-name">{company.name || "Company Name"}</h1>
            <p className="tagline">
              {company.tagline || "Your Business Tagline"}
            </p>
            <div className="location">
              📍 {company.location || "Your Location"}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="section">
          <h2 className="section-title">{rtl ? "نبذة عنا" : "About Us"}</h2>
          <p className="about-text">
            {about || "Your company description goes here..."}
          </p>
        </div>

        {/* Services Section */}
        {services.length > 0 && (
          <div className="section">
            <h2 className="section-title">
              {rtl ? "خدماتنا" : "Our Services"}
            </h2>
            <div className="grid">
              {services.map((service, index) => (
                <div key={index} className="card">
                  <div className="card-title">{service}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <div className="section">
            <h2 className="section-title">
              {rtl ? "مشاريعنا" : "Our Projects"}
            </h2>
            <div className="grid">
              {projects.map((project, index) => (
                <div key={index} className="card">
                  <div className="card-title">{project.name}</div>
                  <div style={{ color: accentColor, fontWeight: "500" }}>
                    {project.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {team.length > 0 && (
          <div className="section">
            <h2 className="section-title">{rtl ? "فريقنا" : "Our Team"}</h2>
            <div className="grid">
              {team.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                  <div className="member-bio">{member.bio}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clients Section */}
        {clients.length > 0 && (
          <div className="section">
            <h2 className="section-title">{rtl ? "عملاؤنا" : "Our Clients"}</h2>
            <ul className="list">
              {clients.map((client, index) => (
                <li key={index} className="list-item">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Section */}
        <div className="section">
          <h2 className="section-title">{rtl ? "تواصل معنا" : "Contact Us"}</h2>
          <div className="contact-grid">
            {contacts.phone && (
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>{contacts.phone}</div>
              </div>
            )}
            {contacts.email && (
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>{contacts.email}</div>
              </div>
            )}
            {contacts.website && (
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div>{contacts.website}</div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>{rtl ? "شكراً لاختياركم لنا" : "Thank you for choosing us"}</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
