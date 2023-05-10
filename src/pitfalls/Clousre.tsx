import { useState } from 'react';

export const Clousre = () => {
  const [value, setValue] = useState(1);
  const log = () => {
    setTimeout(() => {
      alert(value);
    }, 3000);
  };
  console.log('render');
  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button> <br />
      <button onClick={log}>alert</button>
    </div>
  );
};
