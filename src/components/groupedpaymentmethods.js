import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import visa from '../static/img/payment1.png'
import mastercard from '../static/img/payment2.png'
import paypal from '../static/img/payment3.png'
import pioneer from '../static/img/payment4.png'

const PaymentMethodsFooter = () => (
  <div style={{border: "0px", margin: "0px", padding:'0px'}}>
    <Image.Group size= 'mini'>
      <Image src={visa} />
      <Image src={mastercard} />
      <Image src={paypal} />
      <Image src={pioneer} />
    </Image.Group>
  </div>
)

export default PaymentMethodsFooter