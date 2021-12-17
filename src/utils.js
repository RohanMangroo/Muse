import { v4 as uuidv4 } from 'uuid';

/**Random Art */
import raphel from './resources/randomArtDummyData/600px-Raffael_020.jpg';
import donatello from './resources/randomArtDummyData/Donatello_david.jpg';
import albrectDurr from './resources/randomArtDummyData/durr.jpeg';
import jld from './resources/randomArtDummyData/JLD.jpg';
import paulCezanne from './resources/randomArtDummyData/randomArtHeader.jpg';
import rubens from './resources/randomArtDummyData/Rubens.jpg';
import tiepelo from './resources/randomArtDummyData/Tiepolo_Giovanni_Battista.jpg';
import velazquez from './resources/randomArtDummyData/DP.jpg';
import rem from './resources/randomArtDummyData/rembrandt.jpg';

/**Results */
import hopper from './resources/resultsDummyData/hopper.png';
import hopper2 from './resources/resultsDummyData/hopper2.jpg';
import hopper3 from './resources/resultsDummyData/hopper3.jpg';
import hopper4 from './resources/resultsDummyData/hopper4.jpg';

/**Gallery */
import image1 from './resources/galleryImages/image1.jpeg';
import image2 from './resources/galleryImages/image2.jpeg';
import image3 from './resources/galleryImages/image3.jpg';
import image4 from './resources/galleryImages/image4.jpeg';
import image5 from './resources/galleryImages/image5.jpeg';
import image6 from './resources/galleryImages/image6.jpeg';
import image7 from './resources/galleryImages/image7.jpeg';
import image8 from './resources/galleryImages/image8.jpg';
import image9 from './resources/galleryImages/image9.jpeg';
import image10 from './resources/galleryImages/image10.jpeg';
import image11 from './resources/galleryImages/image11.jpeg';
import image12 from './resources/galleryImages/image12.jpeg';
import image13 from './resources/galleryImages/image13.jpeg';
import image14 from './resources/galleryImages/image14.jpeg';

export const randomArtImages = [
  { artist: 'Raphael', img: raphel },
  { artist: 'Donatello', img: donatello },
  { artist: 'Dürer', img: albrectDurr },
  { artist: 'David', img: jld },
  { artist: 'Cézanne', img: paulCezanne },
  { artist: 'Rubens', img: rubens },
  { artist: 'Tiepolo', img: tiepelo },
  { artist: 'Velázquez', img: velazquez },
  { artist: 'Rembrandt', img: rem },
];

export const resultImages = [
  {
    artist: 'Edward Hopper',
    img: hopper,
    nationality: 'American',
    active: '1882-1967',
  },

  {
    artist: 'Edward Hopper',
    img: hopper2,
    nationality: 'American',
    active: '1882-1967',
  },

  {
    artist: 'Edward Hopper',
    img: hopper3,
    nationality: 'American',
    active: '1882-1967',
  },

  {
    artist: 'Edward Hopper',
    img: hopper4,
    nationality: 'American',
    active: '1882-1967',
  },
];

export const gallery = [
  {
    title: 'Title',
    img: image1,
  },
  {
    title: 'Title',
    img: image2,
  },
  {
    title: 'Title',
    img: image3,
  },
  {
    title: 'Title',
    img: image4,
  },
  {
    title: 'Title',
    img: image5,
  },
  {
    title: 'Title',
    img: image6,
  },
  {
    title: 'Title',
    img: image7,
  },
  {
    title: 'Title',
    img: image8,
  },
  {
    title: 'Title',
    img: image9,
  },
  {
    title: 'Title',
    img: image10,
  },
  {
    title: 'Title',
    img: image11,
  },
  {
    title: 'Title',
    img: image12,
  },
  {
    title: 'Title',
    img: image13,
  },
  {
    title: 'Title',
    img: image14,
  },
];
/**Drop Down Menu Arrays */
export const dropDownInfo = {
  museum: ['All Museums', 'Metropolitan Museum of Art', 'museum', 'museum'],
  type: ['Drawings', 'Paintings', 'Sculptures', 'Antiquity', 'Miscellaneous'],
  genre: [
    'The Renaissance',
    'Rococo',
    'Romanticism',
    'Impressionism',
    'Expressionism',
    'Surrealism',
    'Abstract',
  ],
  century: [
    '1900',
    '1800',
    '1700',
    '1600',
    '1500',
    '1400',
    '1300',
    '1200',
    '1100',
    'pre-1000',
  ],
  medium: [
    'Oil',
    'Acrylic',
    'Watercolors',
    'Charcoal',
    'Pastels',
    'Graphite',
    'Ink',
    'Marbel',
  ],
};

/*Creates a section of Divs*/
export function createSection(
  stop,
  nestedCount = 0,
  parentClass = null,
  childClass = null
) {
  const array = [];
  const nestedDivs = [];

  for (let i = 0; i < nestedCount; i++) {
    nestedDivs.push(<div className={childClass} key={uuidv4()}></div>);
  }

  for (let i = 0; i < stop; i++) {
    array.push(
      <div className={parentClass} key={uuidv4()}>
        {nestedDivs}
      </div>
    );
  }
  return array;
}
