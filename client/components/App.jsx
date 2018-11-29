import React from 'react'
import Clipboard from 'react-clipboard.js'
import Cycle from './Cycle'



class App extends React.Component{

    constructor(props){
        super(props)

        this.tooltip = this.tooltip.bind(this)
    }

tooltip(){
    document.getElementById('confirmmes').style.animation = "flashup 3s ease-out"
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
                <a href='https://github.com/EmilSchroder'><img src='./images/github.svg.png' alt="Github logo linking to Emil's Github repos" /></a>
                <a href='https://www.linkedin.com/in/emil-schroder-b40a535a/'><img src='./images/linkedin.png' alt="LinkedIn logo linking to Emil's LinkedIn account" /></a>
                <Clipboard component='a' data-clipboard-text="eschro66@gmail.com">
                    <img onClick={()=>this.tooltip()} src='./images/email.png' alt="Email icon, clicking reveals email address" />
                    <p id='confirmmes'>Address copied to clipboard</p>
                </Clipboard>
                
            </div>

        </div>
    )

}
}

export default App