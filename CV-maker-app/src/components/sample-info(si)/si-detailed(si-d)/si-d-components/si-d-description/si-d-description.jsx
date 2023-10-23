import { useState } from 'react';

export function Si_d_description() {
  const [inputData, setInputData] = useState('');

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  return (
    <>
      <h4>Description</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={inputData}
        onChange={(e) => handleInputChange(e)}
      ></textarea>
    </>
  );
}
