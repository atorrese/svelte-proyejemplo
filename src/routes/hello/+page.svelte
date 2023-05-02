<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data);
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
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
                                <a class="btn btn-danger" href="javascript:;">Eliminar</a>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
