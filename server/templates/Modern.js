
import React from 'react';

export default function Modern({ data }) {
  const d = data || {};
  const brand = d.brand || { color: '#0ea5e9', accent: '#22c55e' };
  const company = d.company || { name: 'Team Arabia Company', tagline: 'MEP Testing & Commissioning', location: 'Riyadh, KSA' };
  const about = d.about || 'We provide commissioning management services, HVAC Testing and Balancing (TAB), and energy efficiency solutions.';
  const services = d.services || ['Commissioning (CxA)', 'HVAC Testing & Balancing', 'Duct Leakage Testing', 'Electrical Testing & Commissioning'];
  const projects = d.projects || [{ name: 'King Khalid Int. Airport – T1 & T2', year: '2020' }, { name: 'Haramain High Speed Rail', year: '2019' }];
  const clients = d.clients || ['ARAMCO', 'SEC', 'SABIC', 'MOMRA'];
  const contacts = d.contacts || { phone: '+966-5-5555-5555', email: 'info@example.com', website: 'example.com' };
  const rtl = !!d.rtl;

  return (
    <div style={{ padding: 24, lineHeight: 1.35 }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0 16px 0', borderBottom:'4px solid '+brand.color }}>
        <div>
          <h1 style={{ fontSize: '28px' }}>{company.name}</h1>
          <div className="muted">{company.tagline}</div>
        </div>
        <div className="chip">{company.location}</div>
      </header>

      <section className="section grid" style={{ gridTemplateColumns:'1fr 1fr' }}>
        <div className="card">
          <h2>About Us</h2>
          <p className="muted">{about}</p>
          <div style={{ marginTop: 8, display:'flex', gap:8, flexWrap:'wrap' }}>
            {clients.map((c, i) => <span key={i} className="chip">{c}</span>)}
          </div>
        </div>
        <div className="card">
          <h2>Contacts</h2>
          <p className="muted">{contacts.phone} · {contacts.email} · {contacts.website}</p>
          <h3 style={{ marginTop: 8 }}>Core Services</h3>
          <ul style={{ margin: '6px 0 0 20px' }}>
            {services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 style={{ borderLeft: `6px solid ${brand.accent}`, paddingLeft: 8 }}>Selected Projects</h2>
        <div className="grid" style={{ gridTemplateColumns:'repeat(2, minmax(0,1fr))' }}>
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div className="muted">{p.year}</div>
            </div>
          ))}
        </div>
      </section>

      { (d.team && d.team.length) ? (
        <section className="section">
          <h2>Key Staff</h2>
          <div className="grid" style={{ gridTemplateColumns:'repeat(2, minmax(0,1fr))' }}>
            {d.team.map((m, i) => (
              <div className="card" key={i}>
                <div style={{ fontWeight: 600 }}>{m.name}</div>
                <div className="muted">{m.title}</div>
                <div style={{ fontSize: '.9rem', marginTop: 4 }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <footer style={{ marginTop: 24, paddingTop: 12, borderTop:'1px dashed #e2e8f0', fontSize: '.85rem', display:'flex', justifyContent:'space-between' }}>
        <div>NEBB Certified TAB – Certification valid</div>
        <div style={{ color: brand.color }}>{contacts.website}</div>
      </footer>
    </div>
  );
}
