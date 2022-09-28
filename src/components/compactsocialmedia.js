import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class CompactIcons extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact>
        <Link to='/instagram'>
        <Menu.Item
          name='WhatsApp'
          active={activeItem === 'WhatsApp'}
          onClick={this.handleItemClick}
        >
          <Icon name='whatsapp square' />
          WhatsApp
        </Menu.Item>
        </Link>

        <Link to = '/facebook'>
        <Menu.Item
          name='facebook'
          active={activeItem === 'facebook'}
          onClick={this.handleItemClick}
          color = 'pink'
        >
          <Icon name='facebook' />
          Facebook
        </Menu.Item>
        </Link>

        <Link to = '/twitter'>
        <Menu.Item
          name='Twitter'
          active={activeItem === 'Twitter'}
          onClick={this.handleItemClick}
        >
          <Icon name='twitter' />
          Twitter
        </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
export default CompactIcons