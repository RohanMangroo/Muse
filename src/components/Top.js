import { randomArtImages, featuredArtistDescriptions } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import '../styles/main-top.css';

export default function Top() {
  return (
    <div className="top flex-row">
      <TopLeft />
      <TopRight />
    </div>
  );
}

function TopLeft() {
  return (
    <section className="top-left flex-col">
      <div className="featured-artist-container flex-col">
        <header className="center-item">
          <h2>Featured Artists</h2>
        </header>
        <div className="sub-container flex-row">
          <div className="featured-artist flex-col">
            <div className="featured-artist-description">
              <h2>Michelangelo</h2>
              <h3>1475-1564</h3>
              <h3>Italian</h3>
              <p>{featuredArtistDescriptions.artistOne.p1}</p>
            </div>
          </div>
          <div className="featured-artist flex-col">
            <div className="featured-artist-description">
              <h2>Pablo Picasso</h2>
              <h3>1881-1973</h3>
              <h3>Spanish</h3>
              <p>{featuredArtistDescriptions.artistTwo.p1}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRight() {
  return (
    <section className="top-right flex-col">
      <div className="random-art flex-col">
        <header className="center-item">
          <h2>Random Art</h2>
        </header>
        {/* <section>{createSection(9, 2, 'random-art-card flex-col')}</section> */}
        <section>
          {randomArtImages.map((obj) => {
            return (
              <div
                style={{ backgroundImage: `url(${obj.img})` }}
                className="random-art-card flex-col"
                key={uuidv4()}
              >
                <div></div>
                <div className="center-item">
                  <h3>{obj.artist}</h3>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
