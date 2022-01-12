import axios from "axios"

export const fetchApiLimit =  (limit, offset) => {
            return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then((res) => {
                const {results} = res.data;
                return results;
            })    
            .catch((err) => {
                console.log(err)
            })       
}