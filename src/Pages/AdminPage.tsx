import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from './Context';

export default function AdminPage() {

  const ctx = useContext(MyContext);

  const [data, setData] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<string>();

  useEffect(() => {
    axios.get("http://localhost:4000/getallusers", {
      withCredentials: true
    }).then((res : any) => {

      setData(res.data.filter((item : any) => {
        return item.username !== ctx.username
      }))
    })
  }, [ctx])

  if (!data) {
    return null;
  }
  
  const deleteUser = () => {
    let userId: any;
    data.forEach((item: any) => {
      if (item.username === selectedUser) {
        userId = item._id;
      }
    })

    axios.post("http://localhost:4000/deleteuser", {
      id: userId
    }, {
      withCredentials: true
    })
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <select onChange={ e => setSelectedUser(e.target.value)} id="deleteuser" name="deleteuser">
      <option id="select a user">Select a User</option>
        {
          data.map((item: any) => {
            return (
              <option key={item.username}>{item.username}</option>
            )
          })
        }
      </select>
      <button onClick={ deleteUser }>Delete User</button>
    </div>
  )
}
