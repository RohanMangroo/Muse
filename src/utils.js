import { v4 as uuidv4 } from 'uuid';

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
