import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    sendEvent = ()=>{
        this.props.addPerson({id: nanoid(), name: this.name.value, age: this.age.value})
        this.name.value = this.age.value = null
    }

    render() {
        const {lists, count} = this.props

        return (
            <div>
                <hr/>
                <h2>Person</h2>
                <input ref={c => this.name = c} style={{margin: '5px'}} type="text" placeholder="enter name"/>
                <input ref={c => this.age = c} style={{margin: '5px'}} type="number" placeholder="enter age"/>
                <button onClick={this.sendEvent}>Send</button>
                <ul>
                    {lists.map(list => <li key={list.id}>{list.name} {list.age}</li>)}
                </ul>

                <hr/>
                Total Count: {count}
            </div>
        )
    }
}

export default connect(
    state => ({lists: state.person, count: state.count}),
    {addPerson}
)(Person)