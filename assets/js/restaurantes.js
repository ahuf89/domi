const API_Resturants = ' http://localhost:3000/restaurants';


fetch(API_Resturants)
    .then(response => response.json())
    .then(data => mostrarRestaurantes(data))
    .catch(error => console.log(error))

const mostrarRestaurantes = (data) => {
    console.log(data)
    let bodyRestaurants = ''
    for (let i = 0; i < data.length; i++) {
        bodyRestaurants += `
        <div class="services__content" style="background-image: url('${data[i].photo}');">
        <div class="title-restaurant">
            <h3 class="services__title">${data[i].name}</h3>           
        </div>
        </div>
        `
    }
    document.getElementById('dataRestaurants').innerHTML = bodyRestaurants
}