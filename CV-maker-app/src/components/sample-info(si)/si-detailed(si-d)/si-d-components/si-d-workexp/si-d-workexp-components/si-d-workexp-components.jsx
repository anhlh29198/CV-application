import { handleInputChange } from '../../../../../asset components/handleInputChange';

export function Si_d_workexp_components({ data, setData }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <ul className="grid">
      {inputData.map((entry) => (
        <li
          className={
            entry.title === 'Employer' || entry.title === 'Description'
              ? 'grid-items gd-col-sp-2'
              : 'grid-items'
          }
          key={entry.id}
        >
          <label htmlFor="">{entry.title}</label>
          <>
            {entry.title === 'Description' ? (
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={entry.value}
                onChange={(e) =>
                  handleInputChange(e, entry.id, inputData, setInputData)
                }
              ></textarea>
            ) : (
              <input
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
  );
}
