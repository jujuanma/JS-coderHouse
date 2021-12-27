/* calculadora de precio con impuesto y intereses  */

var iva = 1.21;
var impuestoPais = 1.65;
var producto;
var precio;
var cuotas;
var origen;

$("#butonCalcular").on("click", function () {
    if ($("#producto").val() != "") {
        producto = $("#producto").val();
    } else(
        $("advertencia").html("<p>El nombre de producto es un campo requerido</p></div>")
    );
    if ($("#origen").val() != "") {
        origen = $("#origen").val();
    } else(
        $("#advertencia").html("<p>El origen del producto es un campo requerido</p>")
    );
    if ($("#importe").val() != "") {
        precio = $("#importe").val();
    } else(
        $("#advertencia").html("<p>El Precio es un campo requerido</p>")
    );
    if ($("#cuotas").val() != "") {
        cuotas = $("#cuotas").val();
    } else(
        $("#advertencia").html("<p>Las cuotas son requeridas</p>")
    );
    aplicarImpuesto();
});


function aplicarImpuesto() {
    precio = precio * iva;

    if (origen == 2) {
        if (cuotas == 1) {
            precio = precio * impuestoPais;
            var importeTotal = precio;
            console.log("el importe total es: " + importeTotal);
            $("#importeTotal").val("$" + importeTotal.toFixed(2));
            var importeCuotas = precio / cuotas;
            console.log("el valor de cuotas es: " + importeCuotas);
            $("#importeCuotas").val(cuotas + " cuota de $ " + importeTotal.toFixed(2));
            console.log("las cuotas son: " + cuotas);
            $("#cuotas").val(cuotas);
            console.log("No hay intereses")
            $("#interes").val("no hay intereses");

        } else {
            var interes = (cuotas * 0.03 + 1).toFixed(2);
            precio = precio * impuestoPais * (cuotas * interes).toFixed(2);
            var importeTotal = precio;
            console.log("el importe total es: " + importeTotal);
            $("#importeTotal").val("$" + importeTotal.toFixed(2));
            var importeCuotas = precio / cuotas;
            console.log("el valor de cuotas es: " + importeCuotas);
            $("#importeCuotas").val(cuotas + " cuotas de " + "$" + importeCuotas.toFixed(2));
            console.log("las cuotas son: " + cuotas);
            $("#cuotas").val(cuotas);
            console.log("el interes ingresado es: " + ((interes *100) -100)  + "%")
            $("#interes").val((interes *100) -100 + "%");

        }
    } else {

        if (cuotas == 1) {

            $("#producto").val(producto);
            var importeTotal = precio;
            console.log("el importe total es: " + importeTotal.toFixed(2));
            $("#importeTotal").val("$" + importeTotal.toFixed(2));
            var importeCuotas = precio / cuotas;
            $("#importeCuotas").val(cuotas + " cuota de " + "$" + importeCuotas.toFixed(2));
            $("#cuotas").val(cuotas);
            var interes = (cuotas * 0.03).toFixed(2);
            console.log("el interes ingresado es: " + 0 + "%")
            $("#interes").val("No hay intereses");


        } else {
            var interes = (cuotas * 0.03 + 1).toFixed(2);
            precio = precio * impuestoPais * (cuotas * interes).toFixed(2);
            $("#producto").val(producto);
            var importeTotal = precio;
            console.log("el importe total es: " + importeTotal.toFixed(2));
            $("#importeTotal").val("$" + importeTotal.toFixed(2));
            var importeCuotas = precio / cuotas;
            $("#importeCuotas").val(cuotas + " cuotas de " + "$" + importeCuotas.toFixed(2));
            $("#cuotas").val(cuotas);
            console.log("el interes ingresado es: " + ((interes *100) -100)  + "%")
            $("#interes").val((interes *100) -100 + "%");
        }





    }
    $("notificaciones").html("<p>Se calculo con exito el impuesto</p>")

}



var notificarCuotas = "precio en cuotas sin interes: " + "\n";
notificarCuotas += cuotas + " cuotas = " + precio / cuotas + "\n";
$("notificaciones").html(`<p>${notificarCuotas}</p>`)

$("#butonReset").on("click", function () {
    location.reload();
});

$("#info").append(`
<li class="informacion"> El impuesto esta calculado con la tasa de argentina</li>
<li class="informacion"> El IVA se calcula al 0.21</li>
<li class="informacion"> La moneda va a ser Pesos por mas que se eliga la opcion de importado</li>
`);

var numeroPedido = 0;
const urlGet = "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
$.ajax({
    method: "GET",
    url: urlGet,
    success: function (respuesta) {
        let misDatos = respuesta;
        numeroPedido = parseInt(misDatos.data[0]);
    }
});
$("#butonComprar").on("click", function () {
    $("#notificaciones").html(`<p>Tu pedido se realizo con exito: Pedido N° ${numeroPedido}</p>`)
});