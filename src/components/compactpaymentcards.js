import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class CompactCards extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact>
        
        <Menu.Item>
          <Icon name='cc visa' color='pink'/>
          Visa
        </Menu.Item>
        

        
        <Menu.Item>
          <Icon name='cc mastercard' color='pink' />
          Mastercard
        </Menu.Item>
        

        
        <Menu.Item>
          <Icon name='cc paypal' color='pink' />
          PayPal
        </Menu.Item>
        
      </Menu>
    )
  }
}
export default CompactCards