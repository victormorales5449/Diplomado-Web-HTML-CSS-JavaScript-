const form = document.getElementById("form");
const message = document.getElementById("messageHelp");
const render = document.getElementById("result");

// funcion para procesar el sueldo
const procesar = (e) => {
    e.preventDefault();

    // variables para hacer los calculos 
    let afp = 0.0287;
    let ars = 0.0304;
    let isr1 = 0.15;
    let isr2 = 0.2;
    let isr3 = 0.25;
    let t_descuento = 0;
    let s_neto = 0;
    let r_isr = 0;
    let exento = 416220.01;
    let exento2 = 624329.01;
    let exento3 = 867123.01;
    let monto = 0;
    let impuesto = 0;

    const s_bruto = document.getElementById("sueldo_bruto"); // capturo el campo del sueldo

    // hago algunas validaciones para procesar el sueldo
    if (s_bruto.value !== "") {
        r_afp = parseFloat(s_bruto.value * afp);
        r_ars = parseFloat(s_bruto.value * ars);
        t_descuento = r_afp + r_ars;
        s_neto = s_bruto.value - t_descuento;
        r_isr = (s_neto * 12) > exento ? s_neto * 12 : "Exento";
        // valido si el monto es excento y procede a hacer el calculo
        if (r_isr >= exento) {
            // forma no. 1 con el 15% del ISR
            if (r_isr >= exento) {
                monto = r_isr - exento;
                impuesto = parseFloat((monto * isr1) / 12);
                t_descuento = r_afp + r_ars + impuesto;
                s_neto = s_bruto.value - t_descuento;
            }

            // forma no. 2 con el 20% del ISR
            if (r_isr >= exento2) {
                monto = r_isr - exento2;
                impuesto = parseFloat(((monto + 31216) * isr2) / 12);
                t_descuento = r_afp + r_ars + impuesto;
                s_neto = s_bruto.value - t_descuento;
            }

            // forma no. 3 con el 25% del ISR
            if (r_isr >= exento3) {
                monto = r_isr - exento3;
                impuesto = parseFloat(((monto + 79776) * isr3) / 12);
                t_descuento = r_afp + r_ars + impuesto;
                s_neto = s_bruto.value - t_descuento;
            }

        } else {
            impuesto = r_isr; // si no supera el exento, imprime el mensaje
        }

        render.innerHTML = `
            <div class="form-group">
               <p>El descuento de la AFP es: <b>RD$${r_afp.toFixed(2)}</b></p>
            </div> 
            
            <div class="form-group">
                <p>El descuento del ARS es: <b>RD$${r_ars.toFixed(2)}</b></p>
            </div> 
            
            <div class="form-group">
                <p>El descuento del ISR mensual es de: <b>${isNaN(impuesto) ? impuesto : "RD$" + impuesto.toFixed(2)}</b></p>
            </div> 
            
            <div class="form-group">
                <p>El total de los descuentos es de:  <b>RD$${t_descuento.toFixed(2)}</b></p>
            </div> 
            
            <div class="form-group">
                <p>El sueldo a cobrar es de: <b>RD$${s_neto.toFixed(2)}</b></p>
            </div>
        `;

    } else {
        message.innerHTML = "Debe llenear el campo";
    }
}

// funcion para cancelar y eliminar los datos del campo sueldo bruto
const cancelar = (e) => {
    render.innerHTML = "";
    document.getElementById("sueldo_bruto").focus();
}

form.addEventListener("submit", procesar); // evento para el submit
form.addEventListener("reset", cancelar); // evento para el cancelar de un formulario

/*
     ***********   Nota:  ******************

    mi logica no es muy buena pero espero que pueda ser entendida
*/