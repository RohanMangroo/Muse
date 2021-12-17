import Search from './Search';
import Top from './Top';
import '../styles/gallery.css';
import '../styles/about.css';
import { v4 as uuidv4 } from 'uuid';

import { gallery } from '../utils';

/*Main Component*/
export default function Main() {
  return (
    <main className="main-container flex-col">
      <Top />
      <Search />
      <Gallery />
      <About />
    </main>
  );
}

function Gallery() {
  // return <div className="gallery">{createSection(14, 0, 'grid-cell')}</div>;
  return (
    <div style={{ overflow: 'auto' }}>
      <div className="gallery">
        {gallery.map((obj) => {
          return (
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${obj.img})` }}
              key={uuidv4()}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

function About() {
  return <div className="about"></div>;
}
