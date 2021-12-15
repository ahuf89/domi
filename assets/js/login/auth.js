// debugger;

const user = JSON.parse(localStorage.getItem('user'));
viewUser();
// const button_session = document.getElementById('close_session');
// let imageRestaurant = user.restaurant.thumbnail;
// let id_restaurant = document.querySelector('.id_restaurant').value = restaurant;
// document.getElementById('image_restaurant').src = imageRestaurant;

localStorage.setItem('atemptPay', JSON.stringify(false));

function verifySesion() {
    console.log(user);
    if (user === null) {
        localStorage.setItem('atemptPay', JSON.stringify(true));
        alert("Inicia Sesión o Registrate para Comprar");
        document.location.href = 'login.html';
    } else {
        document.location.href = 'pago.html';
    }
}

function logout() {
    localStorage.clear();
    alert("Cerrando Sesión")
    window.open(
        "index.html"
    );
}

function viewUser() {
    if (user !== null) {
        document.getElementById('logout').style.display = 'block';
        document.getElementById('login').style.display = 'none';

    }
    if (user === null) {
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }

}