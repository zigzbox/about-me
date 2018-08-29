import React, {Component} from 'react'

class Projectitem extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.ProjectName}</h2>
                <p>{this.props.dates}</p>
                <ul>
                    <li>{this.props.discription}</li>
                </ul>
            </div>
        )
    }
}

export default Projectitem