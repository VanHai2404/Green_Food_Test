import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header =()=>{
    return (
       
        <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">ShopAdmin</span>
          </a>
          <i className="fa fa-list toggle-sidebar-btn"></i>
        </div>
  
        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
  
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img src="/img/product/SANPHAM1.jpeg" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">H. VanHai</span>
              </a>
  
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Hồ Văn Hải</h6>
                  <span>Admin</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
  
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="fa fa-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
  
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="fa fa-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
  
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="fa fa-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
  
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="fa fa-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

          );
    
}

export default Header