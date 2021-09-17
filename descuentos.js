function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = Number(inputPrice.value);

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = Number(inputDiscount.value);

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}
