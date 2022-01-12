import React, {useState, useReducer} from 'react'

export default function Counter() {
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count+1)
    }

    const decrement = () => {
        setcount(count-1)
    }

    return (
        <div className='TaskOne'>
        <h1> Task One : Counter</h1>
            <div className='counterTool'>
                <button className='counter-btn' onClick={() => increment() }>+</button>
                <span>{count}</span>
                <button className='counter-btn' onClick={() => decrement() }>-</button>
            </div>

        </div>
    )
}
