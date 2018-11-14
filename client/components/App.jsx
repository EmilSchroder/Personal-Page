import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import EmilComp from './EmilComp'
import Nav from './Nav'

import Content from './Content/index'


const App = () => {
    return (
        <Router>
            <div id='wrapper'>
                <EmilComp />
                <Content />
                <Nav />
            </div>
        </Router>
    )
}

export default App