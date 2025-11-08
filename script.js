// === ELEMENTOS ===
const carRed = document.getElementById("red")
const carWhite = document.getElementById("white")
const btnRed = document.getElementById("vermelho")
const btnWhite = document.getElementById("branco")
const result = document.getElementById("result")
const resetBtn = document.getElementById("resetar")
const acelerarBtn = document.getElementById("acelerar")
const desacelerarBtn = document.getElementById("desacelerar")
const btns = document.querySelectorAll(".btn")
const engine = document.getElementById("engine")

// === ESTADO POR CARRO ===
const estado = {
  branco: { profundidade: 0 },
  vermelho: { profundidade: 0 }
}

// === SELECIONAR CARRO ===
function selecionarCarro(cor) {
  carroSelecionado = cor
  result.textContent = cor
  document.body.style.backgroundColor = cor === "Branco" ? "#f0f0f0" : "#ff3b3b"
  document.body.style.color = "black"

  btns.forEach(btn => btn.style.display = "inline-block")
  engine.pause()
}

// === RESETAR TUDO ===
resetBtn.addEventListener("click", () => {
  carroSelecionado = null
  result.textContent = "?"
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  btns.forEach(btn => btn.style.display = "none")

  estado.branco.profundidade = 0
  estado.vermelho.profundidade = 0
  resetarCarros()
  engine.pause()
})

// === RESETAR POSIÇÃO DOS CARROS ===
function resetarCarros() {
  carWhite.style.transform = "translateX(0) translateY(0) scale(1)"
  carRed.style.transform = "translateX(0) translateY(0) scale(1)"
}

// === MOVIMENTO DO CARRO BRANCO ===
function moverBranco() {
  const p = estado.branco.profundidade
  const scale = 1 - (p / 200)
  const y = -p * 0.7
  const x = p * 0.20
  carWhite.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`
}

// === MOVIMENTO DO CARRO VERMELHO ===
function moverVermelho() {
  const p = estado.vermelho.profundidade
  const scale = 1 - (p / 200)
  const y = -p * 0.7
  const x = p * 0.-20
  carRed.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`
}

// === ACELERAR ===
acelerarBtn.addEventListener("click", () => {
  if (!carroSelecionado) return

  if (carroSelecionado === "Branco") {
    estado.branco.profundidade = Math.min(100, estado.branco.profundidade + 12)
    moverBranco()
  } else {
    estado.vermelho.profundidade = Math.min(100, estado.vermelho.profundidade + 12)
    moverVermelho()
  }
  engine.play().catch(() => {})
})

// === DESACELERAR ===
desacelerarBtn.addEventListener("click", () => {
  if (!carroSelecionado) return

  if (carroSelecionado === "Branco") {
    estado.branco.profundidade = Math.max(0, estado.branco.profundidade - 10)
    moverBranco()
  } else {
    estado.vermelho.profundidade = Math.max(0, estado.vermelho.profundidade - 10)
    moverVermelho()
  }

  if ((carroSelecionado === "Branco" && estado.branco.profundidade === 0) ||
      (carroSelecionado === "Vermelho" && estado.vermelho.profundidade === 0)) {
    engine.pause()
  }
})

// === EVENTOS DE SELEÇÃO ===
btnWhite.addEventListener("click", () => selecionarCarro("Branco"))
btnRed.addEventListener("click", () => selecionarCarro("Vermelho"))
carWhite.addEventListener("click", () => selecionarCarro("Branco"))
carRed.addEventListener("click", () => selecionarCarro("Vermelho"))

// === TECLADO ===
document.addEventListener("keydown", e => {
  if (!carroSelecionado) return
  if (e.key === "ArrowUp") acelerarBtn.click()
  if (e.key === "ArrowDown") desacelerarBtn.click()
})

// === INICIAR ===
resetarCarros()