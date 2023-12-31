import { Si_general } from './si-general(si-g)/si-g';
import { Si_detailed } from './si-detailed(si-d)/si-d';
import { Si_submit } from './si-submit/si-submit';

export function Sample_info({ data, setData, isEdit, setIsEdit }) {
  return (
    <div className="fx-col" id="sample-info">
      <Si_general
        data={data.filter((entry) => entry.id === 'personal')}
        setData={setData.filter((entry) => entry.id === 'personal')}
        isEdit={isEdit}
      />
      <Si_detailed
        data={data.filter((entry) => entry !== 'personal')}
        setData={setData.filter((entry) => entry.id !== 'personal')}
        isEdit={isEdit}
      />
      <Si_submit isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  );
}
