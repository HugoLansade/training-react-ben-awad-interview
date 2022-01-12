import axios from "axios"

export const fetchApiLimit = async (limit, offset) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            console.log("res back", res.data.results)
            return res.data.results;
        } catch (error) {
            console.log(error)
        }
        
    }