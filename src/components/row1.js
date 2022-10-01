import React from "react";
import {Container,Divider,Header,} from "semantic-ui-react";
import ItemCards from "./card";
import lady from '../static/img/Person13.jpg'


function ShoppingCards() {
    return(
        <div>
<Container text>
<Header style = {{ fontSize: "3.5em",textAlign: "center", color: '#d05278'}}>
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

{/* <TabMenuButtons/> */}
<div style={{display:"flex", backgroundColor:"greenyellow"}}>
<ItemCards
img={lady}
label="New"
itemname = "Skirt"
price="Shs.300,000"
discountedprice="Shs200,000"
/><ItemCards
img={lady}
label="New"
itemname = "Skirt"
price="Shs.300,000"
discountedprice="Shs200,000"
/>
<ItemCards
img={lady}
label="New"
itemname = "Skirt"
price="Shs.300,000"
discountedprice="Shs200,000"
/>
<ItemCards
img={lady}
label="New"
itemname = "Skirt"
price="Shs.300,000"
discountedprice="Shs200,000"
/>
</div>
<br/><br/><br/><br/>        
</Container>
        </div>
    )
}
export default ShoppingCards