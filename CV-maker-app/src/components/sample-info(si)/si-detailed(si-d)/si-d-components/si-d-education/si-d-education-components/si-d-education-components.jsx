import { handleInputChange } from '../../../../../asset components/handleInputChange';

export function Si_d_education_components({ data, setData }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <ul className="grid">
      {inputData.map((entry) => (
        <li className="grid-items" key={entry.id}>
          <label htmlFor="">{entry.title}</label>
          <input
            type={entry.type}
            value={entry.value}
            onChange={(e) => {
              handleInputChange(e, entry.id, inputData, setInputData);
            }}
          />
        </li>
      ))}
      <button className="delete-btn">delete</button>
    </ul>
  );
}
