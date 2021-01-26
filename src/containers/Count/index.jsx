import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adjustCount, adjustAsync } from '../../redux/actions/count'
import { ADD, SUB } from '../../redux/constant'

class Count extends Component {
    
    adjustCount = (type) =>{
        return ()=>{
            this.props.adjustCount(type)
        }
    }

    adjustAsync = type => (
        ()=> this.props.adjustAsync(type, 500)
    )

    render() {
        const {count, personCount} = this.props
        return (
            <div>
                <h2>Count: {count}</h2> 
                <hr/>
                <button style={{margin: '5px', padding: '3px'}} onClick={this.adjustCount(ADD)}>+</button>
                <button style={{margin: '5px', padding: '3px'}} onClick={this.adjustCount(SUB)}>-</button>
                <button style={{margin: '5px', padding: '3px'}} onClick={this.adjustAsync(ADD)}>add later</button>
                .......... <span>Total Person Count: {personCount}</span>
            </div>
        )
    }
}

export default connect(
    state => ({count: state.count, personCount: state.person.length}),
    {
        adjustCount,
        adjustAsync
    }
)(Count)