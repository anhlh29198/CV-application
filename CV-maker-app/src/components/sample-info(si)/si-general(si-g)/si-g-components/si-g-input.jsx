import { useState } from 'react';

const personalInputData = [
  { title: 'First Name', value: 'John', type: 'text', id: 0 },
  { title: 'Last Name', value: 'Doe', type: 'text', id: 1 },
  { title: 'Email', value: 'john@example.com', type: 'email', id: 2 },
  { title: 'Phone', value: '12345678', type: 'tel', id: 3 },
  { title: 'Address', value: 'Somewhere', type: 'text', id: 4 },
];

export function Si_g_input() {
  const [inputData, setInputData] = useState(personalInputData);

  function handleInputChange(e, id) {
    setInputData(
      inputData.map((data) => {
        if (data.id === id) {
          return { ...data, value: e.target.value };
        } else {
          return data;
        }
      })
    );
  }

  return (
    <div id="personal">
      <h4>Personal</h4>
      <ul className="grid">
        {inputData.map((data) => (
          <li
            className={
              data.title === 'Address' ? 'grid-items gd-col-sp-2' : 'grid-items'
            }
            key={data.id}
          >
            <label>{data.title}</label>
            <input
              type={data.type}
              value={data.title === 'Phone' ? '+' + data.value : data.value}
              onChange={(e) => {
                handleInputChange(e, data.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
