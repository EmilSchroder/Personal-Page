import React from 'react'

import Cycle from './Cycle'



class App extends React.Component{

    constructor(props){
        super(props)


    }



render(){
    return (
        
            <div id='wrapper'>
            <h1>
                Emil Schroder is a:<br />
                <Cycle />
            </h1>
     
                
            </div>
    )

}
}

export default App