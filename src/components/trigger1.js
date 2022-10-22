import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import lady from '../static/img/bluebg3.jpg'
import { authAxios } from "../utils";
import { usernameURL } from "../constants";


const handleFetchUsername = () => {
    authAxios
        .get(usernameURL)
        .then(res => {
            this.setState({ username: res.data.userName });
        })
        .catch(err => {
            this.setState({ error: err });
        });
};

const trigger = (
    <span>
        <Image avatar src={lady} /> {"Jane"}
    </span>
)

const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]



function Trigger1() {


    return (
        <Dropdown
            trigger={trigger}
            options={options}
            pointing='top right'
            icon={null}
        />
    )
}
export default Trigger1