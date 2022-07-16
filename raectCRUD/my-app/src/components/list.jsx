import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const List = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:3333/students");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3333/students/${id}`);
    var newstudent = students.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setStudents(newstudent);
   }
  return (
    <div>
      <h1 className="container1">STUDENT LIST</h1>
      <table className="table table-bordered border-primary ">
        <thead>
          <tr className="">
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td className="d-flex">
                  <div className="mr-1">
                    <Link to={`/view/${student.id}`}>
                      <RemoveRedEyeIcon sx={{ m: 1 }} />
                    </Link>
                  </div>
                  <div className="mr-">
                    <Link to={`/edit/${student.id}`}>
                      <EditIcon sx={{ m: 1 }} />
                    </Link>
                  </div>
                  <div  onClick={() => handleDelete(student.id)}>
                    <DeleteIcon sx={{ m: 1 }} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
