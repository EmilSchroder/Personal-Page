import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import EmilComp from './EmilComp'
import Nav from './Nav'
import Content from './Content/index'


class App extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            windowWidth: window.innerWidth
        }

        this.widthChange = this.widthChange.bind(this)
        this.renderLaptop = this.renderLaptop.bind(this)
    }

    componentDidMount(){
        addEventListener('resize', this.widthChange)
    }

    widthChange(){
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    renderLaptop(){
        if (this.state.windowWidth>'768'){
            return(
                <React.Fragment>
                    <Content />
                    <Nav />
                </React.Fragment>
            )
        }
    }

render(){
    return (
        <Router>
            <div id='wrapper'>
                <EmilComp />
                {this.renderLaptop()}
            </div>
        </Router>
    )

}
}

export default App