import React from 'react'
import { Dropdown, Menu, Responsive } from 'semantic-ui-react'
import { Link } from "react-router-dom";

// TODO: Update <Search> usage after its will be implemented

const IconDropDown = () => (
  <div>
    <Menu attached="top">
      <Responsive as={Dropdown} minWidth={790}
        item icon='user outline' simple >
        <Dropdown.Menu>
          <Link to="/login">
            <Dropdown.Item>Login</Dropdown.Item>
          </Link>
          <Link to="/signup">
            <Dropdown.Item>Sign Up</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Responsive>
    </Menu>
  </div>
)

export default IconDropDown