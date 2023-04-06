import React from "react";

function EditModal() {
  return (
    <div className="modal" tabIndex={-1} role="dialog" id="editModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Faculty</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="editForm">
              {/*
                Edit form is pre-filled with the data of the faculty to be edited
                The data should be retrieved from the database
               */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
