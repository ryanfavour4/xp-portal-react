import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routes";

import "./App.css";
// import { BookContext } from "./context/BookContext";
import { FacultyContext } from "./context/FacultyContext";

function App() {
  // const books = useContext(BookContext);

  const {
    faculty,
    filteredFaculty,
    handleAddFaculty,
    handleDeleteFaculty,
    handleResetFaculty,
    handleFilterFaculty,
    handleFilterFacultyName,
  } = useContext(FacultyContext);

  const addFaculty = () => {
    handleAddFaculty({
      id: faculty.length + 1,
      Name: "Lama Sail University",
      UniueId: "664-018",
      Code: "1478-320",
      Status: true,
    });
    console.log(faculty);
    console.log(filteredFaculty);
  };

  const deleteFaculty = () => {
    handleDeleteFaculty({
      id: faculty.length,
      Name: "Lama Sail University",
      UniueId: "664-018",
      Code: "1478-320",
      Status: true,
    });
    console.log(faculty);
    console.log(filteredFaculty);
  };

  const resetFaculty = () => {
    handleResetFaculty();
    console.log(faculty);
    console.log(filteredFaculty);
  };

  const filterFacultyName = () => {
    handleFilterFacultyName("University");
    // console.log(faculty);
    console.log(filteredFaculty);
  };

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
