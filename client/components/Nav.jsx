import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav id='nav'>
            <Link to={`/`}>About</Link>
            <Link to={`/code`}>Code</Link>
            <Link to={`/professional`}>Professional</Link>
            <Link to={`/milk`}>Milk</Link>
        </nav>
    )
}

export default Nav