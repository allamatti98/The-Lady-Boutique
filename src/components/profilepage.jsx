import React, { Component } from 'react';
import { Grid, Segment, Header, Image, Card, Icon, Button, Divider, Radio, Form } from 'semantic-ui-react';
import dp from '../static/img/dp1.jpg';
import { usernameURL, emailURL } from "../constants";
import { authAxios } from "../utils";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { Redirect } from 'react-router-dom';

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

    handleLogOut = () => {
        window.location.reload();
        this.props.logout()
    }


    render() {
        const { username, email } = this.state
        return (
            <div>
                <Grid columns={2} stackable className="fill-content">
                    <Grid.Row stretched>
                        <Grid.Column width={1} />
                        <Grid.Column width={7}>
                            <Segment>
                                <Header as="h1" style={{ textAlign: "center", fontFamily: "Mrs Saint Delafield", fontSize: "4em", color: "#d05278" }}>Profile</Header>
                                <Image className="centered" src={dp} size="medium" style={{ borderRadius: "20px" }} />
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header style={{ fontSize: "2.5em", fontFamily: "Tenor Sans" }}>Username: {username}</Card.Header>
                                        <Card.Header style={{ fontSize: "2.5em", fontFamily: "Tenor Sans" }}>Email: {email}</Card.Header>
                                        <Card.Meta>You are a tresured customer of ours</Card.Meta>
                                        <Card.Description>Ladybird Boutique is glad to have you as a customer.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name="lightbulb" />
                                            You can store items you like in a Wishlist.
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Segment>
                                <Header as="h2" style={{ textAlign: "center", fontFamily: "Mrs Saint Delafield", fontSize: "4em", color: "#d05278" }}>Settings</Header>
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
                            <Button size="huge" color='red' onClick={() => this.handleLogOut()}>Log Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br /><br />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};
export default connect(mapDispatchToProps)(ProfilePage)