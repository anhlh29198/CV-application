import { Si_d_description } from './si-d-components/si-d-description/si-d-description';
import { Si_d_education } from './si-d-components/si-d-education/si-d-education';
import { Si_d_workexp } from './si-d-components/si-d-workexp/si-d-workexp';
import { Si_d_skills } from './si-d-components/si-d-skills/si-d-skills';

export function Si_detailed() {
  return (
    <div id="detailed-info">
      <h3>Detailed-Info</h3>
      <ul className="fx-col">
        <li className="detailed-info-list">
          <Si_d_description />
        </li>
        <li className="detailed-info-list">
          <Si_d_education />
        </li>
        <li className="detailed-info-list">
          <Si_d_workexp />
        </li>
        <li className="detailed-info-list">
          <Si_d_skills />
        </li>
      </ul>
    </div>
  );
}
