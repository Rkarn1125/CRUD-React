import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
const View = () => {
  const {id} =useParams();
  console.log(id);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudent() {
      try {
        const students = await axios.get(`http://localhost:3333/students/${id}`);
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, []);
  return (
    <div className="viewcontainer m-4 shadow p-3 mb-5 bg-body rounded">
      <h1 className="container1">this is view page</h1>
      <table className="table">
        <thead>
          <tr>
           
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="container4">
            
            <td>{id}</td>
            <td>{students.name}</td>
            <td>{students.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default View;
