import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MyContext } from './Context';
import { UserInterface } from '../Interfaces/interfaces';

export default function AdminPage() {

  const ctx = useContext(MyContext);

  const [data, setData] = useState<UserInterface>();
  const [selectedUser, setSelectedUser] = useState<string>();

  useEffect(() => {
    axios.get("http://localhost:4000/getallusers", {
      withCredentials: true
    }).then((res : AxiosResponse) => {

      setData(res.data.filter((item : UserInterface) => {
        return item.username !== ctx.username
      }))
    })
  }, [ctx])

  if (!data) {
    return null;
  }
  
  const deleteUser = () => {
    let userId: string;
    data.forEach((item: UserInterface) => {
      if (item.username === selectedUser) {
        userId = item.id;
      }
    })

    axios.post("http://localhost:4000/deleteuser", {
      id: userId!
    }, {
      withCredentials: true
    });
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <select onChange={ e => setSelectedUser(e.target.value)} id="deleteuser" name="deleteuser">
      <option id="select a user">Select a User</option>
        {
          data.map((item: UserInterface) => {
            return (
              <option key={item.username} id={item.username}></option>
            )
          })
        }
      </select>
      <button onClick={ deleteUser }>Delete User</button>
    </div>
  )
}
