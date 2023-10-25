import { useState } from 'react';
import { InputShits } from './input';
import { OutputShits } from './output';
import { shits } from '../database/data';
import { v4 as uuidv4 } from 'uuid';

export function Combine() {
  const [shit, setShit] = useState([{ id: uuidv4(), data: shits }]);

  function addAlot() {
    setShit([...shit, { id: uuidv4(), data: shits }]);
  }

  function deleteComponent(id) {
    setShit(shit.filter((entry) => entry.id !== id));
  }

  return (
    <div className="fx-col">
      <div>
        {shit.map((entry) => (
          <li key={entry.id}>
            <InputShits
              bigData={shit}
              shit={entry.data}
              setShit={setShit}
              componentId={entry.id}
            />
            <button
              onClick={() => {
                deleteComponent(entry.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </div>
      <button onClick={addAlot}>Add another input</button>
      <div>
        {shit.map((entry) => (
          <li key={entry.id}>
            <OutputShits shit={entry.data} />
          </li>
        ))}
      </div>
    </div>
  );
}
