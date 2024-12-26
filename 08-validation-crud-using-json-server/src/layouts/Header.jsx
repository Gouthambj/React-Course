import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../components/register/Storage';
import { toast } from 'react-toastify';

const Header = () => {
    let loginStatus = localStorage.getItem('loginStatus') || false;
    console.log(loginStatus);

    const logout = async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            await logoutHandler();
        }else {
            toast.warning(`logout terminated`);
        }  
    }

   

  return (
    <div className='navbar navbar-expand-md navbar-dark bg-secondary shadow mb-5'>
        <div className="container">
            <NavLink to={`/`} className='navbar-brand'>CRUD-APP</NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
               {
                loginStatus ? (
                    <Fragment>
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                                <NavLink to={`/dashboard`} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/create`}className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Create</NavLink>
                            </li>
                           
                            <li className="nav-item text-white btn btn-danger">
                                <NavLink to={`/logout`} className='nav-link' onClick={logout}>Logout</NavLink>
                            </li>
                        </ul>
                    </Fragment>
                ) : (
                   <Fragment>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to={`/login`} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/register`} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Register</NavLink>
                            </li>
                        </ul>
                   </Fragment>
                )

 
               }
            </div>
        </div>
    </div>
  )
}

export default Header;