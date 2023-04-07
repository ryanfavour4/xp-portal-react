import { useState } from "react";

const Modal = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [isActive, setIsActive] = useState(false);

  function addFaculty(event: any) {
    event.preventDefault();
    // your addFaculty function logic here
  }

  return (
    <div className="modal" tabIndex={-1} role="dialog" id="addModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Faculty</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="addFacultyForm" onSubmit={addFaculty}>
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
};

export default Modal;
