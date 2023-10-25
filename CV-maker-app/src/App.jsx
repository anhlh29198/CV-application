import { useState } from 'react';
import './App.css';
import { Sample_info } from './components/sample-info(si)/si';
import { Sample_showcase } from './components/sample-showcase(ss)/ss';

import {
  personalInputData,
  descriptionData,
  educationData,
  workexpData,
  skillsData,
} from './components/database/data';

import { Combine } from './components/asset components/combine';

function App() {
  const [perData, setPersonalData] = useState(personalInputData);
  const [desData, setDescriptionData] = useState(descriptionData);
  const [eduData, setEducationData] = useState(educationData);
  const [workData, setWorkexpData] = useState(workexpData);
  const [skData, setskillsData] = useState(skillsData);

  const [isEdit, setIsEdit] = useState(false);

  const data = [
    { data: perData, id: 'personal' },
    { data: desData, id: 'description' },
    { data: eduData, id: 'education' },
    { data: workData, id: 'workexp' },
    { data: skData, id: 'skills' },
  ];

  const setData = [
    { func: setPersonalData, id: 'personal' },
    { func: setDescriptionData, id: 'description' },
    { func: setEducationData, id: 'education' },
    { func: setWorkexpData, id: 'workexp' },
    { func: setskillsData, id: 'skills' },
  ];

  return (
    <>
      <h1>CV-Maker</h1>
      <div className="fx">
        <Sample_info
          data={data}
          setData={setData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <Sample_showcase
          data={data}
          setData={setData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <Combine />
      </div>
    </>
  );
}

export default App;
