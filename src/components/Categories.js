import React from 'react'
import { Image, Reveal, Icon } from 'semantic-ui-react'
import cartoon from '../static/img/Person14.jpg'
import black from '../static/img/Person13.jpg'

const Categories = () => (
    <Reveal animated='small fade'>
        <Reveal.Content visible>
            <Image src={cartoon} size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Icon name="instagram" size="small" />
        </Reveal.Content>
    </Reveal>
)

export default Categories