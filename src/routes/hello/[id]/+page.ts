import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
    const id = params.id;
    console.log(id)
    let category = [];
    if(id !== 'new'){
        const response = await fetch(`http://localhost:9000/api/libreria/categorias/${id}`);
        category = await response.json();
    }
    
    return {
        props: {
            id,
            category
        }
    };
}