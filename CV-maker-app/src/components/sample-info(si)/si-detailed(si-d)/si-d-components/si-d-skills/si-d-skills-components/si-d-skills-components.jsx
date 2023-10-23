import { useState } from 'react';

const skillsData = [
  { title: 'Skill', value: '', type: 'text', id: 0 },
  { title: 'Level', value: 'default', type: '', id: 1 },
];

export function Si_d_skills_components() {
  const [inputData, setInputData] = useState(skillsData);

  function handleInputData(e, id) {
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
    <>
      <ul className="grid">
        {inputData.map((data) => (
          <li className="grid-items" key={data.id}>
            <label htmlFor="">{data.title}</label>
            <>
              {data.title === 'Level' ? (
                <select
                  value={data.value}
                  onChange={(e) => handleInputData(e, data.id)}
                >
                  <option value="default">Select level</option>
                  <option value="expert">Expert</option>
                  <option value="exeperienced">Experienced</option>
                  <option value="skillful">Skillful</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="beginner">Beginner</option>
                </select>
              ) : (
                <input
                  type={data.type}
                  value={data.value}
                  onChange={(e) => handleInputData(e, data.id)}
                />
              )}
            </>
          </li>
        ))}
        <button className="delete-btn">delete</button>
      </ul>
    </>
  );
}
