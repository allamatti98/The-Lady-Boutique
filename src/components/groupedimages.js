import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import kamba1 from '../static/img/Kamba1.png'
import pinkie from '../static/img/Boutiquelogo1.jpg'
import blackie from '../static/img/Boutiquelogo3.jpg'
import kblue from '../static/img/BoutiqueLogo4.webp'

const GroupedImages = () => (
  <div style={{border: "0px", margin: "0px", padding:'0px'}}>
    <Image.Group size='small'>
      <Image src={kamba1} />
      <Image src={pinkie} />
      <Image src={blackie} />
      <Image src={kblue} />
    </Image.Group>
  </div>
)

export default GroupedImages