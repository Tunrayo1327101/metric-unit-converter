let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

buttonEl.addEventListener("click", function() {
  let meter = (inputEl.value * 0.3048).toFixed(3)
  let feet = (inputEl.value * 3.280839895).toFixed(3)
  let liters = (inputEl.value * 3.78541).toFixed(3)
  let gallons = (inputEl.value * 0.264172).toFixed(3)
  let kilos = (inputEl.value * 0.453592).toFixed(3)
  let pounds = (inputEl.value * 2.20462).toFixed(3)

  lengthEl.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meter`


  volumeEl.textContent = `${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters`

  massEl.textContent = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilos} kilos`
  console.log(lengthEL.innerHTML)
})