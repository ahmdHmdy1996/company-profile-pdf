import React from "react";

export default function Creative({ data }) {
  const d = data || {};
  const brand = d.brand || { color: "#8b5cf6", accent: "#f59e0b" };
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
        padding: 24,
        fontFamily: "Arial, sans-serif",
        background: `linear-gradient(135deg, ${brand.color}15, ${brand.accent}10)`,
        minHeight: "100vh",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .creative-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
          }
          .creative-gradient-text {
            background: linear-gradient(45deg, ${brand.color}, ${brand.accent});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .creative-service-card {
            background: white;
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: transform 0.2s;
          }
          .creative-service-card:hover {
            transform: translateY(-2px);
          }
        `,
        }}
      />

      {/* Header with creative layout */}
      <header
        className="creative-card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 30,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 150,
            height: 150,
            background: `linear-gradient(45deg, ${brand.color}, ${brand.accent})`,
            borderRadius: "50%",
            opacity: 0.1,
          }}
        ></div>

        <h1
          className="creative-gradient-text"
          style={{
            fontSize: 36,
            margin: "0 0 12px 0",
            fontWeight: "bold",
          }}
        >
          {company.name}
        </h1>
        <div
          style={{
            fontSize: 18,
            color: "#666",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            fontSize: 14,
            color: brand.color,
            padding: "6px 16px",
            background: `${brand.color}15`,
            borderRadius: 15,
            fontWeight: "500",
          }}
        >
          {company.location}
        </div>
      </header>

      {/* About section with creative styling */}
      <section
        className="creative-card"
        style={{
          padding: 24,
          marginBottom: 24,
          borderLeft: `6px solid ${brand.accent}`,
        }}
      >
        <h2
          style={{
            color: brand.color,
            fontSize: 24,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: brand.accent,
              borderRadius: "50%",
              marginRight: 12,
            }}
          ></span>
          About Us
        </h2>
        <p style={{ lineHeight: 1.7, color: "#555", fontSize: 16 }}>{about}</p>
      </section>

      {/* Services in creative grid */}
      <section style={{ marginBottom: 24 }}>
        <h2
          style={{
            color: brand.color,
            fontSize: 24,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="creative-service-card"
              style={{
                border: `2px solid ${
                  i % 2 === 0 ? brand.color : brand.accent
                }20`,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  background: `linear-gradient(45deg, ${brand.color}, ${brand.accent})`,
                  borderRadius: "50%",
                  margin: "0 auto 12px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: 14, fontWeight: "500", color: "#333" }}>
                {service}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects and Clients in two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 24,
        }}
      >
        {/* Projects section */}
        <section className="creative-card" style={{ padding: 24 }}>
          <h2
            style={{
              color: brand.color,
              fontSize: 20,
              marginBottom: 16,
            }}
          >
            Featured Projects
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {projects.slice(0, 4).map((project, i) => (
              <div
                key={i}
                style={{
                  padding: 12,
                  borderRadius: 8,
                  borderTop: `3px solid ${
                    i % 2 === 0 ? brand.color : brand.accent
                  }`,
                  backgroundColor: "#f9fafb",
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    marginBottom: 4,
                    color: "#333",
                  }}
                >
                  {project.name}
                </div>
                <div style={{ color: "#666", fontSize: 12 }}>
                  {project.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients and Team section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <section className="creative-card" style={{ padding: 24, flex: 1 }}>
            <h2
              style={{
                color: brand.color,
                fontSize: 18,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              Trusted Partners
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {clients.map((client, i) => (
                <span
                  key={i}
                  style={{
                    background: `${brand.color}10`,
                    color: brand.color,
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </section>

          {team.length > 0 && (
            <section className="creative-card" style={{ padding: 24, flex: 1 }}>
              <h2
                style={{
                  color: brand.color,
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Key Team Members
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {team.slice(0, 2).map((member, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      backgroundColor: "#f9fafb",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: 13,
                        color: brand.color,
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#666",
                        fontStyle: "italic",
                      }}
                    >
                      {member.title}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer with contacts */}
      <footer
        className="creative-card"
        style={{
          padding: 20,
          textAlign: "center",
          background: `linear-gradient(45deg, ${brand.color}05, ${brand.accent}05)`,
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: brand.color,
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            fontWeight: "500",
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
