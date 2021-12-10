// const nombre = document.getElementById("name")
const sCorreo = document.getElementById("txtCorreo")
const sContrasenna = document.getElementById("#txtContrasenna")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

function submitLogin() {
    let form = document.forms["login"];
    let fd = new FormData(form);
    let data = {};
    for (let [key, prop] of fd) {
        data[key] = prop;
    }
    VALUE = JSON.stringify(data, null, 2);
    console.log(VALUE);


    form.addEventListener("submit", e => {
        e.preventDefault()
        let warning = ""
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""
            //     if (nombre.value.length < 6) {
            //         warning += `El nombre muy corto <br>
            //          (Minimo 5 caracteres)<br>`
            //         nombre.focus();

        //     parrafo.innerHTML = warning
        //     return 0
        // }
        if (!regexEmail.test(sCorreo.value)) {
            warning = `El email no es valido <br>`
            txtCorreo.focus();

            parrafo.innerHTML = warning
            return 0
        }
        if (sContrasenna.value.length < 8) {
            warning = `La contraseña muy corta <br>(Minimo 8 caracteres)<br>`
            txtContrasenna.focus();

            parrafo.innerHTML = warning
            return 0
        }
    });