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
