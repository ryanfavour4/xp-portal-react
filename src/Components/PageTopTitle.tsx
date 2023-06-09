import React from "react";

type Props = {
  pageName:string;
}

const PageTopTitle = ({pageName}:Props) => {

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{pageName}</h1>
        <div>
          <button
            data-toggle="modal"
            data-target="#addModal"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i>
            New
          </button>
          <button
            data-toggle="modal"
            data-target="#searchModal"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-search fa-sm text-white-50"></i>
            Search
          </button>
          <button
            id="reset-btn"
            className="d-none btn btn-sm btn-secondary shadow-sm"
          >
            <i className="fas fa-refresh fa-sm text-white-50"></i>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTopTitle;
