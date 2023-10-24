import { Si_d_description } from './si-d-components/si-d-description/si-d-description';
import { Si_d_education } from './si-d-components/si-d-education/si-d-education';
import { Si_d_workexp } from './si-d-components/si-d-workexp/si-d-workexp';
import { Si_d_skills } from './si-d-components/si-d-skills/si-d-skills';

export function Si_detailed({ data, setData }) {
  return (
    <div id="detailed-info">
      <h3>Detailed-Info</h3>
      <ul className="fx-col">
        <li className="detailed-info-list">
          <Si_d_description
            data={data.filter((entry) => entry.id === 'description')}
            setData={setData.filter((entry) => entry.id === 'description')}
          />
        </li>
        <li className="detailed-info-list">
          <Si_d_education
            data={data.filter((entry) => entry.id === 'education')}
            setData={setData.filter((entry) => entry.id === 'education')}
          />
        </li>
        <li className="detailed-info-list">
          <Si_d_workexp
            data={data.filter((entry) => entry.id === 'workexp')}
            setData={setData.filter((entry) => entry.id === 'workexp')}
          />
        </li>
        <li className="detailed-info-list">
          <Si_d_skills
            data={data.filter((entry) => entry.id === 'skills')}
            setData={setData.filter((entry) => entry.id === 'skills')}
          />
        </li>
      </ul>
    </div>
  );
}
