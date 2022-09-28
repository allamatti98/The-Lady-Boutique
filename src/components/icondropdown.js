import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link} from "react-router-dom";

// TODO: Update <Search> usage after its will be implemented

const IconDropDown = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='user outline' simple>
        <Dropdown.Menu>
        <Link to= "/login">
          <Dropdown.Item>Login</Dropdown.Item>
        </Link>
        <Link to="/signup">
          <Dropdown.Item>Sign Up</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
)

export default IconDropDown