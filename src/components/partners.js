import React from 'react'
import { Image } from 'semantic-ui-react'
import kamba1 from '../static/img/Kamba1.png'
import pinkie from '../static/img/Boutiquelogo1.jpg'
import blackie from '../static/img/Boutiquelogo3.jpg'


const Partners = () => (
  <div>
    <Image.Group size='small'>
      <Image src={kamba1} style = {{height: "100px"}} />
      <Image src={blackie} style = {{height: "100px"}} />
      <Image src={pinkie} style = {{height: "100px"}} />
      <Image src={kamba1} style = {{height: "100px"}} />
      <Image src={blackie} style = {{height: "100px"}} />
      <Image src={pinkie} style = {{height: "100px"}} />
      <Image src={blackie} style = {{height: "100px"}} />   
    </Image.Group>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
)

export default Partners