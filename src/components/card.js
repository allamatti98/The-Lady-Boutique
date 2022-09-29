import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import lady from '../static/img/Person13.jpg'

const CardExampleCard = () => (
  <Card>
    <Image
      src={lady}
      wrapped
      ui={false}
    />
    <Card.Content centered>
    <span className='date'>Party</span>
      <Card.Header>Black Dress</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      Shs. 200,000
      </Card.Description>
    </Card.Content>
  </Card>
)
export default CardExampleCard