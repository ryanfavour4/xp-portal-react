import React, { useContext, useEffect, useState } from "react";
import AddModal from "../Components/Faculty/AddModal";
import EditModal from "../Components/Faculty/EditModal";
import PageTopTitle from "../Components/PageTopTitle";
import SearchModal from "../Components/Faculty/SearchModal";
import { FacultyContext } from "../context/FacultyContext";
import { IFacultyData } from "../Interface/Interface";
import Layouts from "../Layout/Layouts";

function Faculty() {
  const { faculty, filteredFaculty, handleDeleteFaculty, handleFilterFaculty, handleResetFaculty } =
    useContext(FacultyContext);

  const [facultiesToMap, setFacultiesToMap] = useState(faculty);

  const deleteFaculty = (facultyObj: IFacultyData) => {
    handleDeleteFaculty(facultyObj);
  };

  const editFacultyBtn = (facultyObj: IFacultyData) => {
    handleFilterFaculty(facultyObj);
  };

  useEffect(() => {
    filteredFaculty
      ? setFacultiesToMap(filteredFaculty)
      : setFacultiesToMap(faculty);
  }, [faculty, filteredFaculty]);

  return (
    <Layouts>
      {
        <>
          <AddModal />
          <EditModal />
          <SearchModal />
          <PageTopTitle pageName={"Faculties"} />

          {/* //TODO TABLE SECTION */}
          {/* //? TABLE SECTION */}
          <div className="container-fluid" id="container-table-wrap">
            <button
              id="reset-btn"
              className="btn btn-m btn-success mb-5 shadow-sm"
              onClick={() => handleResetFaculty()}
            >
              Reset
            </button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Name</th>
                  <th scope="col">UniqueId</th>
                  <th scope="col">Code</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {facultiesToMap &&
                  facultiesToMap.map((faculty: IFacultyData, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{faculty.Name}</td>
                        <td>{faculty.UniqueId}</td>
                        <td>{faculty.Code}</td>
                        <td>
                          {faculty.Status ? (
                            <div className="text-success">Active</div>
                          ) : (
                            <div className="text-danger">Inactive</div>
                          )}
                        </td>
                        <td>
                          <button
                            data-toggle="modal"
                            data-target="#editModal"
                            className="btn btn-primary"
                            onClick={() => {
                              editFacultyBtn(faculty);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteFaculty(faculty);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* //? TABLE SECTION */}
          {/* //TODO TABLE SECTION */}
        </>
      }
    </Layouts>
  );
}

export default Faculty;
