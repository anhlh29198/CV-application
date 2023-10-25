import { handleInputChange } from '../../../../asset components/handleInputChange';

export function Si_d_description({ data, setData, isEdit }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <>
      <h4>Description</h4>
      <textarea
        disabled={!isEdit}
        name=""
        id=""
        cols="30"
        rows="10"
        value={inputData[0].value}
        onChange={(e) =>
          handleInputChange(e, inputData[0].id, inputData, setInputData)
        }
      ></textarea>
    </>
  );
}
