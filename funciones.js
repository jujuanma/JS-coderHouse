/* calculadora de precio con impuesto y intereses  */

const cuotas = [3, 6, 9, 12, 18];

var iva = 1.21;
var impuestoPais = 1.65;

class producto {
    constructor() {
        this.producto = prompt("ingrese nombre del producto");
        this.precio = parseInt(prompt("ingrese precio"));
        this.origen = parseInt(prompt("ingrese origen del producto (1 para arg, 2 para extranjero)"));
        this.cuotas = parseInt(prompt("ingrese cuotas"));
        this.interes = parseInt(prompt("Ingrese interes"));
    }
    aplicarImpuesto() {
        this.precio = this.precio * iva;
        if (this.origen == 2) {
            this.precio = this.precio * impuestoPais;
            var notificar = "se aplico el impuesto pais a tu producto: " + this.precio;
            alert(notificar);
            document.getElementById("producto").value = this.producto;

            var importeTotal = this.precio;
            console.log("el importe total es: " + importeTotal);
            document.getElementById("importeTotal").value = "$" + importeTotal;

            var importeCuotas = this.precio / this.cuotas;
            console.log("el valor de cuotas es: " + importeCuotas);
            document.getElementById("importeCuotas").value = "Cuotas de " + importeCuotas;

            console.log("las cuotas son: " + this.cuotas);
            document.getElementById("cuotas").value = this.cuotas;

            console.log("el interes ingresado es: " + this.interes);
            document.getElementById("interes").value = this.interes + "%";

            var informacion = document.getElementsByClassName("informacion");
            for (let info of informacion) {
                console.log(info.innerHTML);
            }

        } else {
            this.precio = this.precio;
            document.getElementById("producto").value = this.producto;

            var importeTotal = this.precio;
            console.log("el importe total es: " + importeTotal);
            document.getElementById("importeTotal").value = "$" + importeTotal;

            var importeCuotas = this.precio / this.cuotas;
            console.log("el valor de cuotas es: " + importeCuotas);
            document.getElementById("importeCuotas").value = "Cuotas de " + importeCuotas;

            console.log("las cuotas son: " + this.cuotas);
            document.getElementById("cuotas").value = this.cuotas;

            console.log("el interes ingresado es: " + this.interes);
            document.getElementById("interes").value = this.interes + "%";

            var informacion = document.getElementsByClassName("informacion");
            for (let info of informacion) {
                console.log(info.innerHTML);
            }
            return "se aplico el impuesto";

        }
    }
}

const prod1 = new producto();
document.getElementById("importe").value = "$" + prod1.precio;

console.log(prod1.aplicarImpuesto());

var notificarCuotas = "precio en cuotas sin interes: " + "\n";
for (const cuota of cuotas) {
    notificarCuotas += cuota + " cuotas = " + prod1.precio / cuota + "\n";
}
alert(notificarCuotas);

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
    alert("tu pedido se realizo con existo: pedido N°" + numeroPedido)
});


