import React, {useState, useReducer, useEffect} from 'react'
import axios from "axios"
import { fetchApiLimit } from './api/FetchData';

const ACTIONS = {
    INCREMENT_LIMIT : "incrementLimit",
    DECREMENT_LIMIT : "decrementLimit",
    INCREMENT_OFFSET : "incrementOffset",
    DECREMENT_OFFSET : "decrementOffset"
}

export default function ScreenLimit() {
    const [pokemons, setpokemons] = useState([])
    // const [screenLimit, setscreenLimit] = useState(2)
    // const [offset, setoffset] = useState(10)

    const initialState = {limit: 5, offset : 0};
  
    
    const reducer = (state, action) => {
        switch (action.type) {

            case ACTIONS.INCREMENT_LIMIT: 
                return { limit : state.limit + 1};

            case ACTIONS.DECREMENT_LIMIT:
                return { limit : state.limit - 1};

            case ACTIONS.INCREMENT_OFFSET:
                return { offset : state.offset + 1};

            case ACTIONS.DECREMENT_OFFSET:
                return { offset : state.offset - 1};

            default:
                console.log("error in switch reducer")
            throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect( () => {
        let res = fetchApiLimit(state.limit,state.offset);
        console.log("res front", res)
        setpokemons(res);
    }, [state.limit, state.offset])


    return (
        <div className='TaskFour'>
        <h1>Task Four : Fetch API with limit</h1>
            <h4>Choose the number of pokemon you want to display on screen :</h4>

            <div className='counterTool'>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.INCREMENT_LIMIT}) }>+</button>
                <span>{state.limit}</span>
                <button className='counter-btn' onClick={() => dispatch({type : ACTIONS.DECREMENT_LIMIT}) }>-</button>
            </div>
            {/* <input type="number"  onChange={() => fetchApi(screenLimit, offset)}/>
            <button className='fetch-api-btn' onClick={() => fetchApi(screenLimit, offset)}>Fetch Api !</button> */}

            <h4>Poke with limit list</h4>
            <span>The limit is {state.limit} and the offset is {state.offset}</span>
            <ul>            
            {
                !pokemons.length ?
                (
                    <span>No pokemons yet...</span>

                ) : (                
                        pokemons.map((el,index) => {
                            return (                                
                                <li className='poke-list' key={index}>{el.name}</li>
                                
                                )
                        })
                )
            }
            </ul>
        </div>
    )
}
