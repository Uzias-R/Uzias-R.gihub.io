let Calculadora = document.getElementById('peso');
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click',  () => {
    const DATO = document.getElementById('peso').value;
    console.log("se hizo click")
    console.log("dato ingresado", DATO)
    if (DATO > 0) {
        ERROR.style.display = 'none';
        if (DATO <= 30) {
            let flujo = calcularFlujoHollidaySegar(DATO);
            let mantenimiento = flujo * 1.5;
            FLU.innerHTML = `Mantenimiento (Holliday-Segar): ${flujo} cc/hr`;
            MAN.innerHTML = `m+m/2: ${mantenimiento} cc/hr`;
        } else {
            let { volumenDiario, mantenimiento } = calcularFlujoSuperficieCorporal(DATO);
            FLU.innerHTML = `Superficie Corporal * 1500: ${volumenDiario.toFixed(2)} cc/hr`;
            MAN.innerHTML = `Superficie Corporal * 2000: ${mantenimiento.toFixed(2)} cc/hr`;
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});


let peso = 30
if (peso <= 30) {
    console.log(calcularFlujoHollidaySegar(5))
   }

     function calcularFlujoHollidaySegar(peso) {
    if (peso >= 20) {
        aux = (peso - 20) * 20
        let resultado = 1500 + aux
        return resultado
    }
    else if (peso <= 20 && peso > 10) {
        let resultado = ((peso / 10) * 50) + 1000
        return resultado
    }
    else {
        let resultado = (peso * 100)
        return resultado
    }
   console.log(resultado)

}
console.log(superficieCorporal(34))
function superficieCorporal (peso) {
    let resultado = ((peso * 4 ) + 7) / (peso + 90)
    return resultado 
}
