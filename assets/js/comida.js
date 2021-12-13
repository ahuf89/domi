const API_Platos = ' http://localhost:3000/platos';

fetch(API_Platos)
    .then(response => response.json())
    .then(data => mostrarPlatos(data))
    .catch(error => console.log(error))

const mostrarPlatos = (data) => {
    console.log(data)
    let divPlatos = ''
    for (let i = 0; i < data.length; i++) {
        divPlatos += `
        <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1  rounded" style="width: 20rem;">
            <h5 class="card-title pt-2 text-center text-dark ">Ajiaco</h5>
            <img src="${data[i].photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text text-black-50 description">${data[i].description}</p>
                <h5 class=" text-price text-center text-dark"> <span class="precio">$ ${data[i].valor}</span></h5>
                <div class="d-grid gap-2">
                    <button class="button button--flex">Añadir a Carrito</button>
                </div>
            </div>
        </div>
    </div>        
        `
    }
    document.getElementById('dataPlatos').innerHTML = divPlatos
}