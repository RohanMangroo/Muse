import { v4 as uuidv4 } from 'uuid';

import raphel from './resources/randomArtDummyData/600px-Raffael_020.jpg';
import donatello from './resources/randomArtDummyData/Donatello_david.jpg';
import albrectDurr from './resources/randomArtDummyData/durr.jpeg';
import jld from './resources/randomArtDummyData/JLD.jpg';
import paulCezanne from './resources/randomArtDummyData/randomArtHeader.jpg';
import rubens from './resources/randomArtDummyData/Rubens.jpg';
import tiepelo from './resources/randomArtDummyData/Tiepolo_Giovanni_Battista.jpg';
import velazquez from './resources/randomArtDummyData/DP.jpg';
import rem from './resources/randomArtDummyData/rembrandt.jpg';

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
