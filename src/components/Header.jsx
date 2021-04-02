/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo-avance.png';

const Header = () => (
  <div>
    <Navbar expand="lg" className="navbar navbar-expand-lg custom-navbar">
      <Navbar.Brand href="/">
        <img className="navbar-brand logoRenda" src={Logo} width="220" alt="Avance contabilidade" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">
            <b>
              <Link to={(location) => ({ pathname: '/' })}>
                Home
              </Link>
            </b>
          </Nav.Link>
          <Nav.Link>
            <b>
              <Link to={(location) => ({ pathname: '/avance' })}>
                Avance
              </Link>
            </b>
          </Nav.Link>
          <NavDropdown title="Serviços" className="boldFont" id="collasibleServices">
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: '/registro' })}>
                  Registro
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: '/contabil' })}>
                  Contábil
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: 'fiscal' })}>
                  Fiscal
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: '/pessoal' })}>
                  Pessoal
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: '/pessoa-fisica' })}>
                  Pessoa física
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={(location) => ({ pathname: '/registro' })}>
                  Registro
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <b>
              <Link to={(location) => ({ pathname: '/clientes' })}>
                Clientes
              </Link>
            </b>
          </Nav.Link>
          <NavDropdown title="Conteúdo" className="boldFont" id="collasibleConteudo">
            <Nav.Link>
              <Link to={(location) => ({ pathname: '/sites' })}>
                Sites úteis
              </Link>
            </Nav.Link>
            {/* <NavDropdown.Item href="/noticias">Notícias</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link>
            <b>
              <Link to={(location) => ({ pathname: '/contato' })}>
                Contato
              </Link>
            </b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default Header;
