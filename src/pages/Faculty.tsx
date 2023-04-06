import React from "react";
import Sidebar from "../Components/Sidebar";
import AddModal from "../Components/AddModal";
import EditModal from "../Components/EditModal";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import PageTopTitle from "../Components/PageTopTitle";
import SearchModal from "../Components/SearchModal";

function Faculty() {
  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <AddModal />
          <EditModal />
          <SearchModal />
          <div id="content">
            <Topbar />
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <PageTopTitle />

              {/* //TODO TABLE SECTION */}
              {/* //? TABLE SECTION */}
              <div className="container-fluid" id="container-table-wrap">
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
                    {/* 
                        -------------------------------------------------\
                        All faculties will be loaded here dynamically        >
                        -------------------------------------------------/
                    */}
                  </tbody>
                </table>
              </div>

              {/* //? TABLE SECTION */}
              {/* //TODO TABLE SECTION */}
            
            </div>
            {/* <!-- End Page Content --> */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
