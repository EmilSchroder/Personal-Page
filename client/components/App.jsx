import React from 'react'

import Text from './Text'




class App extends React.Component{

    constructor(props){
        super(props)


    }



render(){
    return (
        
            <div id='wrapper'>
                <Text />
                <div id='slider'><input type='range' min='0' max='1' value='1' /></div>
                
            </div>
    )

}
}

export default App