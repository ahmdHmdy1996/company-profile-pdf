import React from "react";

export default function Creative({ data }) {
  const d = data || {};
  const brand = d.brand || { color: "#8b5cf6", accent: "#f59e0b" };
  const company = d.company || {
    name: "Company Name",
    tagline: "Your Tagline",
    location: "Location",
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        background: `linear-gradient(135deg, ${brand.color}15, ${brand.accent}10)`,
        minHeight: "600px",
      }}
    >
      {/* Header with creative layout */}
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          marginBottom: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            background: `linear-gradient(45deg, ${brand.color}, ${brand.accent})`,
            borderRadius: "50%",
            opacity: 0.1,
          }}
        ></div>

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px 0",
            background: `linear-gradient(45deg, ${brand.color}, ${brand.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {company.name}
        </h1>
        <div
          style={{
            fontSize: "16px",
            color: "#666",
            fontStyle: "italic",
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            fontSize: "14px",
            color: brand.color,
            marginTop: "8px",
            padding: "4px 12px",
            background: `${brand.color}15`,
            borderRadius: "12px",
          }}
        >
          {company.location}
        </div>
      </header>

      {/* About section with creative styling */}
      {d.about && (
        <section
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
            borderLeft: `5px solid ${brand.accent}`,
          }}
        >
          <h2
            style={{
              color: brand.color,
              fontSize: "20px",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: brand.accent,
                borderRadius: "50%",
                marginRight: "10px",
              }}
            ></span>
            About Us
          </h2>
          <p style={{ lineHeight: "1.6", color: "#555" }}>{d.about}</p>
        </section>
      )}

      {/* Services in creative grid */}
      {d.services && d.services.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2
            style={{
              color: brand.color,
              fontSize: "20px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {d.services.map((service, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  border: `2px solid ${
                    i % 2 === 0 ? brand.color : brand.accent
                  }20`,
                  transition: "transform 0.2s",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: `linear-gradient(45deg, ${brand.color}, ${brand.accent})`,
                    borderRadius: "50%",
                    margin: "0 auto 10px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {service}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects section */}
      {d.projects && d.projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2
            style={{
              color: brand.color,
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Featured Projects
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {d.projects.slice(0, 4).map((project, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  borderTop: `4px solid ${
                    i % 2 === 0 ? brand.color : brand.accent
                  }`,
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  {project.name}
                </div>
                <div style={{ color: "#666", fontSize: "12px" }}>
                  {project.year}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Clients section */}
      {d.clients && d.clients.length > 0 && (
        <section
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: brand.color,
              fontSize: "18px",
              marginBottom: "15px",
            }}
          >
            Trusted by Leading Organizations
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {d.clients.map((client, i) => (
              <span
                key={i}
                style={{
                  background: `${brand.color}10`,
                  color: brand.color,
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {client}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
