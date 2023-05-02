
import type { PageLoad } from './$types';

type Category = {
    id: number,
    nombre: string
}


export const load: PageLoad = async () => {
    //const r = await fetch('https://dummyjson.com/todos');
    //const todos = await r.json(); // we only want to send the todo array as props
    const response = await fetch('http://localhost:9000/api/libreria/categorias/',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        
      },
    });

    const categories  = (await response.json())as Category[];
    return {
        props: {
            //todos, 
            categories
        }
    };
};
