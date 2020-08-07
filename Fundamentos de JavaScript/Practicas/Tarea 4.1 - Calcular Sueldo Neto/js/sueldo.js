const form = document.getElementById("form");
const message = document.getElementById("messageHelp");
const render = document.getElementById("result");
const procesar = (e) => {
    e.preventDefault();

    let afp = 0.0287;
    let ars = 0.0304;
    let isr = 0.15;
    let t_descuento = 0;
    let s_neto = 0;

    const s_bruto = document.getElementById("sueldo_bruto");

    if (s_bruto.value !== "") {
        r_afp = s_bruto.value * afp;
        r_ars = s_bruto.value * ars;
        r_isr =  ? : "No cumple";
        if (s_bruto.value > 34260) {
            let valor1 = s_bruto.value * 12; 

        } else {
            r_isr = "Exede";
        }
        t_descuento = r_afp + r_ars;
        s_neto = s_bruto.value - t_descuento;
        
        console.log(r_afp,r_ars, r_isr);

        render.innerHTML = `
        <div class="form-group">
                <label for="afp">AFP</label>
                <input type="text" class="form-control" id="afp" value="$RD ${r_afp}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="ars">ARS</label>
                <input type="text" class="form-control" id="ars" value="$RD ${r_ars}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="isr">ISR</label> 
                <input type="text" class="form-control" id="isr" value="${r_isr}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="descuento">Total descuento</label>
                <input type="text" class="form-control" id="descuento" value="$RD ${t_descuento}" disabled readonly>
            </div> 
            
            <div class="form-group">
                <label for="sueldo_neto">Sueldo neto</label>
                <input type="text" class="form-control" id="sueldo_neto" value="$RD ${s_neto}" disabled readonly>
            </div>
        `;

    } else {
        message.innerHTML = "Debe llenear el campo";        
    }
}

form.addEventListener("submit", procesar);