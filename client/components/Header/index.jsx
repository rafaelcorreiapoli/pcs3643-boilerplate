
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">iTrip</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
