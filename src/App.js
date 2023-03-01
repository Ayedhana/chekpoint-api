
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";


function App() {
   const [listOfUsers,setListOfUsers]=useState([]) 
   useEffect(()=>
      {axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
        setListOfUsers(resp.data);
      }).catch((err)=>console.log(err));}
      ,[] )
      console.log(listOfUsers)
  return (
    <div className="data">
      <table>
        {" "}
        <tr>
          <th>Identifiant</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </table>
      {listOfUsers.map((item) => (
        <table>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default App;
