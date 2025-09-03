import React from "react";

export default function Minimal({ data }) {
  const d = data || {};
  const brand = d.brand || { color: "#1f2937", accent: "#6b7280" };
  const company = d.company || {
    name: "Company Name",
    tagline: "Your Tagline",
    location: "Location",
  };

  return (
    <div
      style={{
        padding: "40px 30px",
        fontFamily: "Georgia, serif",
        backgroundColor: "#fefefe",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      {/* Minimal header */}
      <header
        style={{
          textAlign: "center",
          paddingBottom: "30px",
          borderBottom: `1px solid ${brand.accent}30`,
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "300",
            margin: "0 0 8px 0",
            color: brand.color,
            letterSpacing: "-0.5px",
          }}
        >
          {company.name}
        </h1>
        <div
          style={{
            fontSize: "14px",
            color: brand.accent,
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "400",
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: brand.accent,
            marginTop: "8px",
          }}
        >
          {company.location}
        </div>
      </header>

      {/* About section */}
      {d.about && (
        <section style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#374151",
              textAlign: "justify",
              fontStyle: "italic",
            }}
          >
            {d.about}
          </p>
        </section>
      )}

      {/* Services section */}
      {d.services && d.services.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: brand.color,
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            {d.services.map((service, i) => (
              <div
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: `1px solid ${brand.accent}20`,
                  fontSize: "14px",
                  color: "#4b5563",
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects section */}
      {d.projects && d.projects.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: brand.color,
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Selected Projects
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {d.projects.slice(0, 4).map((project, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "15px",
                  borderBottom:
                    i < d.projects.length - 1
                      ? `1px solid ${brand.accent}20`
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    flex: 1,
                  }}
                >
                  {project.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: brand.accent,
                    fontWeight: "500",
                    minWidth: "60px",
                    textAlign: "right",
                  }}
                >
                  {project.year}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Team section */}
      {d.team && d.team.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: brand.color,
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {d.team.slice(0, 4).map((member, i) => (
              <div
                key={i}
                style={{
                  paddingBottom: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: brand.color,
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: brand.accent,
                    marginBottom: "8px",
                    fontStyle: "italic",
                  }}
                >
                  {member.title}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                    lineHeight: "1.5",
                  }}
                >
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Clients and contacts footer */}
      <footer
        style={{
          paddingTop: "30px",
          borderTop: `1px solid ${brand.accent}30`,
          textAlign: "center",
        }}
      >
        {d.clients && d.clients.length > 0 && (
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "12px",
                color: brand.accent,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "10px",
              }}
            >
              Clients
            </h3>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                lineHeight: "1.5",
              }}
            >
              {d.clients.join(" • ")}
            </div>
          </div>
        )}

        {d.contacts && (
          <div
            style={{
              fontSize: "11px",
              color: brand.accent,
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {d.contacts.email && <span>{d.contacts.email}</span>}
            {d.contacts.phone && <span>{d.contacts.phone}</span>}
            {d.contacts.website && <span>{d.contacts.website}</span>}
          </div>
        )}
      </footer>
    </div>
  );
}
