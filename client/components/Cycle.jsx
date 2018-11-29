import React from 'react'

import Typed from 'react-typed';

class Cycle extends React.Component{

    constructor(props){
        super(props)

        this.state={
            iteration: 0,
            arr: ['ahppy', 'whatnot', 'yeet', 'fren', 'doogo', 'boi']
        }

    }


    

    render(){
        return(
            <p>
                    <Typed 
                    strings={['cricket lover', 'biscuit eater','tea drinker', 'web developer']} 
                    typeSpeed={20} 
                    backSpeed={1}
                />
            </p>
        )
    }
}

export default Cycle