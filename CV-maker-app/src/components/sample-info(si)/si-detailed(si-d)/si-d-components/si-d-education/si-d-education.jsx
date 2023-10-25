import { Si_d_education_components } from './si-d-education-components/si-d-education-components.jsx';

export function Si_d_education({ data, setData, isEdit }) {
  return (
    <>
      <h4>Education</h4>
      <Si_d_education_components
        data={data}
        setData={setData}
        isEdit={isEdit}
      />
      <button>Add another education</button>
    </>
  );
}
