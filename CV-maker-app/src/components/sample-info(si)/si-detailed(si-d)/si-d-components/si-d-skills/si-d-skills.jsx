import { Si_d_skills_components } from './si-d-skills-components/si-d-skills-components';

export function Si_d_skills({ data, setData }) {
  return (
    <>
      <h4>Skills</h4>
      <Si_d_skills_components data={data} setData={setData} />
      <button>Add another skill</button>
    </>
  );
}
