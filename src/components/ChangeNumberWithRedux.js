import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../actions/action'


const ChangeNumberWithRedux = () => {

    const count = useSelector(state => state.Counter)
    const isLoged = useSelector(state => state.IsLogged)
    const dispatch = useDispatch();

    const onIncrementNumber = () => {
        dispatch(increment())
        dispatch({type: 'SIGN_IN'})
    }

    const onDecrementNumber = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrementNumber}>Increment</button>
            <button onClick={onDecrementNumber}>Decrement</button>

            {isLoged ? <h3>ABC</h3> : ''}
        </div>
    )
}

export default ChangeNumberWithRedux;