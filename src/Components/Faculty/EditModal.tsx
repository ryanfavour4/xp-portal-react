import React, { useContext, useEffect, useRef, useState } from "react";
import { FacultyContext } from "../../context/FacultyContext";
import { IFacultyData } from "../../Interface/Interface";

function EditModal() {
  const { filteredFaculty, handleEditFaculty } = useContext(FacultyContext);

  const modalRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const handleShowModal = () => {
    modalRef.current?.click();
  };

  const [id, setId] = useState<number>(0);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const editedFacultyObj: IFacultyData = {
    id: id,
    Name: name,
    UniqueId: uniqueId,
    Code: code,
    Status: isActive,
  };

  function editFaculty(event: any) {
    event.preventDefault();
    handleEditFaculty(filteredFaculty, editedFacultyObj);
    handleShowModal();
  }

  useEffect(() => {
    if (filteredFaculty) {
      filteredFaculty.forEach((fac: IFacultyData) => {
        setId(fac.id);
        setCode(fac.Code);
        setName(fac.Name);
        setUniqueId(fac.UniqueId);
        setIsActive(fac.Status);
      });
    }
  }, [filteredFaculty]);

  return (
    <div
      className="modal"
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      id="editModal"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Faculty</h5>
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
            <form id="editForm" onSubmit={editFaculty}>
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
                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="Code"
                  id="code"
                  placeholder=" e.g. 04"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="uniqueId">Unique ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="UniqueId"
                  id="uniqueId"
                  placeholder="e.g g8yu8"
                  value={uniqueId}
                  onChange={(event) => setUniqueId(event.target.value)}
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="Status"
                    type="checkbox"
                    id="status"
                    value="Active"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                  />
                  <label className="form-check-label" htmlFor="status">
                    Is active
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
