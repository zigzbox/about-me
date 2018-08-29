import React, { Component } from 'react'
import NavSite from './NavSite'
import './App.css'
import Projectitem from './Projectsitem'
class Projects extends Component {
    render() {
        return (
            <div>
                <header><h1>Projects</h1>
                    <NavSite />
                </header>
                <section>
                    <h2>Current Projects</h2>
                    <Projectitem ProjectName='TV Demo' dates='2018-present' discription='the tv demo site' />
                </section>
            </div>

        )
    }
}

export default Projects