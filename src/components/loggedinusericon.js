import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import { Link} from "react-router-dom";

const LoggedInUseIcon = () => (
  <div>
    <Menu attached='top'>
        
      <Dropdown item icon='user outline' simple>
        <Dropdown.Menu>
        <Link to= "/profile">
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Link to= "/login">
          <Dropdown.Item>Wishlist</Dropdown.Item>
        </Link>
        
          <Dropdown.Item >Log Out</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
)

export default LoggedInUseIcon