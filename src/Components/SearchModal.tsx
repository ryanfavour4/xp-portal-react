import React from "react";

const SearchModal = () => {
  function search(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="modal" tabIndex={-1} role="dialog" id="searchModal">
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
              <form id="searchForm" onSubmit={(event) => search(event)}>
                <div className="form-group">
                  <label htmlFor="facultyName">Faculty Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    id="facultyName"
                    placeholder="e.g. Faculty of Art"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select className="form-control" name="Status" id="status">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
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
