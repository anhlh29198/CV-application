import { useState } from 'react';
import { shits } from '../database/data';

export function InputShits({ bigData, shit, setShit, componentId }) {
  const [initialValue, setInitialValue] = useState(
    shits.map((entry) => entry.value)
  );

  console.log(initialValue);

  function handleShit(e, id) {
    newShit = bigData.map((data) => {
      if (data.id === componentId) {
        return {
          ...data,
          data: shit.map((entry) => {
            if (entry.id === id) {
              return {
                ...entry,
                value: e.target.value,
              };
            } else {
              return entry;
            }
          }),
        };
      } else {
        return data;
      }
    });
    setShit(newShit);
  }

  function cancelShit() {
    setShit(
      bigData.map((data) => {
        if (data.id === componentId) {
          return {
            ...data,
            data: shit.map((entry, index) => {
              return {
                ...entry,
                value: initialValue[index],
              };
            }),
          };
        } else {
          return data;
        }
      })
    );
  }

  function saveShit() {
    setInitialValue(shit.map((entry) => entry.value));
  }

  let newShit = shit;

  return (
    <div className="fx-col">
      {shit.map((entry) => (
        <li key={entry.id}>
          <label htmlFor="">{entry.title}</label>
          <input
            type="text"
            value={entry.value}
            onChange={(e) => handleShit(e, entry.id)}
          />
        </li>
      ))}
      <div className="fx">
        <button onClick={cancelShit}>cancel</button>
        <button onClick={saveShit}>save</button>
      </div>
    </div>
  );
}
