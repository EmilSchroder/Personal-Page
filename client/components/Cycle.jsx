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
                    strings={['Here you can find anything', 'what up I am here;']} 
                    typeSpeed={2} 
                    backSpeed={50}
                />
            </p>
        )
    }
}

export default Cycle