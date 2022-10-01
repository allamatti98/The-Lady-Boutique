import React from 'react'
import { Card, Image,Label } from 'semantic-ui-react'
import lady from '../static/img/Person13.jpg'

function ItemCards (props){
  console.log(props)
  return(
    <Card>
    <Image
      src={lady}
      wrapped
      ui={false}
      className= "CardImage"
    />
    <Label as='a' color='red' tag>
      Upcoming
    </Label>

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
  )
}
export default ItemCards