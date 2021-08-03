// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del Cìrculo
function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return (diametro * PI).toFixed(3);
}

function areaCirculo(radio) {
  return (radio * radio * PI).toFixed(3);
}

//Interactuar con HTML para el cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("El perímetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("El área del cuadrado es: " + area + " cm^2");
}

//Interactuar con HTML para el triángulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);

  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert("El perímetro del triángulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);

  const inputAltura = document.getElementById("inputAltura");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert("El área del triángulo es: " + area + " cm^2");
}

//Interactuar con HTML para el circulo
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;

  const perimetro = perimetroCirculo(valueRadio);
  alert("El perímetro del círculo es: " + perimetro + " cm");
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;

  const area = areaCirculo(valueRadio);
  alert("El perímetro del círculo es: " + area + " cm^2");
}
