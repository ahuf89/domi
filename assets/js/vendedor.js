const API_Platos = ' http://localhost:3000/platos';
const API_Pedidos = ' http://localhost:3000/pedidos';

fetch(API_Platos)
    .then(response => response.json())
    .then(data => mostrarPlatos(data))
    .catch(error => console.log(error))

const mostrarPlatos = (data) => {
    console.log(data)
    let bodyPlatos = ''
    for (let i = 0; i < data.length; i++) {
        bodyPlatos += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].cuantity}</td><td>${data[i].size}</td><td>$${data[i].valor}</td><td>
        <img src="${data[i].photo}" alt="" height="50px">
        </td></tr>`
    }
    document.getElementById('dataPlatos').innerHTML = bodyPlatos
}

fetch(API_Pedidos)
    .then(response => response.json())
    .then(data => mostrarPedidos(data))
    .catch(error => console.log(error))

const mostrarPedidos = (data) => {
    console.log(data)
    let bodyPedidos = ''
    for (let i = 0; i < data.length; i++) {
        bodyPedidos += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].cuantity}</td><td>$${data[i].
        monto}</td><td>${data[i].cliente}</td></tr>`
    }
    document.getElementById('dataPedidos').innerHTML = bodyPedidos
}