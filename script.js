function calcularAhorro() {
    // Obtener valores del formulario
    const potencia = parseFloat(document.getElementById('potencia').value);
    const horas = parseFloat(document.getElementById('horas').value);
    const dias = parseFloat(document.getElementById('dias').value);
    const tarifa = parseFloat(document.getElementById('tarifa').value);

    // Validar que todos los campos estén llenos
    if (!potencia || !horas || !dias || !tarifa) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Calcular consumo en kWh
    const consumoKwh = (potencia * horas * dias) / 1000;

    // Calcular costo mensual
    const costoMensual = consumoKwh * tarifa;

    // Calcular ahorro con energía solar (estimando 60% de ahorro)
    const ahorroMensual = costoMensual * 0.60;

    // Mostrar resultados
    document.getElementById('consumo').textContent = consumoKwh.toFixed(2);
    document.getElementById('costo').textContent = '$' + costoMensual.toFixed(2);
    document.getElementById('ahorro').textContent = '$' + ahorroMensual.toFixed(2);
    document.getElementById('resultado').style.display = 'block';

    // Scroll suave al resultado
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}

// Permitir calcular con Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularAhorro();
            }
        });
    });
});