
import React from 'react';

export default function Classic({ data }) {
  const d = data || {};
  const brand = d.brand || { color: '#1d4ed8', accent: '#0ea5e9' };
  const company = d.company || { name: 'Team Arabia Company', tagline: 'Integrated CxA Services', location: 'Riyadh, KSA' };
  const about = d.about || 'Since 2006, delivering commissioning, TAB, and energy optimization across KSA.';
  const services = d.services || ['Commissioning (CxA)', 'HVAC TAB', 'Electrical T&C', 'O&M Manuals'];
  const approvals = d.approvals || ['SEC Approval (2021)', 'King Khalid Int. Airport (2020)'];
  const contacts = d.contacts || { phone: '+966-5-5555-5555', email: 'info@example.com', website: 'example.com' };

  return (
    <div style={{ padding: 18, lineHeight: 1.35 }}>
      <div style={{ background: brand.color, color: 'white', padding: '18px 20px', borderRadius: '0 0 12px 12px' }}>
        <h1 style={{ fontSize: 26 }}>{company.name}</h1>
        <div style={{ opacity: .9 }}>{company.tagline}</div>
      </div>

      <section className="section">
        <h2 style={{ color: brand.color, borderBottom: `2px solid ${brand.accent}`, paddingBottom: 4 }}>About</h2>
        <p className="muted">{about}</p>
      </section>

      <section className="section grid" style={{ gridTemplateColumns:'1.2fr .8fr' }}>
        <div className="card">
          <h3>Services</h3>
          <ul style={{ margin: '6px 0 0 20px' }}>
            {services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Approvals & Certificates</h3>
          <ul style={{ margin: '6px 0 0 20px' }}>
            {approvals.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="card">
        <h3>Contacts</h3>
        <div className="muted">{contacts.phone} · {contacts.email} · {contacts.website}</div>
      </section>
    </div>
  );
}
