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

/**Hero Images */
import monet from './resources/heroImages/Claude-Monet.jpeg';
import hockney from './resources/heroImages/hockney-top.jpg';
import wave from './resources/heroImages/main-image.jpeg';
import night from './resources/heroImages/night.jpg';
import kankan from './resources/heroImages/Wassily.jpg';
import paul from './resources/heroImages/PaulCezanne6.jpg';

export const defaultSearch = [
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 2,
    imageid: '6c048812-3839-4336-cc8f-9735304d3beb',
    manifestid: 105933,
    origin: 'Japan',
    title:
      'Ejiri: Distant View of Shimizu Harbor in Clear Weather after Snow (Ejiri, Shimizu no minato enbo, yukibare), from the series "Fifty-three Stations of the Tokaido (Tokaido gojusan tsugi no uchi)," also known as the Gyosho Tokaido',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 3,
    imageid: '124c27c6-2889-e012-6566-006f81a390d9',
    manifestid: 10922,
    origin: 'Japan',
    title: 'Macaw on a pine branch',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 4,
    imageid: 'c047003a-949c-a581-7c5a-2c415e8cac75',
    manifestid: 10926,
    origin: 'Japan',
    title:
      'Mishima: Morning Mist (Mishima, asagiri), from the series "Fifty-three Stations of the Tokaido Road (Tokaido gojusan tsugi no uchi)," also known as the Hoeido Tokaido',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 1,
    imageid: '1c574a4f-48e9-e41d-a1aa-fbf62286dd64',
    manifestid: 10444,
    origin: 'Japan',
    title:
      'Mouth of the Naka River (Nakagawa guchi no zu), from an untitled series of famous views of the Edo suburbs',
  },
];
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

export const heroImages = [paul, monet, hockney, wave, night, kankan];
export const featuredArtistDescriptions = {
  artistOne: {
    p1: `Michelangelo di Lodovico Buonarroti Simoni, known simply as
    Michelangelo was an Italian sculptor, painter, architect and
    poet of the High Renaissance born in the Republic of Florence,
    whose work had a major influence on the development of Western
    art, particularly in relation to the Renaissance notions of
    humanism and naturalism. He is often considered a contender for
    the title of the archetypal Renaissance man, along with his
    rival and elder contemporary, Leonardo da Vinci.`,

    p2: `Given the
    sheer volume of surviving correspondence, sketches, and
    reminiscences, Michelangelo is among best-documented artist of
    the 16th century and several scholars have described
    Michelangelo as the most accomplished artist of his era.`,
  },

  artistTwo: {
    p1: `Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.`,

    p2: `Picasso demonstrated extraordinary artistic talent in his early years, painting in a naturalistic manner through his childhood and adolescence. During the first decade of the 20th century, his style changed as he experimented with different theories, techniques, and ideas`,
  },
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
