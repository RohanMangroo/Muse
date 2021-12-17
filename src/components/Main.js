import { createSection } from '../utils';
import Search from './Search';
import Top from './Top';
import '../styles/gallery.css';
import '../styles/about.css';

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
  return <div className="gallery">{createSection(14, 0, 'grid-cell')}</div>;
}

function About() {
  return <div className="about"></div>;
}
