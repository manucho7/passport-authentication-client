import React, { useContext } from 'react';
import { MyContext } from './Context';

export default function Homepage() {

  const ctx = useContext(MyContext);
  console.log(ctx);

  return (
    <div>
      Home Page
    </div>
  )
}
