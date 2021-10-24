function consultarAllMensaje() {

    $.ajax (
               {
                        url          : 'https://gf5b0dffb7ad6db-basedatospba.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
                        type         : 'GET',
                        dataType     : 'json',

                        success      :  function(json){

                                            $("#idDivConsulta").empty();
                                            $("#idDivConsulta").append("<table>");
                                            $("#idDivConsulta").append("<caption>Lista CLIENTES</caption>");
                                            $("#idDivConsulta").append("<tr><th>--Codigo--</th><th>--Mensaje--</th></tr>");
                                            for (i=0; i < json.items.length; i++){
                                                $("#idDivConsulta").append("<tr>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                                $("#idDivConsulta").append("<td>" + json.items[i].messagetext + "</td>");
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