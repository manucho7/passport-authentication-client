import React, { useContext } from 'react';
import { MyContext } from './Context';


export default function Profile() {

  const ctx = useContext(MyContext);

  return (
    <div>
      <h1>Current Logged in user is: { ctx.username }</h1>
    </div>
  )
}
