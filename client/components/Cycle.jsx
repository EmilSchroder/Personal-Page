import React from 'react'

class Cycle extends React.Component{

    constructor(props){
        super(props)

        this.state={
            iteration: 0,
            arr: ['ahppy', 'whatnot', 'yeet', 'fren', 'doogo', 'boi']
        }
        this.options = this.options.bind(this)
    }

    options(){
            return('hpap')
    }

    

    render(){
        return(
            <p>
                {setInterval(()=>this.options(),1000)}
            </p>
        )
    }
}

export default Cycle