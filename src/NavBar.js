import React from 'react'

const NavBar = () => 
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} width="30" height="30" alt="" />
      </span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/`}>Заглавная <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
        </form>
      </div>
    </nav>
  </>

export default NavBar;
