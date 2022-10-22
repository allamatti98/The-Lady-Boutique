import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import lady from '../static/img/bluebg3.jpg'

const trigger = (
    <span>
        <Image avatar src={lady} /> {"Jane Doe"}
    </span>
)

const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

const DropdownImageTrigger1 = () => (
    <Dropdown
        trigger={trigger}
        options={options}
        pointing='top left'
        icon={null}
    />
)

export default DropdownImageTrigger1