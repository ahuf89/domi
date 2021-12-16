const user = JSON.parse(localStorage.getItem('user'));
console.log('My user', user);

const storage = JSON.parse(localStorage.getItem('carrito'));
console.log('My storage', storage);

const total = JSON.parse(localStorage.getItem('pago'));
console.log('My pago', total);

const parrafo = document.getElementById("warnings")


const formPay = {
    customer_id: user.id,
    address: user.address,
    email: user.email,
    // status: user.status,
    amount: total,
    order_date: Date(),
    restaurant: storage,
    submit: document.querySelector("#btnPagar"),
};
let button = formPay.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const ordSave = "http://localhost/API-DOMI/v1/order/save";

    fetch(ordSave, {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                customer_id: user.id,
                address: user.address,
                email: user.email,
                // status: user.status,
                amount: total,
                order_date: Date.now(),
                restaurant: storage,

            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.data === undefined) {
                alert(data.message);
                return;
            }

            alert("Pago Exitoso");

            // Vaciar carrito
            localStorage.setItem('storage', JSON.stringify(null));
            localStorage.setItem('total', JSON.stringify(null));

            document.location.href = "status-pay.html";

        })
        .catch((err) => {
            console.log(err);
        });
});

// ver lo que pagar
viewTotalPay();

function viewTotalPay() {
    document.getElementById("customer").innerHTML = user.name;
    document.getElementById("address").innerHTML = user.address;
    document.getElementById("email").innerHTML = user.email;

    let datos = document.getElementById('products');
    for (item of storage) {
        datos.innerHTML += `
        <tr>        
            <th class="info-l">
                ${item.title}
            </th>         
            <th class="info-c">
                ${item.cantidad}
            </th>
            <th class="info-r">
            ${item.precio}
        </th>
        </tr>       
        `
    }

    document.getElementById("amount").innerHTML = '$' + total;
}