import React from 'react'
import { Image } from 'semantic-ui-react'
import kamba1 from '../static/img/Kamba1.png'
import pinkie from '../static/img/Boutiquelogo1.jpg'
import blackie from '../static/img/Boutiquelogo3.jpg'


const GroupedImages = () => (
  <div>
    <Image.Group size='small' style={{height: "100px"}}>
      <Image src={kamba1} />
      <Image src={blackie} />
      <Image src={pinkie} />
      <Image src={kamba1} />
      <Image src={blackie} />
      <Image src={pinkie} />
      <Image src={blackie} />   
    </Image.Group>
  </div>
)

export default GroupedImages