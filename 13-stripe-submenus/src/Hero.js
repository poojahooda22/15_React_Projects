import React from 'react'

import {useGlobalContext} from './context';

const Hero = () => {
    const data = useGlobalContext()
    console.log(data)

    return <h2>
        Hero Component
    </h2>
}

export default Hero;