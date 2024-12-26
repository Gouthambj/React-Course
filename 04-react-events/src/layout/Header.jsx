import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info shadow mb-5">
        <div className="container">
        <NavLink to={"/"} className="navbar-brand">
            <h3 className='text-white'>REACT-EVENTS</h3>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls='navbarNavAltMarkup' aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id='navbarNavAltMarkup'>
            <div className="navbar-nav ms-auto">
                <NavLink to={"/ex1"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-1</NavLink>
                <NavLink to={"/ex2"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-2</NavLink>
                <NavLink to={"/ex3"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-3</NavLink>
                <NavLink to={"/ex4"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-4</NavLink>
                <NavLink to={"/ex5"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-5</NavLink>
                <NavLink to={"/ex6"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-6</NavLink>
                <NavLink to={"/ex7"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-7</NavLink>
                <NavLink to={"/ex8"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-8</NavLink>
                <NavLink to={"/ex9"} className={({isActive}) => (isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none")}>Ex-9</NavLink>
            </div>
            
        </div>
        </div>

      </nav>
    </>
  )
}

export default Header
