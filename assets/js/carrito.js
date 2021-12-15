function addCard(){

    const Clickbutton = document.querySelectorAll('.button_comida');
    const tbody = document.querySelector('.tbody')
    let carrito = []
    
    
    
    Clickbutton.forEach(btn => {
        btn.addEventListener('click', addToCarritoItem)
    })
}


function mostrarTotal() {
    alert(localStorage.getItem("usuario2"));
}

function addToCarritoItem(e) {
    const button = e.target
    
    const item = button.closest('.card')
    const data = item.querySelector('.data_comida').value;
    console.log(JSON.parse(data));
    const dataComida = JSON.parse(data);

    const newItem = {
        title: dataComida.name,
        precio: dataComida.price,
        img: dataComida.thumbnail,
        cantidad: 1
    }
    console.log(newItem);
    addItemCarrito(newItem)
}


function addItemCarrito(newItem) {

    const alert = document.querySelector('.alert')

    setTimeout(function() {
        alert.classList.add('hide')
    }, 2000)
    alert.classList.remove('hide')

    const InputElemnto = tbody.getElementsByClassName('input__elemento')
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title.trim() === newItem.title.trim()) {
            carrito[i].cantidad++;
            const inputValue = InputElemnto[i]
            inputValue.value++;
            CarritoTotal()
            return null;
        }
    }

    carrito.push(newItem)

    renderCarrito()
}


function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
    
    <th scope="row" clase="color_change">1</th>
            <td class="table__productos color_change">
              <img src=${item.img}  alt="">
              <h6 class="title ">${item.title}</h6>
            </td>
            <td class="table__price color_change "><p>${item.precio}</p></td>
            <td class="table__cantidad color_change ">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
            const precio = Number(item.precio.replace("$", ''))
            Total = Total + precio * item.cantidad
        })
        // localStorage.setItem("email2", "marco@gmail.com");

    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
    localStorage.setItem("pago", Total);
    console.log()
}

function mostrarTotal() {
    alert(localStorage.getItem("usuario2") + "\nCorreo " + localStorage.getItem("email2"));
}

function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }

    const alert = document.querySelector('.remove')

    setTimeout(function() {
        alert.classList.add('remove')
    }, 2000)
    alert.classList.remove('remove')

    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}

function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        renderCarrito()
    }
}



// document.getElementById("crear2").addEventListener("click", crear2);

// function crear2() {
//     localStorage.setItem("usuario2", "marco");
//     localStorage.setItem("email2", "marco@gmail.com");
// }