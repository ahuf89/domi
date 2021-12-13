const API_Resturants = ' http://localhost:3000/restaurants';
const API_Users = ' http://localhost:3000/users';

fetch(API_Resturants)
    .then(response => response.json())
    .then(data => mostrarRestaurantes(data))
    .catch(error => console.log(error))

const mostrarRestaurantes = (data) => {
    console.log(data)
    let bodyRestaurants = ''
    for (let i = 0; i < data.length; i++) {
        bodyRestaurants += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].telephone}</td><td>${data[i].address}</td><td>${data[i].email}</td><td>
        <img src="${data[i].photo}" alt="" height="50px">
        </td></tr>`
    }
    document.getElementById('dataRestaurants').innerHTML = bodyRestaurants
}

fetch(API_Users)
    .then(response => response.json())
    .then(data => mostrarUsers(data))
    .catch(error => console.log(error))

const mostrarUsers = (data) => {
    console.log(data)
    let bodyUsers = ''
    for (let i = 0; i < data.length; i++) {
        bodyUsers += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].last_name}</td><td>${data[i].email}</td><td>${data[i].telephone}</td><td>${data[i].address}</td><td>${data[i].role}</td><td>
        <img src="${data[i].photo}" alt="" height="50px">
        </td></tr>`
    }
    document.getElementById('dataUsers').innerHTML = bodyUsers
}