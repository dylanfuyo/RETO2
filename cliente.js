function consultarAllCliente() {

    $.ajax (
               {
                        url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
                        type         : 'GET',
                        dataType     : 'json',

                        success      :  function(json){

                                            $("#idDivConsulta").empty();
                                            $("#idDivConsulta").append("<table>");
                                            $("#idDivConsulta").append("<caption>Lista CLIENTES</caption>");
                                            $("#idDivConsulta").append("<tr><th>--Codigo--</th><th>--Nombre--</th><th>--Email--</th><th>--Edad--</th></tr>");
                                            for (i=0; i < json.items.length; i++){
                                                $("#idDivConsulta").append("<tr>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].email + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].age + "</td>");
                                                $("#idDivConsulta").append('<td><button onclick="borrar('+json.items[i].id+')">Borrar</button></td>');
                                                $("#idDivConsulta").append('<td><button onclick="obtenerItemEspecifico('+ json.items[i].id +')">Cargar</button></td>');
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