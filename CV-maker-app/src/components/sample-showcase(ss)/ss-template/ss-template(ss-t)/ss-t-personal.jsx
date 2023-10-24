export function Ss_t_personal({ data }) {
  const inputData = data.map((entry) => entry.data)[0];
  return (
    <div id="template-personal">
      <h3>Personal</h3>
      <ul className="fx-col">
        <li>
          <h4>Name</h4>
          <p>{inputData[0].value + ' ' + inputData[1].value}</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>{inputData[2].value}</p>
        </li>
        <li>
          <h4>Phone</h4>
          <p>{'+' + inputData[3].value}</p>
        </li>
        <li>
          <h4>Address</h4>
          <p>{inputData[4].value}</p>
        </li>
      </ul>
    </div>
  );
}
