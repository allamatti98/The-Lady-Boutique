import React, { Component } from "react";
import {Container,Divider,Header,} from "semantic-ui-react";
import CardExampleCard from "../components/card";


function ShoppingCards() {
    return(
        <div>
<Container text>
<Header style = {{ fontSize: "2em",textAlign: "center", color: '#d05278'}}>
Lady Bird
</Header>
<Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
  Our Trending Stock
</Header>
<p style={{ fontSize: "1.33em", textAlign: "center" }}>
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

{/* <TabMenuButtons/> */}
<CardExampleCard/>
<br/><br/><br/><br/>        
</Container>
        </div>
    )
}
export default ShoppingCards