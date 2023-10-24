import { Ss_options } from './ss-options/ss-options';
import { Ss_template } from './ss-template/ss-template';

export function Sample_showcase({ data }) {
  console.log(data);
  return (
    <div className="fx-col" id="sample-showcase">
      <Ss_options />
      <Ss_template data={data} />
    </div>
  );
}
