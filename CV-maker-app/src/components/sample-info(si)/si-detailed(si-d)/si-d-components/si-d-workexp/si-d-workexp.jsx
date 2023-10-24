import { Si_d_workexp_components } from './si-d-workexp-components/si-d-workexp-components';

export function Si_d_workexp({ data, setData }) {
  return (
    <>
      <h4>Work Experience</h4>
      <Si_d_workexp_components data={data} setData={setData} />
      <button>Add another work experience</button>
    </>
  );
}
