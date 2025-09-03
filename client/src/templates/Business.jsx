import React from "react";

const Business = ({ data }) => {
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
  const primaryColor = brand.color || "#1e293b";
  const accentColor = brand.accent || "#f59e0b";

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
        color: #334155;
        direction: ${direction};
        text-align: ${textAlign};
        background: #f8fafc;
      }
      
      .container {
        max-width: 210mm;
        margin: 0 auto;
        background: white;
      }
      
      .header {
        background: white;
        border-bottom: 4px solid ${primaryColor};
        padding: 2rem;
        position: relative;
      }
      
      .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        ${rtl ? "flex-direction: row-reverse;" : ""}
      }
      
      .logo-section {
        display: flex;
        align-items: center;
        ${rtl ? "flex-direction: row-reverse;" : ""}
      }
      
      .logo-placeholder {
        width: 60px;
        height: 60px;
        background: ${primaryColor};
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: ${rtl ? "0" : "1rem"};
        margin-left: ${rtl ? "1rem" : "0"};
      }
      
      .company-info h1 {
        font-size: 2rem;
        font-weight: 700;
        color: ${primaryColor};
        margin-bottom: 0.3rem;
      }
      
      .company-info p {
        color: #64748b;
        font-size: 1.1rem;
      }
      
      .contact-header {
        text-align: ${rtl ? "left" : "right"};
        color: #64748b;
        font-size: 0.9rem;
      }
      
      .hero-section {
        background: linear-gradient(135deg, ${primaryColor} 0%, #475569 100%);
        color: white;
        padding: 3rem 2rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></svg>') repeat;
        background-size: 20px 20px;
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
      }
      
      .hero-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      
      .hero-text {
        font-size: 1.2rem;
        opacity: 0.9;
        max-width: 600px;
        margin: 0 auto;
      }
      
      .section {
        padding: 2.5rem 2rem;
      }
      
      .section-title {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${primaryColor};
        margin-bottom: 2rem;
        position: relative;
        display: inline-block;
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        bottom: -8px;
        ${rtl ? "right: 0;" : "left: 0;"}
        width: 100%;
        height: 3px;
        background: ${accentColor};
      }
      
      .two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-top: 2rem;
      }
      
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }
      
      .service-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 2rem 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
        position: relative;
      }
      
      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        border-color: ${accentColor};
      }
      
      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background: ${accentColor};
        border-radius: 0 0 8px 8px;
      }
      
      .service-title {
        font-weight: 600;
        color: ${primaryColor};
        margin-top: 1rem;
      }
      
      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      
      .team-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
      }
      
      .team-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      }
      
      .member-avatar {
        width: 80px;
        height: 80px;
        background: ${primaryColor};
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 0 auto 1rem;
      }
      
      .member-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: ${primaryColor};
        margin-bottom: 0.5rem;
      }
      
      .member-title {
        color: ${accentColor};
        font-weight: 500;
        margin-bottom: 1rem;
      }
      
      .member-bio {
        color: #64748b;
        font-size: 0.9rem;
      }
      
      .clients-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      
      .client-item {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem 1rem;
        text-align: center;
        font-weight: 500;
        color: ${primaryColor};
        transition: all 0.3s ease;
      }
      
      .client-item:hover {
        border-color: ${accentColor};
        color: ${accentColor};
      }
      
      .footer {
        background: ${primaryColor};
        color: white;
        padding: 3rem 2rem;
        text-align: center;
      }
      
      .footer-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .footer-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      
      .contact-info {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        flex-wrap: wrap;
      }
      
      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    </style>
  `;

  return (
    <div className="business-template" dir={direction}>
      <div dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-top">
            <div className="logo-section">
              {data.logo ? (
                <img
                  src={data.logo}
                  alt="Company Logo"
                  style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                />
              ) : (
                <div className="logo-placeholder">
                  {company.name ? company.name.charAt(0) : "C"}
                </div>
              )}
              <div className="company-info">
                <h1>{company.name || "Company Name"}</h1>
                <p>{company.tagline || "Your Business Tagline"}</p>
              </div>
            </div>
            <div className="contact-header">
              {contacts.email && <div>📧 {contacts.email}</div>}
              {contacts.phone && <div>📞 {contacts.phone}</div>}
              {company.location && <div>📍 {company.location}</div>}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">
              {rtl ? "مرحباً بكم في شركتنا" : "Welcome to Our Company"}
            </h2>
            <p className="hero-text">
              {about ||
                "We provide exceptional services and solutions for your business needs."}
            </p>
          </div>
        </div>

        {/* Services Section */}
        {services.length > 0 && (
          <div className="section">
            <h2 className="section-title">
              {rtl ? "خدماتنا" : "Our Services"}
            </h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-title">{service}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {team.length > 0 && (
          <div className="section">
            <h2 className="section-title">{rtl ? "فريقنا" : "Our Team"}</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-avatar">
                    {member.name ? member.name.charAt(0) : "M"}
                  </div>
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                  <div className="member-bio">{member.bio}</div>
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
            <div className="services-grid">
              {projects.map((project, index) => (
                <div key={index} className="service-card">
                  <div className="service-title">{project.name}</div>
                  <div
                    style={{
                      color: accentColor,
                      marginTop: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    {project.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clients Section */}
        {clients.length > 0 && (
          <div className="section">
            <h2 className="section-title">{rtl ? "عملاؤنا" : "Our Clients"}</h2>
            <div className="clients-list">
              {clients.map((client, index) => (
                <div key={index} className="client-item">
                  {client}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <h3 className="footer-title">
              {rtl ? "تواصل معنا" : "Get In Touch"}
            </h3>
            <p>
              {rtl
                ? "نحن هنا لخدمتكم وتلبية احتياجاتكم"
                : "We're here to serve you and meet your needs"}
            </p>
            <div className="contact-info">
              {contacts.phone && (
                <div className="contact-item">
                  <span>📞</span>
                  <span>{contacts.phone}</span>
                </div>
              )}
              {contacts.email && (
                <div className="contact-item">
                  <span>✉️</span>
                  <span>{contacts.email}</span>
                </div>
              )}
              {contacts.website && (
                <div className="contact-item">
                  <span>🌐</span>
                  <span>{contacts.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
