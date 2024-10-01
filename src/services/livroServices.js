import axios from 'axios';


export async function getLivros(){
    const response = await axios.get("http://localhost:3000/livros")

    return response.data
}

