import { Ss_t_personal } from './ss-template(ss-t)/ss-t-personal';
import { Ss_t_myresume } from './ss-template(ss-t)/ss-t-myresume';

export function Ss_template() {
  return (
    <div className="fx" id="sample-template">
      <Ss_t_personal />
      <Ss_t_myresume />
    </div>
  );
}
