import React from 'react';
import '../styles/landingPage.css';
import OAuthLogIn from './OAuthLogIn';
import GuestLogIn from './GuestLogIn';
import googleImage from '../resources/Google__G__Logo.svg.png';
import facebookImage from '../resources/Facebook-logo.png';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main>
        <header>
          <h1>MUSE</h1>
          <div></div>
          <p>
            Browse <span>Art</span> from Museums around the world
          </p>
        </header>
        <section>
          <div className="oauth-container">
            <OAuthLogIn type="Google" image={googleImage} />
            <OAuthLogIn type="Facebook" image={facebookImage} />
          </div>
          <p>OR</p>
          <GuestLogIn />
        </section>
      </main>
    </div>
  );
}
