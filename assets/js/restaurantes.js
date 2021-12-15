const API_Resturants = ' http://localhost/API-DOMI/v1/restaurant/all/';


fetch(API_Resturants)
    .then(response => response.json())
    .then(data => mostrarRestaurantes(data))
    .catch(error => console.log(error))

const mostrarRestaurantes = (data) => {
    console.log(data)
    let dataResponse = data.data;
    let bodyRestaurants = ''
    for (let i = 0; i < dataResponse.length; i++) {
        console.log(dataResponse[i].photo);
        bodyRestaurants += `
        <div class="services__content" style="background-image: url('${dataResponse[i].thumbnail}');">
        <div class="title-restaurant">
            <h3 class="services__title">${dataResponse[i].name}</h3> 
            <a href="comida.html?restaurant=${dataResponse[i].id}">
                <span class="button button--flex">
                    Visitar
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>
            </a>          
        </div>
        </div>
        `;
    }
    document.getElementById('dataRestaurants').innerHTML = bodyRestaurants
}