const parrafo = document.getElementById("warnings")

const form = {
    email: document.querySelector("#txtCorreo"),
    password: document.querySelector("#txtContrasenna"),
    submit: document.querySelector("#btnIngresar"),
    messages: document.getElementById("form-messages"),
};
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:3000/users";

    fetch(login, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.email == form.email.value && data.password == form.password.value) {
                if (data.role == 1) {
                    window.open(
                        "admin.html"
                    );
                } else if (data.role == 2) {
                    window.open(
                        "user.html"
                    );
                } else if (data.role == 3) {
                    window.open(
                        "vendedor.html"
                    );
                }
            } else if (data.error) {
                alert("Usuario o contraseña incorrectos")
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

// const nombre = document.getElementById("name")
// const sCorreo = document.getElementById("txtCorreo")
// const sContrasenna = document.getElementById("#txtContrasenna")
// const form = document.getElementById("form")

// form.addEventListener("submit", e => {
//     e.preventDefault()
//     let warning = ""
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//     parrafo.innerHTML = ""
//        }
//     if (!regexEmail.test(sCorreo.value)) {
//         warning = `El email no es valido <br>`
//         txtCorreo.focus();

//         parrafo.innerHTML = warning
//         return 0
//     }
//     if (sContrasenna.value.length < 8) {
//         warning = `La contraseña muy corta <br>(Minimo 8 caracteres)<br>`
//         txtContrasenna.focus();

//         parrafo.innerHTML = warning
//         return 0
//     }
// });