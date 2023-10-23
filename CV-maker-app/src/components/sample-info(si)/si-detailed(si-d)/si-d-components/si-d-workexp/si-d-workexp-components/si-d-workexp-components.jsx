import { useState } from 'react';

const workexpData = [
  { title: 'Job Title', value: '', type: 'text', id: 0 },
  { title: 'City/Town', value: '', type: 'text', id: 1 },
  { title: 'Employer', value: '', type: 'text', id: 2 },
  { title: 'Start Date', value: '2022-10', type: 'month', id: 3 },
  { title: 'End Date', value: '2023-04', type: 'month', id: 4 },
  { title: 'Description', value: '', type: '', id: 5 },
];

export function Si_d_workexp_components() {
  const [inputData, setInputData] = useState(workexpData);

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
        <li
          className={
            data.title === 'Employer' || data.title === 'Description'
              ? 'grid-items gd-col-sp-2'
              : 'grid-items'
          }
          key={data.id}
        >
          <label htmlFor="">{data.title}</label>
          <>
            {data.title === 'Description' ? (
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={data.value}
                onChange={(e) => handleInputChange(e, data.id)}
              ></textarea>
            ) : (
              <input
                type={data.type}
                value={data.value}
                onChange={(e) => handleInputChange(e, data.id)}
              />
            )}
          </>
        </li>
      ))}
      <button className="delete-btn">delete</button>
    </ul>
  );
}
