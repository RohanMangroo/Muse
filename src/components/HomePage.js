import '../styles/homepage.css';
import '../styles/homepage-right.css';
import '../styles/mediaQueries.css';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="main-container">
        <LeftSection />
        <section className="right-section">
          <div className="grid-container">
            <RightSection />
          </div>
        </section>
      </div>
    </div>
  );
}
