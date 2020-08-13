/*
propiedad de @author: Victor L Morales M

este tema nunca he podido entenderlo, con esta formula francesa las cuotas me dan diferentes 
a las que usan en el banco dominicano, la verdad es que no entiendo, pero realice el ejercicio.

seguire investigando para ver si consigo el calculo que usan los bancos dominicanos y asi poder estar 
bien con esta practica.
*/

const form = document.getElementById("form");
const message = document.getElementById("message");
const render = document.querySelector(".table tbody");

// funcion para calcular la amortizacion de un prestamo 
const amortizacion = (monto, interes, tiempo) => {
    render.innerHTML = '';
    let fechas = [];
    let mesActual = moment(Date.now());
    mesActual.add(1, 'month');

    if (monto !== "" && interes !== "" && tiempo !== "") {
        let pagoInteres = 0, pagoCapital = 0, cuota = 0;

        // formula para obtener las cuotas del pago
        cuota = monto * (Math.pow(1 + (interes / 100) / 12, tiempo) * (interes / 100) / 12) / (Math.pow(1 + (interes / 100) / 12, tiempo) - 1);

        for (let i = 1; i <= tiempo; i++) {
            pagoInteres = parseFloat(monto * (interes / 100) / 12); // obtenemos el interes
            pagoCapital = cuota - pagoInteres;   // obtenemos el capital  
            monto = parseFloat(monto - pagoCapital); // obtenemos el balance
            // console.log(monto);
            fechas[i] = mesActual.format("DD-MM-YYYY");
            mesActual.add(1, 'month');

            const row = document.createElement("tr"); // creo la fila para cuando recorra el loop vaya reando las filas dependiendo del tiempo
            row.innerHTML = `
                <tr>
                    <td>${i}</td>
                    <td>${fechas[i]}</td>
                    <td>${cuota.toFixed(2)}</td>
                    <td>${pagoCapital.toFixed(2)}</td>
                    <td>${pagoInteres.toFixed(2)}</td>
                    <td>${monto.toFixed(2)}</td>                
                </tr>
            `;

            render.appendChild(row);
        }

    } else {
        message.innerHTML = `<div class="alert alert-danger" role="alert">
                                    Debes llenar los campos
                            </div >`;
        setTimeout(() => message.innerHTML = "", 4000);
    }

}
// funcion para cancelar y eliminar los datos del formulario
const cancelar = (e) => {
    render.innerHTML = "";
    document.getElementById("monto").focus();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const monto = document.getElementById("monto");
    const interes = document.getElementById("tasa_interes");
    const tiempo = document.getElementById("p_meses");
    amortizacion(monto.value, interes.value, tiempo.value);
}); // evento para el submit
form.addEventListener("reset", cancelar); // evento para el cancelar del formulario

/*
     ***********   Nota:  ******************

    mi lógica no es muy buena pero espero que pueda ser entendida
*/