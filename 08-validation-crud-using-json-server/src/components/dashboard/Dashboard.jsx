import React, { useEffect, useState } from 'react'
import Users from '../../users/Users'
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [contacts, setContact] = useState([]);
  
  // Fetch data from API
  const getContacts = async () => {
    await axios.get(`/contacts`)
    .then(res=>{
      // console.log(res.data);
      setContact(res.data);
    })
    .catch((error)=>toast.error(error));
  }

  useEffect(()=>{getContacts()}, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h1 className="text-secondary text-center rounded p-4 border bg-light shadow-sm">
            DASHBOARD
          </h1>
        </div>
      </div>
      <div className="row">
        {
          contacts.map((contact, index) => {
              return (<Users {...contact} key={index} />);
          })
        }
      </div>
      
    </div>
  )
}

export default Dashboard