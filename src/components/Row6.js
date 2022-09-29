import React from "react";
import { Image, Grid, Header, Container, Button } from "semantic-ui-react";
import event8 from '../static/img/Event8.jpg'
import event7 from '../static/img/Event7.jpg'

const Row6 = () => (
    <div>
              <Container text>
        <Header style = {{ fontSize: "2em",textAlign: "center", color: '#d05278'}}>
        Lady Bird Blog.
        </Header>
        <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
          Latest Feed from the biggest Boutique in the country.
        </Header>
        <p style={{ fontSize: "1.33em", textAlign: "center" }}>
        Steal the show... The Lady Bird Wayyy!!!
        </p>
      </Container>
    <br/><br/><br/>
      <Grid columns="equal" style={{ padding: "0em 6em", innerHeight:"100px" }} stackable>
        <Grid.Row textAlign="center">
          <Grid.Column >
          <Image src ={event8}/>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column >
          <Image src ={event7}/>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column textAlign="center">
            <Button size="huge" color='pink'>Read Our Blog</Button>
          </Grid.Column>
      </Grid>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
)
export default Row6