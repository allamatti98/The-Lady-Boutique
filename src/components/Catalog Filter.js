import React, { Component } from 'react'
import { Input, Menu, Container, Header, Divider } from 'semantic-ui-react'

class CatalogFilter extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Container text>
                    <Header as="h3" style={{ fontSize: "2.5em", textAlign: "center", fontFamily: "Tenor Sans", color: "#d05278" }}>
                        Shop by mood
                    </Header>
                    <br />

                </Container>
                <Menu size='massive' secondary style={{ margin: "0px 20%" }}>
                    <Menu.Menu>
                        <Menu.Item
                            name='All'
                            active={activeItem === 'All'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                        <Menu.Item
                            name='Chill'
                            active={activeItem === 'Chill'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                        <Menu.Item
                            name='Corporate'
                            active={activeItem === 'Corporate'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                        <Menu.Item
                            name='Dinner'
                            active={activeItem === 'Dinner'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                        <Menu.Item
                            name='Party'
                            active={activeItem === 'Party'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                        <Menu.Item
                            name='Weather'
                            active={activeItem === 'Weather'}
                            onClick={this.handleItemClick}
                            color='pink'
                        />
                    </Menu.Menu>
                </Menu>
                <br /><br />
            </div>
        )
    }
} export default CatalogFilter