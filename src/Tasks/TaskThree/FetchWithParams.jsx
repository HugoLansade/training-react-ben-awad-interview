import React, {useState, useReducer, useEffect} from 'react'
import axios from "axios"

export default function FetchWithParams() {
    const [pokemons, setpokemons] = useState([])
    const [pokemonOfTheMonth, setpokemonOfTheMonth] = useState("")


    const fetchApi = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setpokemons(res.data.results)
        } catch (error) {
            console.log(error)
        }
        
    }

    const fetchPokemonOfTheMonth = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            console.log(res.data.name)
            setpokemonOfTheMonth(res.data.name);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonOfTheMonth();
    }, [])

    return (
        <div className='TaskTwo'>
        <h1>Task Three : Fetch API</h1>
            <h4>Poke of the month</h4>
            <span>{pokemonOfTheMonth}</span> <br/>
            <button className='fetch-api-btn' onClick={() => fetchApi()}>Fetch Api !</button>
            <h4>Poke list</h4>

            <ul>
            
            {
                !pokemons.length ?
                (
                    <span>No pokemons yet...</span>

                ) : (                
                        pokemons.map((el,index) => {
                            return (
                                <li className='poke-list' key={index}>{el.name} && {el.url}</li>
                                
                                )
                        })
                )
            }
                
            </ul>
        </div>
    )
}

{/* JSON.stringify(data) */} //to get data in json printed