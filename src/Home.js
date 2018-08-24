import React, { Component } from 'react'
import './App.css'
import NavSite from './NavSite'
class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header" >
                    <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/39442343_10217259702954794_1225211984656465920_n.jpg?_nc_cat=0&oh=6988dbefb3140c7c157902313e0cb7e9&oe=5BFE7552" className="App-logo" alt="logo" />
                    <h1 className="App-title">About Glen Hecht</h1>
                    <NavSite/>
                </header>
                <section>
                    <p>Hello, I'm Glen! Alittle bit about myself, I'm a artist, handyman, and wannabe pro drifter! Also I do enjoy coding!</p>
                </section>
                <section>
                    <p>My reason for attending Helio</p>
                    <ul>
                        <li>Want to break into the development industry!</li>
                        <li>Its time for a career change to something I really want to do!</li>
                        <li>It seemed to be the best choice to do these things!</li>
                    </ul>
                </section>
                <section>
                    <p>My interests</p>
                    <ul>
                        <li>Drifting
            </li>
                        <li>Making things</li>
                        <li>Doing an art!</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home