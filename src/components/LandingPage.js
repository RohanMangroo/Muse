import React from 'react';
import '../styles/landingPage.css';
import OAuthLogIn from './OAuthLogIn';
import GuestLogIn from '../GuestLogIn';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main>
        <header>
          <h1>MUSE</h1>
          <div></div>
          <p>
            Browse <span>Art</span> from museums around the world
          </p>
        </header>
        <section>
          <div className="o-auth">
            <OAuthLogIn type="Google" />
            <OAuthLogIn type="Facebook" />
          </div>
          <p>OR</p>
          <GuestLogIn />
        </section>
      </main>
    </div>
  );
}
