import { ImageResponse } from 'next/og'

// Link-Vorschau ("Visitenkarte") für WhatsApp, Instagram, Facebook, LinkedIn, X …
export const alt = 'ViennaBarber – Premium Barbershop in Wien'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0B0D12 0%, #14171F 55%, #2A2410 100%)',
          color: '#F5F3EC',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -160,
            width: 460,
            height: 460,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,162,39,0.55) 0%, rgba(201,162,39,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 8, textTransform: 'uppercase', color: '#E2C366', fontWeight: 600 }}>
          Barbershop · 1. Bezirk · Wien
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 128, fontWeight: 800, lineHeight: 1 }}>
            <span>Vienna</span>
            <span style={{ color: '#C9A227' }}>Barber</span>
          </div>
          <div style={{ display: 'flex', marginTop: 22, fontSize: 42, color: 'rgba(245,243,236,0.82)', fontWeight: 500 }}>
            Haarschnitt · Fade · Bartpflege · Nassrasur
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(245,243,236,0.18)',
            paddingTop: 28,
            fontSize: 28,
          }}
        >
          <div style={{ display: 'flex', color: 'rgba(245,243,236,0.75)' }}>Bäckerstraße 8 · 1010 Wien</div>
          <div style={{ display: 'flex', background: '#C9A227', color: '#101010', padding: '14px 28px', borderRadius: 999, fontWeight: 700 }}>
            viennabarber.mabasian.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
