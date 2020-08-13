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
    let exento = 399923;
    let monto = 0;
    let impuesto = 0;

    const s_bruto = document.getElementById("sueldo_bruto"); // capturo el campo del sueldo

    // hago algunas validaciones para procesar el sueldo
    if (s_bruto.value !== "") {
        r_afp = s_bruto.value * afp;
        r_ars = s_bruto.value * ars;
        t_descuento = r_afp + r_ars;
        s_neto = s_bruto.value - Math.trunc(t_descuento);
        r_isr = (s_neto * 12) > exento ? s_neto * 12 : "Exento";

        // valido si el monto es excento y procede a hacer el calculo
        if (r_isr > exento) {
            // forma no. 1 con el 15% del ISR
            if (r_isr > 399923) {
                monto = r_isr - exento;
                impuesto = (monto * isr1) / 12;
            }

            // forma no. 2 con el 20% del ISR
            if (r_isr > 599884) {
                monto = r_isr - exento;
                impuesto = ((monto * isr2) + 29994) / 12;
            }
            
            // forma no. 3 con el 25% del ISR
            if (r_isr > 3833171) {
                monto = r_isr - exento;
                impuesto = ((monto * isr3) + 76652) / 12;
            }

        } else {
            impuesto = r_isr; // si no supera el exento, imprime el mensaje
        }


        render.innerHTML = `
        <div class="form-group">
                <label for="afp">AFP</label>
                <input type="text" class="form-control" id="afp" value="RD$ ${r_afp}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="ars">ARS</label>
                <input type="text" class="form-control" id="ars" value="RD$ ${r_ars}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="isr">ISR</label> 
                <input type="text" class="form-control" id="isr" value="${impuesto}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="descuento">Total descuento</label>
                <input type="text" class="form-control" id="descuento" value="RD$ ${t_descuento}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="sueldo_neto">Sueldo neto</label>
                <input type="text" class="form-control" id="sueldo_neto" value="RD$ ${s_neto}" disabled readonly>
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