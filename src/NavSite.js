import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavSite extends Component {
    render() {
        return (


            <nav>
                <Link to='/'>Homepage</Link>
                <Link to='/WorkHistory'>Work History</Link>
                <Link to='/Projects'>Projects</Link>
            </nav>



        )
    }
}

export default NavSite