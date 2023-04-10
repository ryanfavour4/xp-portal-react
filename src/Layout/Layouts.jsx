import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


const Layouts = ({ children }) => {
  return (
    <div id="page-top">
      {/* Page Wrapper */}
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
                {children}
            </div>
            {/* <!-- End Page Content --> */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
