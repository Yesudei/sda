import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button
      className="logoo"
      onClick={() => navigate('/home')}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        textDecoration: 'none',
        color: 'inherit',
      }}
      aria-label="Go to Home"
    >
      e-Drum
    </button>
  );
}
