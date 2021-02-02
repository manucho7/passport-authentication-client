import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';
import { UserInterface } from '../Interfaces/interfaces';
import { AxiosResponse } from 'axios';

export const MyContext = createContext<Partial<UserInterface>>({});

export default function Context(props: PropsWithChildren<any>) {

  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    axios.get("http://localhost:4000/user", {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      setUser(res.data);
    })
  }, []);

  return (
    <MyContext.Provider value={user!}>
      {props.children}
    </MyContext.Provider>
  )
}
