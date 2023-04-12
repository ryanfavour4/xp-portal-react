import React from "react";
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="../../index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          XP Portal <sup>TM</sup>
        </div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="../../index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Academics</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Setups</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Academic Setups:</h6>
            <Link className="collapse-item" to={'/'}>
              Faculties
            </Link>
            <Link className="collapse-item" to={'/dept'}
            >
              Departments
            </Link>
            <a
              className="collapse-item"
              href="../academicSetup/courseofstudy.html"
            >
              Course of Studies
            </a>
            <a className="collapse-item" href="../academicSetup/course.html">
              Courses
            </a>
            <a className="collapse-item" href="../academicSetup/lecturer.html">
              Lecturers
            </a>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Managements</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Academics Management:</h6>
            <a className="collapse-item" href="">
              Course Enrollment
            </a>
            <a className="collapse-item" href="">
              Lecturer Schedule
            </a>
            <a className="collapse-item" href="">
              Course-Semester Schedule
            </a>
            <a className="collapse-item" href="">
              Academic Activities
            </a>
          </div>
        </div>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Students' Management</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Admission</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Admission Process:</h6>
            <a className="collapse-item" href="#">
              Jamb Exam
            </a>
            <a className="collapse-item" href="#">
              PUTME
            </a>
            <a className="collapse-item" href="#">
              Interview
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Enrollment:</h6>
            <a className="collapse-item" href="#">
              Online Screening
            </a>
            <a className="collapse-item" href="#">
              Document Uploads
            </a>
          </div>
        </div>
      </li>

      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Administration</span>
        </a>
      </li>

      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-table"></i>
          <span>Reports</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
