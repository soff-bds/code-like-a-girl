function Ventana_alerta()
{
    alert ("Le informamos de que la mayoria de estas series son recomemdadas para mayores de 16 años");
};
function VentanaConfirmacion()
{
    var respuesta;
    if (confirm("Desea Confirmar?"))
    {
        respuesta="has pulsado OK";
    }
    else
    {
        respuesta="Has pulsado CANCEL";
    }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
}
function PideActor()
{
    var respuesta
       var person=prompt("Cómo se llama tu actor/actriz favorit@?");
       if (person==null||person=="")
       {
       respuesta="El usuariopulso CANCEL";
       }
       else
       {
           respuesta="Gran actor/actriz. "+person+" aparece en las siguientes series. ";
       }

       document.getElementById("MensajeInformacion").innerHTML=respuesta;
    } 

function abreportada(){
    window.open("file:///C:/Users/LearningCenter/Desktop/MATERIAL%20COMPILADO%20CLAG/IT.url/Proyecto%20-%20Bootstrap/portada.html")
}