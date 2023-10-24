export function Si_d_description({ data, setData }) {
  const inputData = data.map((entry) => entry.data)[0];
  const setInputData = setData.map((entry) => entry.func)[0];
  return (
    <>
      <h4>Description</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      ></textarea>
    </>
  );
}
