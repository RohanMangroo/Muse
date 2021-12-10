import React from 'react';

export default function OAuthLogIn({ type, image }) {
  const background = type === 'Google' ? '#367EC0' : '#3B5998';
  return (
    <div className="oauth-item" style={{ backgroundColor: background }}>
      <section>
        <img src={image} alt={type} />
      </section>
      <section>
        <h2>Log In with {type}</h2>
      </section>
    </div>
  );
}
