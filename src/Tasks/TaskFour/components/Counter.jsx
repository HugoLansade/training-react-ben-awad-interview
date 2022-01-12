import React from 'react'

export default function Counter({dispatch,state,ACTIONS}) {

    return (
        <div className='TaskFourCounter'>
        <h4>Screen Limit</h4>
            <div className='counterTool'>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.INCREMENT_LIMIT}) }>+</button>
                <span>{state.limit}</span>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.DECREMENT_LIMIT}) }>-</button>
            </div>

        <h4>Screen Offset</h4>
            <div className='counterTool'>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.INCREMENT_OFFSET}) }>+</button>
                <span>{state.offset}</span>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.DECREMENT_OFFSET}) }>-</button>
            </div>

        </div>
    )
}
