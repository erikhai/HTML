import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.png";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seeScrolled] = useState(false);
    const bannerHeight = 50;
    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY > bannerHeight){
                seeScrolled(true);
            }  else {
                seeScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return(
        <Navbar expand = "lg" className={scrolled ? "scrolled": "notScrolled"}>
            <Container>
                <Navbar.Brand href="#home" classNa>
                    <img src={logo} alt="LOGO" />
                </Navbar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </NavBar.Toggle>
                <NavBar.Collapse id  = "basic-navbar-nav"></NavBar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = {activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills&experience" className = {activeLink === "skills&experience" ? "active navbar-link": "navbar-link"}  onClick={() => onUpdateActiveLink('skills&experience')}>Skills & Experience</Nav.Link>
                    <Nav.Link href="#projects" className = {activeLink === "skills&projects" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

                    

                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#">
                            <img src={navIcon1} alt="LinkedIn"></img>
                        </a>
                        <a href="#">
                            <img src={navIcon2} alt="GitHub"></img>
                        </a>
                        <a href="#">
                            <img src={navIcon3} alt="Chess.com"></img>
                        </a>
                    </div>
                    <button className="resume" onClick={() => console.log('resume')}><span>Download Resume</span></button>
                </span>
            </Container>
        </Navbar>
    )
}