export function Si_submit({ isEdit, setIsEdit }) {
  return (
    <>
      <button
        disabled={!isEdit}
        onClick={() => setIsEdit(false)}
        id="submit-button"
      >
        Submit
      </button>
    </>
  );
}
