import React from 'react'

import Cycle from './Cycle'



class App extends React.Component{

    constructor(props){
        super(props)


    }



render(){
    return (
        <div id='full'>

            <div id='wrapper'>
                <h1>
                    Emil Schroder is a:<br />
                    <Cycle />
                </h1>  
            </div>

            <div id='social'>
                <a href='www.google.com'><img src='./images/github.svg.png' alt="Github logo linking to Emil's Github repos" /></a>
                <a href='www.google.com'><img src='./images/linkedin.png' alt="LinkedIn logo linking to Emil's LinkedIn account" /></a>
                <a href='www.google.com'><img src='./images/email.png' alt="Email icon, clicking reveals email address" /></a>
                
            </div>

        </div>
    )

}
}

export default App