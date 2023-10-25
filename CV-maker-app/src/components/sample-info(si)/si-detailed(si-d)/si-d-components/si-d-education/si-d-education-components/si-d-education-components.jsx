import { handleInputChange } from '../../../../../asset components/handleInputChange';
import { educationData } from '../../../../../database/data';

let initialData = educationData;

export function Si_d_education_components({ data, setData, isEdit }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];

  let newData = inputData;

  function cancelNewData() {
    setInputData(initialData);
  }

  function setNewData() {
    initialData = newData;
  }

  function handleShits(e, id, inputData, setInputData) {
    newData = handleInputChange(e, id, inputData, setInputData);
  }

  return (
    <ul className="grid">
      {inputData.map((entry) => (
        <li className="grid-items" key={entry.id}>
          <label htmlFor="">{entry.title}</label>
          <input
            disabled={!isEdit}
            type={entry.type}
            value={entry.value}
            onChange={(e) => handleShits(e, entry.id, inputData, setInputData)}
          />
        </li>
      ))}
      <button className="delete-btn">delete</button>
      <div className="fx fx-end">
        <button className="cancel-btn" onClick={cancelNewData}>
          cancel
        </button>
        <button className="save-btn" onClick={setNewData}>
          save
        </button>
      </div>
    </ul>
  );
}
