import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import event8 from '../static/img/Event8.jpg'
import event7 from '../static/img/Event7.jpg'


const HomeImagePair = () => (
  <div style={{border: "0px", margin: "0px", padding:'0px'}}>
    <Image.Group size='medium'>
      <Image src={event8} />
      <Image src={event7} />
    </Image.Group>
  </div>
)

export default HomeImagePair