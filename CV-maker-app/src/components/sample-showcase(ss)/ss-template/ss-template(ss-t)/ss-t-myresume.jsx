export function Ss_t_myresume({ data }) {
  const personal = data
    .filter((entry) => entry.id === 'personal')
    .map((entry) => entry.data)[0];
  const description = data
    .filter((entry) => entry.id === 'description')
    .map((entry) => entry.data)[0];
  const workexp = data
    .filter((entry) => entry.id === 'workexp')
    .map((entry) => entry.data)[0];
  const education = data
    .filter((entry) => entry.id === 'education')
    .map((entry) => entry.data)[0];
  const skills = data
    .filter((entry) => entry.id === 'skills')
    .map((entry) => entry.data)[0];
  return (
    <div id="template-resume">
      <h3>{personal[0].value + ' ' + personal[1].value}</h3>
      <hr></hr>
      <ul className="fx-col">
        <li>
          <p>{description[0].value}</p>
        </li>
        <li>
          <h4>WORK EXPERIENCE</h4>
          <div className="fx fx-between">
            <div>
              <p>{workexp[0].value}</p>
              <p>{workexp[2].value + ', ' + workexp[1].value}</p>
              <p>{workexp[5].value}</p>
            </div>
            <p>{workexp[3].value + ' - ' + workexp[4].value}</p>
          </div>
        </li>
        <hr></hr>
        <li>
          <h4>EDUCATION AND QUALIFICATIONS</h4>
          <div className="fx fx-between">
            <div>
              <p>{education[0].value}</p>
              <p>{education[1].value}</p>
            </div>
            <p>{education[2].value + ' - ' + education[3].value}</p>
          </div>
        </li>
        <hr></hr>
        <li>
          <h4>SKILLS</h4>
          <div className="fx fx-between">
            <p>{skills[0].value}</p>
            <p>{skills[1].value}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
