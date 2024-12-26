import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <Navbar expand='md' bg='warning' data-bs-theme='dark' className='shadow'>
            <Container>
                <NavbarBrand>
                    <NavLink 
                        to={`/`}
                        className={'text-white text-decoration-none'}
                    >
                        React Projects
                    </NavLink>
                </NavbarBrand>
                <NavbarToggle/>
                <NavbarCollapse>
                    <Nav className='ms-auto'>
                        <NavLink to={`calc`}
                            className={({isActive}) => ( isActive ? 'text-dark px-2 text-decoration-none' : "px-2 text-decoration-none text-light")}
                        >Calculator</NavLink>
                        <NavLink to={`testimonials`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none text-light")}
                        >Testimonials</NavLink>
                        <NavLink to={`accordions`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none text-light")}
                        >Accordions</NavLink>
                        <NavLink to={`validation`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none text-light")}
                         >Form Validation</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>      
    </>
  )
}
