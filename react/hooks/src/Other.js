import React, { useMemo, useCallback, useRef } from 'react';
import { Input, Button } from 'antd';
let a = {
  name: 'tt',
  age: 18
};
let b = {
  name: 'zh',
  age: 18
};

/* export default function Other() {
  const memoObj = useMemo(() => Object.assign(a, b), [a, b]);
  return (
    <div>
      <h1>{memoObj.name}</h1>
      <h1>{memoObj.age}</h1>
    </div>
  );
} */

/* export default function Other() {
  const memoObj = useCallback(() => Object.assign(a, b), [a, b]);
  return (
    <div>
      <h1>{memoObj().name}</h1>
      <h1>{memoObj().age}</h1>
    </div>
  );
} */

export default function Other() {
  const intpRef = useRef();
  const intpRef1 = useRef();
  const getValue = () => {
    console.log(intpRef.current.value);
    console.log(intpRef1.current.state.value);
  };
  return (
    <div>
      <input ref={intpRef} />
      <Input ref={intpRef1} />
      <Button onClick={getValue}>测试</Button>
    </div>
  );
}
