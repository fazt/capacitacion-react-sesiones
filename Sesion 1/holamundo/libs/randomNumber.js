function generarNumeroAleatorio() {
  let randomNumber = Math.random() * 100
  return randomNumber.toFixed(2)
}

export default generarNumeroAleatorio