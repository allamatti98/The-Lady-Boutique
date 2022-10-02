import React from "react";
import { Container, Divider, Header, } from "semantic-ui-react";
import Trending from "./Card.js";


function Row1() {
  return (
    <div>
      <Container text>
        <Header style={{ fontSize: "3.5em", textAlign: "center", color: '#d05278' }}>
          Lady Bird
        </Header>
        <Header as="h3" style={{ fontSize: "2.5em", textAlign: "center" }}>
          Our Trending Stock
        </Header>
        <p style={{ fontSize: "1.7em", textAlign: "center" }}>
          Refresh your wardrobe with our cutting edge stylish outfits and stand out from the crowd.
        </p>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <i color='pink'>Quick Browse</i>
        </Divider>

      </Container>
      {/* <TabMenuButtons/> */}
      <Trending />
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}
export default Row1