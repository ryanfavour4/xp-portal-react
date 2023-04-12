import React, { useContext, useRef, useState } from "react";
import { FacultyContext } from "../../context/FacultyContext";

const SearchModal = () => {
  const { handleFilterFacultySearch } = useContext(FacultyContext);

  const modalRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const handleShowModal = () => {
    modalRef.current?.click();
  }

  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  function search(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleFilterFacultySearch({ Name: name, Status: isActive });
    handleShowModal()
  }

  return (
    <div>
      <div
        className="modal"
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        id="searchModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Search Faculties</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="searchForm" onSubmit={search}>
                <div className="form-group">
                  <label htmlFor="facultyName">Faculty Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    id="facultyName"
                    placeholder="e.g. Faculty of Art"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-check-input ml-0"
                    name="Status"
                    type="checkbox"
                    id="status"
                    value="Active"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                  />
                  <label className="ml-4" htmlFor="status">
                    Status
                  </label>
                </div>
                <button type="submit" className="btn btn-primary float-right">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
