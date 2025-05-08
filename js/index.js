function calcularViagem() {
  const distancia = parseFloat(document.getElementById('distancia').value);
  const eficiencia = parseFloat(document.getElementById('eficiencia').value);
  const preco = parseFloat(document.getElementById('preco').value);
  const velocidadeMin = parseFloat(document.getElementById('velocidadeMin').value);
  const velocidadeMax = parseFloat(document.getElementById('velocidadeMax').value);
  
  const resultado = document.getElementById('resultado');
  
  if (isNaN(distancia) || isNaN(eficiencia) || isNaN(preco) || isNaN(velocidadeMin) || isNaN(velocidadeMax)) {
    resultado.innerText = 'Por favor, preencha todos os campos corretamente.';
    return;
  }
  
  const litrosNecessarios = distancia / eficiencia;
  const custoTotal = litrosNecessarios * preco;
  
  const tempoMin = distancia / velocidadeMax;
  const tempoMax = distancia / velocidadeMin;
  const tempoMedio = (tempoMin + tempoMax) / 2;
  
  resultado.innerHTML = `<p class="espacado">Custo total da viagem: <strong>R$ ${custoTotal.toFixed(2)}</strong></p>
    <p class="espacado">Tempo estimado (baseado em velocidade média): <strong>${tempoMedio.toFixed(2)} horas</strong></p>
    <p class="espacado">Tempo mínimo: <strong>${tempoMin.toFixed(2)} h</strong> — Tempo máximo: <strong>${tempoMax.toFixed(2)} h</strong></p>`;
}

function limparCampos() {
  document.getElementById('distancia').value = '';
  document.getElementById('eficiencia').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('velocidadeMin').value = '';
  document.getElementById('velocidadeMax').value = '';
  document.getElementById('resultado').innerHTML = '';
}
  