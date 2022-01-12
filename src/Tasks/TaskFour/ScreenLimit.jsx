import React, {useState, useReducer, useEffect} from 'react'
import axios from "axios"
import { fetchApiLimit } from './api/FetchData';
import Counter from './components/Counter';
import { ACTIONS, reducer, initialState } from './ReducerParams/ReducerParams';


export default function ScreenLimit() {
    const [pokemons, setpokemons] = useState([])
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

            <Counter dispatch={dispatch} ACTIONS={ACTIONS} state={state}/>

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
