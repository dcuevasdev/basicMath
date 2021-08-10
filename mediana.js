function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const lista = [];
let mitadLista;

function agregarNumeros() {
  const inputNumero = document.getElementById("inputNumber");
  const numeroValue = Number(inputNumero.value);

  lista.push(numeroValue);
  mitadLista = parseInt(lista.length / 2);
}

let mediana;

function calcularMediana() {
  lista.sort(function (a, b) {
    return a - b;
  });

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioDosElementos = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);

    mediana = promedioDosElementos;
  } else {
    mediana = lista[mitadLista];
  }
}

function onClickMediana() {
  const resultado = document.getElementById("resultadoMediana");

  calcularMediana();

  resultado.innerHTML =
    "La lista que ingresaste es: " + lista + "<br/> La mediana es: " + mediana;
}
