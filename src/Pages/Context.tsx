import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext<any>({});

export default function Context(props: PropsWithChildren<any>) {

  const [user, setUser] = useState<any>("");

  useEffect(() => {
    axios.get("http://localhost:4000/user", {
      withCredentials: true
    }).then(res => {
      setUser(res.data);
    })
  }, []);

  return (
    <MyContext.Provider value={user}>
      {props.children}
    </MyContext.Provider>
  )
}
