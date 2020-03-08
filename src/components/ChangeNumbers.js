import React, { useState } from 'react'


const ChangeNumbers = () => {

    const [number, setNumber] = useState(0);

    const incrementNumber = () =>{
        setNumber(number + 1)
    }

    const decrementNumber = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
        </div>
    )
}

export default ChangeNumbers