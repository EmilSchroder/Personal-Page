import React from 'react'

import Typed from 'react-typed';

class Cycle extends React.Component{

    constructor(props){
        super(props)

    }


    

    render(){
        return(
            <p>
                    <Typed 
                    strings={['cricket lover', 'noodle maker','tea drinker', 'web developer']} 
                    typeSpeed={20} 
                    backSpeed={1}
                />
            </p>
        )
    }
}

export default Cycle