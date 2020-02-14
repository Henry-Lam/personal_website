import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faQrcode, faMusic, faMapMarkerAlt, faGamepad, faPercent } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class MyNavbar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
                    
                    <Navbar.Brand href="#" id="navBrandCustom"><FontAwesomeIcon icon={ faCogs } className="allIcons"/>Henry Lam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link target="_blank" rel="noopener noreferrer" href="./Resume_Henry.pdf" className="navLeftCustom">Resume</Nav.Link>
                            {/* target and rel allow to open link in new tab rel not required but good for security measures*/}
                            <NavDropdown title="Projects" id="collasible-nav-dropdown" className="navLeftCustom">
                                
                                <NavDropdown.Item href="#BlackJack_id">
                                    <FontAwesomeIcon icon={ faPercent } className="allIcons"/>
                                    BlackJack & Probability
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                
                                <NavDropdown.Item href="#OnlinePiano_id">
                                    <FontAwesomeIcon icon={ faMusic } className="allIcons"/>
                                    Online Piano
                                </NavDropdown.Item>
                                
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#SocialQR_id">
                                    <FontAwesomeIcon icon={ faQrcode } className="allIcons"/>
                                    Social QR
                                </NavDropdown.Item>
                                
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#Locate_id">
                                    <FontAwesomeIcon icon={ faMapMarkerAlt } className="allIcons"/>
                                    Location App
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#MiniGames_id">
                                    <FontAwesomeIcon icon={ faGamepad } className="allIcons"/>
                                    Mini Games
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/Henry-Lam" className="navRightCustom">
                                <FontAwesomeIcon icon={ faGithub } className="brandIcon"/>
                            </Nav.Link>
                            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/henry-lam01/" className="navRightCustom">
                                <FontAwesomeIcon icon={ faLinkedin } className="brandIcon"/>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                
                </Navbar>              
            </div>
        )
    }
}
