export function Ss_options({ data, setData, isEdit, setIsEdit }) {
  const inputData = data.map((entry) => entry.data);
  const setFuncs = setData.map((entry) => entry.func);

  function delData() {
    setFuncs.forEach((element, index) => {
      element(
        inputData[index].map((entry) => {
          return { ...entry, value: ' ' };
        })
      );
    });
  }

  return (
    <div className="fx fx-between" id="sample-options">
      <div className="fx">
        <button disabled={isEdit} onClick={() => setIsEdit(true)}>
          edit
        </button>
        <button onClick={delData}>delete</button>
      </div>
      <button>download</button>
    </div>
  );
}
