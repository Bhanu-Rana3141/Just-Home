import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CiPhone } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import logoImg from '../assets/images/logo.png';

const navItems = [
    { name: 'Home', href: '#home', dropdown: true },
    { name: 'Listings', href: '#listings', dropdown: true },
    { name: 'Members', href: '#members', dropdown: true },
    { name: 'Blog', href: '#blog', dropdown: true },
    { name: 'Pages', href: '#pages', dropdown: true },
    { name: 'Contact', href: '', dropdown: false },
];

export default function NavigationBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expand="lg" className={`navbar py-2 ${scrolled ? 'navbar-scrolled' : ''}`}>
            <Container fluid className="px-4">
                <Navbar.Brand className="logo-container">
                    <Link to=''><img src={logoImg} alt="Logo" /></Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" className='custom-toggler' />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto navbar-links">
                        {navItems.map(({ name, href, dropdown }) =>
                            dropdown ? (
                                <NavDropdown
                                    title={<span className="navlink-color">{name}</span>}
                                    id={`nav-dropdown-${name.toLowerCase()}`}
                                    key={name}
                                >
                                    <NavDropdown.Item className='nav-dropdown' href={`${href}/action1`}>Action 1</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-dropdown' href={`${href}/action2`}>Action 2</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-dropdown' href={`${href}/action3`}>Action 3</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href={href} key={name} className="navlink-color">
                                    {name}
                                </Nav.Link>
                            )
                        )}
                    </Nav>

                    <div className="property-btn-part">
                        <div className='phone-icon-number'>
                            <CiPhone className='phone-icon' />
                            <span className="navlink-color">+68 685 88666</span>
                        </div>
                        <div className='user-icon-container'>
                            <FaRegUser className='user-icon' />
                        </div>
                        <button className='property-btn'>Add Property</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}