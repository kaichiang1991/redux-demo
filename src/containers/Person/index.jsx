import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>Person</h2>
                <input type="text" placeholder="enter name"/>
                <input type="number" placeholder="enter age"/>
            </div>
        )
    }
}

export default connect(

)(Person)