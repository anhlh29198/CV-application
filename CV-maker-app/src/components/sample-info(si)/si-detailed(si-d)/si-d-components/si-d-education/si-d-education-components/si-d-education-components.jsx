import { useState } from 'react';

const educationData = [
  { title: 'Degree', value: '', type: 'text', id: 0 },
  { title: 'School', value: '', type: 'text', id: 1 },
  { title: 'Start Date', value: '2020-09', type: 'month', id: 2 },
  { title: 'End Date', value: '2023-05', type: 'month', id: 3 },
];

export function Si_d_education_components() {
  const [inputData, setInputData] = useState(educationData);

  function handleInputChange(e, id) {
    setInputData(
      inputData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            value: e.target.value,
          };
        } else {
          return data;
        }
      })
    );
  }

  return (
    <ul className="grid">
      {inputData.map((data) => (
        <li className="grid-items" key={data.id}>
          <label htmlFor="">{data.title}</label>
          <input
            type={data.type}
            value={data.value}
            onChange={(e) => {
              handleInputChange(e, data.id);
            }}
          />
        </li>
      ))}
      <button className="delete-btn">delete</button>
    </ul>
  );
}
