function consultarAllDisfraz() {

    $.ajax (
               {
                        url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
                        type         : 'GET',
                        dataType     : 'json',

                        success      :  function(json){

                                            $("#idDivConsulta").empty();
                                            $("#idDivConsulta").append("<table>");
                                            $("#idDivConsulta").append("<caption>Lista DISFRACES</caption>");
                                            $("#idDivConsulta").append("<tr><th>--Codigo--</th><th>--Marca--</th><th>--Modelo--</th><th>--ID Categoria--</th><th>--Nombre--</th></tr>");
                                            for (i=0; i < json.items.length; i++){
                                                $("#idDivConsulta").append("<tr>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                                $("#idDivConsulta").append('<td><button onclick="borrarDisfraz('+json.items[i].id+')">Borrar</button></td>');
                                                $("#idDivConsulta").append('<td><button onclick="obtenerItemDisfraz('+ json.items[i].id +')">Cargar</button></td>');
                                                $("#idDivConsulta").append("</tr>");
                                            }

                                            $("#idDivConsulta").append("</table>");

                                            console.log(json)
                                        },
                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}

function obtenerItemDisfraz(idItem){
    $.ajax (
        {
            url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume/'+idItem,
            type         : 'GET',
            dataType     : 'json',
            success      :  function(response){
                                console.log(response);

                                var items=response.items[0];
                                $("#id1").val(items.id);
                                $("#brand").val(items.brand);
                                $("#model").val(items.model);
                                $("#category_id").val(items.category_id);
                                $("#name").val(items.name);

                            },
            error       :   function(xhr,status){
                                console.log( xhr);
                            }
        }
    );
            
}

function insertarDisfraz() {
    var elemento={
        id:$("#id1").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    var datosEnvio = JSON.stringify(elemento);

    $.ajax (
        {

            url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
            type         : 'POST',
            data         :  elemento,

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}

function borrarDisfraz(idElemento) {
    var elemento={
        id:idElemento
    };

    datosEnvio   = JSON.stringify(elemento);

    $.ajax (
        {

            url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}

function actualizarDisfraz() {
    var elemento={
        id:$("#id1").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    var datosEnvio = JSON.stringify(elemento);



    $.ajax (
                {

                    url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
                    type         : 'PUT',
                    data         :  elemento,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );


}

function consultarId() {

    var codigo =$("#idCodigo").val();

    $.ajax (
                {

                    url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        $("#idDivConsulta").empty();
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                                        }
                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        console.log(xhr)
                                    },



                }
            );


}