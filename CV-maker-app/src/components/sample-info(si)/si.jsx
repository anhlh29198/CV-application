import { Si_general } from './si-general(si-g)/si-g';
import { Si_detailed } from './si-detailed(si-d)/si-d';
import { Si_submit } from './si-submit/si-submit';

export function Sample_info() {
  return (
    <div className="fx-col" id="sample-info">
      <Si_general />
      <Si_detailed />
      <Si_submit />
    </div>
  );
}
