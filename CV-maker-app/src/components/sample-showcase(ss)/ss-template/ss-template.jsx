import { Ss_t_personal } from './ss-template(ss-t)/ss-t-personal';
import { Ss_t_myresume } from './ss-template(ss-t)/ss-t-myresume';

export function Ss_template({ data }) {
  console.log(data);
  return (
    <div className="fx" id="sample-template">
      <Ss_t_personal data={data.filter((entry) => entry.id === 'personal')} />
      <Ss_t_myresume data={data} />
    </div>
  );
}
