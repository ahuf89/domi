document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    let sCorreo = '';
    let sContrasenna = '';
    let bAccesso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasenna = document.querySelector('#txtContrasenna').value;

    validarCampos();

    bAccesso = validarCredenciales(sCorreo, sContrasenna);
    console.log(bAccesso);

    if (bAccesso == true) {
        ingresar();
    }

    function validarCampos() {
        if (sCorreo.length <= 0) {
            alert('Ingrese correo')
            return
        }
        if (sContrasenna.length <= 0) {
            alert('Ingrese contraseña')
            return
        }
    };

    function ingresar() {
        let rol = sessionStorage.getItem('rolUsuarioActivo')
        switch (rol) {
            case '1':
                window.location.href = '../../../admin.html';
                break;
            case '2':
                window.location.href = '../../../user.html';
                break;
            case '3':
                window.location.href = '../../../vendedor.html';
                break;
            case '4':
                window.location.href = '../../../repartidor.html';
                break;
            default:
                break;
        }
    }


}