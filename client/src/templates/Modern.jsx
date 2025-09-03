
import React from 'react'

export default function Modern({ data }) {
  const d = data
  const brandColor = '#0ea5e9'
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ borderBottom: `3px solid ${brandColor}` }}>{d.company.name}</h2>
      <div style={{ color: '#475569' }}>{d.company.tagline}</div>
      <p>{d.about}</p>
      <strong>Services</strong>
      <ul>{d.services.map((s,i)=><li key={i}>{s}</li>)}</ul>
    </div>
  )
}
