
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Sidebar.css'
const Sidebar = () => {
  const [menu,setMenu] =useState("category");


  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa fa-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
            <i className="fa fa-journal-text"></i><span>Category</span><i className="fa fa-chevron-down ms-auto"></i>
          </a>
          <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a  onClick={()=>{setMenu("category")}}>
                <i className="fa fa-circle"></i><span> <Link to ='/'>Edit Category</Link></span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <i className="fa fa-layout-text-window-reverse"></i><span>Suppllier</span><i className="fa fa-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a onClick={()=>{setMenu("supplliers")}} >
                <i className="fa fa-circle"></i><span><Link to ='/supplliers'>Suppllier</Link></span>
              </a>
            </li>
            <li>
              <a  onClick={()=>{setMenu("listSupplliers")}}>
                <i className="fa fa-circle"></i><span> <Link to ='/listSupplliers'>List Suppllier</Link> </span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
            <i className="fa fa-bar-chart"></i><span>POST</span><i className="fa fa-chevron-down ms-auto"></i>
          </a>
          <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="page-post.html">
                <i className="fa fa-circle"></i><span>New POST</span>
              </a>
            </li>
            <li>
              <a href="page-post.html">
                <i className="fa fa-circle"></i><span>List POST</span>
              </a>
            </li>
            <li>
              <a href="page-post.html">
                <i className="fa fa-circle"></i><span>Statistics POST</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
            <i className="fa fa-gem"></i><span>ORDER</span><i className="fa fa-chevron-down ms-auto"></i>
          </a>
          <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="page-bill.html">
                <i className="fa fa-circle"></i><span>Orders waiting for confirmation</span>
              </a>
            </li>
            <li>
              <a href="page-bill.html">
                <i className="fa fa-circle"></i><span>Bill</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-circle"></i><span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="fa fa-person"></i>
            <span>Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <i className="fa fa-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="fa fa-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="fa fa-file-earmark"></i>
            <span>Blank</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
