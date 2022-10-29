import React, { Component } from 'react';
import { Grid, Segment, Header, Image, Card, Icon, Button, Divider, Radio, Form } from 'semantic-ui-react';
import lady from '../static/img/bluebg3.jpg';
import { usernameURL, emailURL } from "../constants";
import { authAxios } from "../utils";
class ProfilePage extends React.Component {

    state = { error: null, username: '', email: '' };

    componentDidMount() {
        this.handleFetchUsername();
        this.handleFetchEmail();
    }

    handleFetchUsername = () => {
        authAxios
            .get(usernameURL)
            .then(res => {
                this.setState({ username: res.data.userName });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    };

    handleFetchEmail = () => {
        authAxios
            .get(emailURL)
            .then(res => {
                this.setState({ email: res.data.Email });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    };


    render() {
        const { username, email } = this.state
        return (
            <div>
                <Grid columns={2} stackable className="fill-content">
                    <Grid.Row stretched>
                        <Grid.Column width={1} />
                        <Grid.Column width={7}>
                            <Segment>
                                <Header as="h1">Profile</Header>
                                <Image className="centered" src={lady} size="medium" style={{ borderRadius: "20px" }} />
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>Username: {username}</Card.Header>
                                        <Card.Header>Email: {email}</Card.Header>
                                        <Card.Meta>Joined in 2016</Card.Meta>
                                        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name="user" />
                                            10 Friends
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Segment>
                                <Header as="h2">Settings</Header>
                                <Button positive fluid>
                                    Sync Google Calendar
                                </Button>
                                <Divider />
                                <Header as="h4">Text notifications</Header>

                                <Radio toggle />
                                <Divider />
                                <Header as="h4">Customize text notifications</Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <br /><br />
                            <Button size="huge" color='red' >Log Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
export default ProfilePage