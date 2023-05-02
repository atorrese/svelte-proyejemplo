<script lang="ts">
  import { goto } from '$app/navigation';
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data);
    async function eliminar(categoria:any) {
        let url = `http://127.0.0.1:9000/api/libreria/categorias/${categoria.id}/`;
        console.log(url);
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });
        if(response.ok){
            //goto('/hello/');
            location.reload();
        }
    
        //return response.json();*/
    }
</script>
<div class="row">
    <div class="col-12 col-md-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Listado de Categorias</h3>
            </div>
            <div class="panel panel-body">
                <a class="btn btn-success" href="/hello/new">Nuevo</a>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripción</th>
                            <th style="text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.props.categories as item}
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td style="text-align: center;">
                                <a class="btn btn-info" href="/hello/{item.id}">Editar</a>
                                <button class="btn btn-danger" on:click={()=>{eliminar(item)}}>Eliminar</button>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
