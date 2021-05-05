import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function MainNavbar () {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
                    <Nav className="mr-auto">
                    <input type="text" placeholder="Search…" id="docs-search-input" class="form-control ds-input" autocomplete="off" spellcheck="false" dir="auto"/>
                    <Button variant="secondary">Search</Button>{' '}
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainNavbar;