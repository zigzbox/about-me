import React, { Component } from 'react'
import NavSite from './NavSite'
import WorkHistoryItem from './WorkHistoryItem';

class WorkHistory extends Component {
    render() {
        return (
            <div>
                <header><h1>Work History</h1>
                    <NavSite />

                </header>
                <section>
                    <p>this is where i worked forever</p>
                    <WorkHistoryItem company='Exspeedia Transport' position='Diesel Mechanic' dates='Oct 2017-Jan 2018' duties1='upkeep trucks' duties2='keep up on services' duties3='make sure trucks where safe' />
                    <WorkHistoryItem company='Stealth Gear USA' position='Shipping and procurement Manager' dates='Feb 2016-Jan 2018' duties1='Keep Supplies in stock using Netsuite and Mejento' duties2='Help the floor keep moving' duties3='Stock the amazon store' />
                    <WorkHistoryItem company='Windriver Ex' position='Night Shop Manager' dates='May 2015-Oct 2015' duties1='upkeep trucks' duties2='keep up on services' duties3='make sure the trucks where safe' />
                </section>
            </div>

        )
    }
}

export default WorkHistory