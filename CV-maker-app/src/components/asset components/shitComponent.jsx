import { InputShits } from './input';
import { useState } from 'react';
import { shits } from '../database/data';

export function Shit({ outputShit, setOutputShit }) {
  const [shit, setShit] = useState(shits);
  const [initialShits, setInitialShits] = useState(shits);
  return (
    <>
      <InputShits
        shit={shit}
        setShit={setShit}
        initialShits={initialShits}
        setInitialShits={setInitialShits}
        outputShit={outputShit}
        setOutputShit={setOutputShit}
      />
    </>
  );
}
