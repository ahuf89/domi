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
            console.log(data.data.rol);

            if (data.data.role == '1') {
                window.open(
                    "admin.html"
                );
            } else if (data.data.role == '2') {
                window.open(
                    "vendedor.html"
                );
            } else if (data.data.role == '3') {

                window.open(
                    "user.html"
                );
            }
        })
        .catch((err) => {
            console.log(err);
        });
});