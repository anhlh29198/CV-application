import { handleInputChange } from '../../../asset components/handleInputChange';

export function Si_g_input({ data, setData }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <div id="personal">
      <h4>Personal</h4>
      <ul className="grid">
        {inputData.map((entry) => (
          <li
            className={
              entry.title === 'Address'
                ? 'grid-items gd-col-sp-2'
                : 'grid-items'
            }
            key={entry.id}
          >
            <label>{entry.title}</label>
            <input
              type={entry.type}
              value={entry.value}
              onChange={(e) => {
                handleInputChange(e, entry.id, inputData, setInputData);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
