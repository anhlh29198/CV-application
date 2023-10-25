import { handleInputChange } from '../../../../../asset components/handleInputChange';

export function Si_d_skills_components({ data, setData, isEdit }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <>
      <ul className="grid">
        {inputData.map((entry) => (
          <li className="grid-items" key={entry.id}>
            <label htmlFor="">{entry.title}</label>
            <>
              {entry.title === 'Level' ? (
                <select
                  disabled={!isEdit}
                  value={entry.value}
                  onChange={(e) =>
                    handleInputChange(e, entry.id, inputData, setInputData)
                  }
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
                  disabled={!isEdit}
                  type={entry.type}
                  value={entry.value}
                  onChange={(e) =>
                    handleInputChange(e, entry.id, inputData, setInputData)
                  }
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
