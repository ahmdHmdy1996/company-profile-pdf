import React from "react";

export default function Minimal({ data }) {
  const d = data || {};
  const brand = d.brand || { color: "#1f2937", accent: "#6b7280" };
  const company = d.company || {
    name: "Team Arabia Company",
    tagline: "MEP Testing & Commissioning",
    location: "Riyadh, KSA",
  };
  const about =
    d.about ||
    "We provide commissioning management services, HVAC Testing and Balancing (TAB), and energy efficiency solutions.";
  const services = d.services || [
    "Commissioning (CxA)",
    "HVAC Testing & Balancing",
    "Duct Leakage Testing",
    "Electrical Testing & Commissioning",
  ];
  const projects = d.projects || [
    { name: "King Khalid Int. Airport – T1 & T2", year: "2020" },
    { name: "Haramain High Speed Rail", year: "2019" },
  ];
  const clients = d.clients || ["ARAMCO", "SEC", "SABIC", "MOMRA"];
  const contacts = d.contacts || {
    phone: "+966-5-5555-5555",
    email: "info@example.com",
    website: "example.com",
  };
  const team = d.team || [];
  const rtl = !!d.rtl;

  return (
    <div
      style={{
        padding: "40px 30px",
        fontFamily: "Georgia, serif",
        backgroundColor: "#fefefe",
        maxWidth: 800,
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .minimal-divider {
            border-bottom: 1px solid ${brand.accent}30;
          }
          .minimal-text {
            color: #374151;
          }
          .minimal-muted {
            color: ${brand.accent};
          }
        `,
        }}
      />

      {/* Minimal header */}
      <header
        style={{
          textAlign: "center",
          paddingBottom: 30,
          marginBottom: 40,
        }}
        className="minimal-divider"
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 300,
            margin: "0 0 12px 0",
            color: brand.color,
            letterSpacing: "-0.5px",
          }}
        >
          {company.name}
        </h1>
        <div
          style={{
            fontSize: 16,
            color: brand.accent,
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            fontSize: 14,
            color: brand.accent,
          }}
        >
          {company.location}
        </div>
      </header>

      {/* About section */}
      <section style={{ marginBottom: 50 }}>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "#374151",
            textAlign: "justify",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          {about}
        </p>
      </section>

      {/* Services section */}
      <section style={{ marginBottom: 50 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: brand.color,
            marginBottom: 24,
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                padding: "16px 0",
                borderBottom: `1px solid ${brand.accent}20`,
                fontSize: 15,
                color: "#4b5563",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Projects and Team in columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginBottom: 50,
        }}
      >
        {/* Projects section */}
        <section>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: brand.color,
              marginBottom: 24,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Selected Projects
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {projects.slice(0, 4).map((project, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  paddingBottom: 18,
                  borderBottom:
                    i < projects.length - 1
                      ? `1px solid ${brand.accent}20`
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    color: "#374151",
                    flex: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {project.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: brand.accent,
                    fontWeight: 500,
                    minWidth: 60,
                    textAlign: "right",
                    marginLeft: 16,
                  }}
                >
                  {project.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team section */}
        {team.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: brand.color,
                marginBottom: 24,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Team
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {team.slice(0, 3).map((member, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: 18,
                    borderBottom:
                      i < team.length - 1
                        ? `1px solid ${brand.accent}20`
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: brand.color,
                      marginBottom: 6,
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: brand.accent,
                      marginBottom: 8,
                      fontStyle: "italic",
                    }}
                  >
                    {member.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#6b7280",
                      lineHeight: 1.5,
                    }}
                  >
                    {member.bio && member.bio.length > 100
                      ? member.bio.substring(0, 100) + "..."
                      : member.bio}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Clients section */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: 14,
            color: brand.accent,
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: 16,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          Trusted by Leading Organizations
        </h3>
        <div
          style={{
            fontSize: 13,
            color: "#6b7280",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          {clients.join(" • ")}
        </div>
      </section>

      {/* Contacts footer */}
      <footer
        style={{
          paddingTop: 30,
          textAlign: "center",
        }}
        className="minimal-divider"
      >
        <div
          style={{
            fontSize: 12,
            color: brand.accent,
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          <span>{contacts.email}</span>
          <span>{contacts.phone}</span>
          <span>{contacts.website}</span>
        </div>
      </footer>
    </div>
  );
}
