const parrafo = document.getElementById("warnings")

const form = {
    name: document.querySelector("#txtName"),
    last_name: document.querySelector("#txtLast_name"),
    email: document.querySelector("#txtEmail"),
    address: document.querySelector("#txtAddress"),
    data_birth: document.querySelector("#txtBirthday"),
    password: document.querySelector("#txtPassword"),
    role: document.querySelector("#txtRole"),
    submit: document.querySelector("#btnSaveFriend"),
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
                name: form.name.value,
                last_name: form.last_name.value,
                address: form.address.value,
                data_birth: form.data_birth.value,
                role: form.role.value,
                email: form.email.value,
                password: form.password.value,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            if (data.error) {
                alert(data.error);
            } else {
                // window.open(
                //     "user.html"
                // );
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