

let params = getSearchParameters();
let API_Platos = `http://localhost/API-DOMI/v1/product/getbyidrestaurant/${params['restaurant']}`;

if(params['restaurant'] === undefined ) {
    API_Platos = 'http://localhost/API-DOMI/v1/product/all';
}
fetch(API_Platos)
    .then(response => response.json())
    .then(data => mostrarPlatos(data))
    .catch(error => console.log(error))

const mostrarPlatos =  (data) => {
    console.log(data)
    let response = data.data;
    let dataHtml = '';
    if(response !== undefined){

        for (let i = 0; i < response.length; i++) {
            let dataJson =  JSON.stringify(response[i]);
            dataHtml += `
            <div class="col d-flex justify-content-center mb-4">
            <div class="card shadow mb-1  rounded" style="width: 20rem;">
                <h5 class="card-title pt-2 text-center text-dark ">${response[i].name}</h5>
                <img src="${response[i].thumbnail}" class="card-img-top" alt="...">
                <textarea type="text" class="data_comida hide" name="data_comida" value="${dataJson}">${dataJson}</textarea>
                <div class="card-body">
                    <p class="card-text text-black-50 description">${response[i].description}</p>
                    <h5 class=" text-price text-center text-dark"> <span class="precio">$ ${response[i].price}</span></h5>
                    <div class="d-grid gap-2">
                        <button class="button button--flex button_comida">Añadir a Carrito</button>
                    </div>
                </div>
            </div>
        </div>        
            `
        }
    }else{
        dataHtml = `<div class="col d-flex justify-content-center mb-4">
                        <div class="card shadow mb-1  rounded" style="width: 20rem;">
                            <h5 class="card-title pt-2 text-center text-dark ">${data.message} </h5>
                        </div>
                    </div>`;
    }
    document.getElementById('dataPlatos').innerHTML = dataHtml;
    addCard();
}