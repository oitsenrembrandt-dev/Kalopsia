// Función que abre WhatsApp con mensaje prellenado
function pedirWhatsapp(producto){
  const base = 'https://wa.me/573004278544';
  const texto = producto 
    ? `Hola, me interesa: ${producto} de Kalopsia.` 
    : 'Hola, quiero más información sobre Kalopsia.';
  const url = `${base}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// Funciones para pagos
function pagarNequi(producto){
  const base = 'https://recarga.nequi.com.co/bdigitalpsp/'; 
  const texto = producto 
    ? `Hola, deseo pagar con Nequi el producto: ${producto} de Kalopsia.` 
    : 'Hola, deseo pagar con Nequi en Kalopsia.';
  alert(`Se abrirá Nequi:\n\n
