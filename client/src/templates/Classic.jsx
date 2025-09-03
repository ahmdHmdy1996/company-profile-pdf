
import React from 'react'

export default function Classic({ data }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ background:'#1d4ed8', color:'white', padding:'8px 12px', borderRadius:8 }}>{data.company.name}</h2>
      <p>{data.about}</p>
    </div>
  )
}
