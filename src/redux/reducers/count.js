import { ADD, SUB } from "../constant";

const initState = 0
export function adjust(preState = initState, action){
    console.log('count action', action)
    const {type, data} = action
    switch(type){
        case ADD:
            return preState + data
        case SUB:
            return preState - data
        default:
            return preState
    }
}