import "../index.css";
import List from "./list";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
function Home() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    async function getAllStudent() {
      try {
        await axios.post(`http://localhost:3333/students`, student);
        setStatus(true);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllStudent();
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setStudent({ ...student, [name]: value });
    console.log(student);
  };
  if (status) {
    return <Home />;
  }
  return (
    <>
      <div className="m-4">
        <h1 className="container2">React CRUD with API call</h1>
        <div className="row">
          <div className="col container6 shadow rounded m-4">
            <h1 className="header">Add student</h1>
            <form action="" onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="name"
                name="name"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
              />
              <br />
              <TextField
                size=""
                name="email"
                id="outlined-basic"
                label="email"
                variant="standard"
                fullWidth
                sx={{ m: 1 }}
                onChange={handleinput}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ m: 1 }}
                required
              >
                Success
              </Button>
            </form>
          </div>
          <div className="col shadow pt-4 mb-5 bg-body rounded mt-4 ">
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
