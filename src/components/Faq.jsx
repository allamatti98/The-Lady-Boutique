import React from 'react'
import { Accordion } from 'semantic-ui-react'

const panels = [
    {
        key: 'location',
        title: {
            content: 'Where is Lady Bird Boutique?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    Lady Bird boutique has two branches in Kampala, One in Wandegeya and another in Kansaanga. Feel free to heck any out
                </span>
            ),
        },
    },
    {
        key: 'delivery-time',
        title: {
            content: 'How long does a delivery take?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    It take aproximately 24 hours to do a delivery depending on your loation.
                </span>
            ),
        },
    },
    {
        key: 'location',
        title: {
            content: 'Where is Lady Bird Boutique?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    Lady Bird boutique has two branches in Kampala, One in Wandegeya and another in Kansaanga. Feel free to heck any out
                </span>
            ),
        },
    },
    {
        key: 'delivery-time',
        title: {
            content: 'How long does a delivery take?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    It take aproximately 24 hours to do a delivery depending on your loation.
                </span>
            ),
        },
    },
    {
        key: 'location',
        title: {
            content: 'Where is Lady Bird Boutique?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    Lady Bird boutique has two branches in Kampala, One in Wandegeya and another in Kansaanga. Feel free to heck any out
                </span>
            ),
        },
    },
    {
        key: 'delivery-time',
        title: {
            content: 'How long does a delivery take?',
            icon: 'search',
        },
        content: {
            content: (
                <span>
                    It take aproximately 24 hours to do a delivery depending on your loation.
                </span>
            ),
        },
    },

]

const FaqAcordion = () => (
    <Accordion defaultActiveIndex={0} panels={panels} />
)

export default FaqAcordion