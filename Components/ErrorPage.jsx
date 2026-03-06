import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'var(--font-display, Syne, sans-serif)',
      background: 'var(--bg-primary, #0a0a0f)',
      color: 'var(--text-primary, #f0f0f8)',
    }}>
      <span style={{ fontSize: '80px', lineHeight: 1 }}>404</span>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-secondary, #9898b8)', maxWidth: '420px', lineHeight: 1.6, fontSize: '15px' }}>
        We couldn't find the page you were looking for. It may have been moved or deleted.
      </p>
      <Link to="/" style={{
        marginTop: '16px',
        padding: '12px 28px',
        background: 'var(--accent, #6c63ff)',
        color: 'white',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}>
        ← Go Home
      </Link>
    </div>
  )
}

export default ErrorPage