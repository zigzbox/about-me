import React, { Component } from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'App.js'
import 'MyReason.js'
import 'MyInterest'
import { Switch } from 'react-router-dom'

class MyReason extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <section>
                            <nav><Link to="./NavSite"></Link></nav>
                            <p>My reason for attending Helio</p>
                            <ul>
                                <li>Want to break into the development industry!</li>
                                <li>Its time for a career change to something I really want to do!</li>
                                <li>It seemed to be the best choice to do these things!</li>
                            </ul>
                        </section>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MyReason