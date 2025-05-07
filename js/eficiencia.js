function calcularEficiencia() {
  const distancia = parseFloat(document.getElementById('distanciaRodada').value);
  const litros = parseFloat(document.getElementById('litrosGastos').value);
  const resultado = document.getElementById('resultado');
  
  if (isNaN(distancia) || isNaN(litros) || litros === 0) {
    resultado.innerText = 'Preencha os campos corretamente (sem zero).';
    return;
  }
  
  const eficiencia = distancia / litros;
  
  resultado.innerHTML = `<p>Sua eficiência média é de <strong>${eficiencia.toFixed(2)} km/l</strong></p>
  <p>Você pode usar esse valor na página principal!</p>`;
}
  