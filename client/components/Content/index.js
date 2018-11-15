import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import About from './About'
import Code from './Code'
import Professional from './Professional'
import Milk from './Milk'

const Content = () => {
    return (
        
            <div id='content'>
                <Route exact path='/' component={About} />
                <Route path='/code' component={Code} />
                <Route path='/professional' component={Professional} />
                <Route path='/milk' component={Milk} />
            </div>
       
    )
}

export default Content