<script lang="ts">
  import { goto } from '$app/navigation';

    export let data;
    console.log(data);
    let categoria = { 
        id: 0,
        nombre: '',
    }
    categoria = data.props.category.id >0  ? data.props.category: categoria;

    async function enviarDatosALaAPI(categoria:any) {
        let url = 'http://127.0.0.1:9000/api/libreria/categorias/';
        if(categoria.id){
            url = `http://127.0.0.1:9000/api/libreria/categorias/${categoria.id}/`;
        }
        const response = await fetch(url, {
            method: categoria.id ? 'PUT':'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });

        return response.json();
    }

    const enviar = (categoria:any) =>{
        let  c = enviarDatosALaAPI(categoria);
        c.then((res) => {
            console.log(res);
            if(res.id){
                goto('/hello/');
            }
        });
    
    }
</script>
<form action="javascript:;">
    <input type="text" class="form-control" placeholder="Nombre" bind:value={categoria.nombre}>
    <div style="text-align: start;" class="my-2">
        <button class="btn btn-primary" on:click={() => {enviar(categoria)}}>Enviar</button>
        <a href="/hello" class="btn btn-danger"> Cancelar</a>
    </div>
</form>