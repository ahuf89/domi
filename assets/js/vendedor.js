const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

if (user === null) {
    alert("Inicia Sesión o Registrate")
    document.location.href = 'login.html';
}

document.getElementById('image_profile').style.backgroundImage = `url('${user.photo}')`;

const formProduct = document.getElementById('formProduct');
const button_session = document.getElementById('close_session');
console.log(user);
let restaurant = user.restaurant.id;
let imageRestaurant = user.restaurant.thumbnail;



let id_restaurant = document.querySelector('.id_restaurant').value = restaurant;
document.getElementById('image_restaurant').src = imageRestaurant;
let API_Platos = `http://localhost/API-DOMI/v1/product/getbyidrestaurant/${restaurant}`;

fetch(API_Platos)
    .then(response => response.json())
    .then(data => mostrarPlatos(data))
    .catch(error => console.log(error))

const mostrarPlatos = (data) => {
    response = data.data;
    let bodyPlatos = ''
    for (let i = 0; i < response.length; i++) {
        bodyPlatos += `<tr><td>${response[i].id}</td><td>${response[i].name}</td><td>${response[i].stock}</td><td>$${response[i].price}</td><td>
        <img src="${response[i].thumbnail}" alt="" height="50px">
        </td></tr>`
    }
    document.getElementById('dataPlatos').innerHTML = bodyPlatos
}

formProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    const save = "http://localhost/API-DOMI/v1/product/save";
    const response = fetch(save, {
            method: 'POST',
            body: new FormData(formProduct)

        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                location.reload();
            }
        })
        .catch((err) => {
            console.log(err);
        });

})



button_session.addEventListener('click', function() {
    localStorage.clear();
    window.open(
        "index.html"
    );
})