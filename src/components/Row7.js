import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

function NewsLetter() {
    return (
        <Container text style={{ backgroundColor: "pink", padding: "30px 50px" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
                Subscribe to our News Letter to get customized notifications.
            </Header>
            <p style={{ fontSize: "1em" }}>
                It's always a pleasure working with our clients and we would like to keep you up-to-date with new stock arrivals,
                new trends and most of all, new ways to stay ahead of the rest.
            </p>
            <Form >
                <Form.Group widths="equal" size="huge">
                    <Form.Input placeholder='Enter your email address...' />
                    <Button color="black">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default NewsLetter