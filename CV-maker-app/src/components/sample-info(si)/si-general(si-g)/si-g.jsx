import { Si_g_input } from './si-g-components/si-g-input';

export function Si_general({ data, setData, isEdit }) {
  return (
    <div>
      <h3>General-Info</h3>
      <Si_g_input data={data} setData={setData} isEdit={isEdit} />
    </div>
  );
}
