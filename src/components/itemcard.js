import React from 'react'
import { Card, Image,Label } from 'semantic-ui-react'
import lady from '../static/img/Person13.jpg'

function ItemCards (props){
  console.log(props)
  return(
    <div>
      <Card style={{margin:"15px"}} stackable>
      <Label as='a' color='red' ribbon>
          Overview
        </Label>
    <Image
      src={lady}
      wrapped
      ui={false}
      className= "CardImage"
    />
    
    <Card.Content textAlign="center">
    <span className='stockCategory'>Party</span>
      <Card.Header class>Black Dress</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      <del>Shs.300,000</del>
      Shs.200,000
      </Card.Description>
    </Card.Content>
  </Card>
    </div>
  )
}
export default ItemCards