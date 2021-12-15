const parrafo = document.getElementById("warnings")

const form = {
    email: document.querySelector("#txtCorreo"),
    password: document.querySelector("#txtContrasenna"),
    submit: document.querySelector("#btnIngresar"),
    messages: document.getElementById("form-messages"),
};
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost/API-DOMI/v1/user/login";

    fetch(login, {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.data === undefined) {
                alert(data.message);
                return;
            }
            localStorage.setItem('user', JSON.stringify(data.data));
            if (data.data.role == '1') {
                document.location.href = "admin.html"

            } else if (data.data.role == '2') {
                document.location.href = "vendedor.html"

            } else if (data.data.role == '3') {
                verifyRout();
                // document.location.href = "user.html"
            }
        })
        .catch((err) => {
            console.log(err);
        });
});


const atemptPay = JSON.parse(localStorage.getItem('atemptPay'));

function verifyRout() {
    console.log(atemptPay);
    if (atemptPay == true) {
        alert("Ahora si puedes Comprar");
        document.location.href = 'pago.html';
    } else {
        document.location.href = 'comida.html';
    }
}