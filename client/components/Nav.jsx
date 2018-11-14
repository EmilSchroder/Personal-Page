import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav id='nav'>
            <h1>Nav</h1>
            <Link to={`/`}><p>About</p></Link>
            <Link to={`/code`}><p>Code</p></Link>
            <Link to={`/professional`}><p>Professional</p></Link>
            <Link to={`/milk`}><p>Milk</p></Link>
        </nav>
    )
}

export default Nav