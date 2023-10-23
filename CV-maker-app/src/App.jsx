// import { useState } from 'react';
import './App.css';
import { Sample_info } from './components/sample-info(si)/si';
import { Sample_showcase } from './components/sample-showcase(ss)/ss';

// import { Si_general } from './components/sample-info(si)/si-general(si-g)/si-g';
// import { Si_detailed } from './components/sample-info(si)/si-detailed(si-d)/si-d';
// import { Si_submit } from './components/sample-info(si)/si-submit/si-submit';

function App() {
  return (
    <>
      <h1>CV-Maker</h1>
      <div className="fx">
        <Sample_info />
        <Sample_showcase />
      </div>
    </>
  );
}

export default App;
