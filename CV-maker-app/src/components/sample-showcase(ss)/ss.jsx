import { Ss_options } from './ss-options/ss-options';
import { Ss_template } from './ss-template/ss-template';

export function Sample_showcase({ data, setData, isEdit, setIsEdit }) {
  return (
    <div className="fx-col" id="sample-showcase">
      <Ss_options
        data={data}
        setData={setData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <Ss_template data={data} />
    </div>
  );
}
