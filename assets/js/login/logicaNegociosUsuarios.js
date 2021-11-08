/*
Roles
1: admin
2: cliente
3: vendedor
4: repartidor
*/

function obtenerListaUsuarios() {
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios = [
            { id: 0, nombre: 'pablo', email: 'pablo@gmail.com', password: '123456', rol: '2' },
            { id: 1, nombre: 'carlos', email: 'carlos@gmail.com', password: '123456', rol: '1' },
            { id: 2, nombre: 'juan', email: 'juan@gmail.com', password: '123456', rol: '2' },
            { id: 3, nombre: 'camilo', email: 'camilo@gmail.com', password: '123456', rol: '2' },
            { id: 4, nombre: 'maria', email: 'maria@gmail.com', password: '123456', rol: '3' },
            { id: 5, nombre: 'juana', email: 'juana@gmail.com', password: '123456', rol: '3' },
            { id: 6, nombre: 'pedro', email: 'pedro@gmail.com', password: '123456', rol: '4' },
            { id: 7, nombre: 'camila', email: 'camila@gmail.com', password: '123456', rol: '4' }
        ];
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo, pContrasenna) {
    let listaUsuarios = obtenerListaUsuarios();
    let bAccesso = false;
    let noContraseña = false;
    let noCorreo = false;


    for (let i = 0; i < listaUsuarios.length; i++) {

        if (pCorreo == listaUsuarios[i].email && pContrasenna != listaUsuarios[i].password) {
            noContraseña = true;
        } else { noContraseña = false; break }
    }
    if (noContraseña == true) {
        alert('Contraseña incorrecta');
        // localStorage.setItem('numero', 1);
        bAccesso = false;
        return
    }

    for (let i = 0; i < listaUsuarios.length; i++) {

        if (pCorreo != listaUsuarios[i].email) {
            noCorreo = true

        } else { noCorreo = false; break }
    }
    if (noContraseña == true) {
        alert('Correo incorrecto');
        // localStorage.setItem('numero', 2);
        bAccesso = false;
        return
    }

    for (let i = 0; i < listaUsuarios.length; i++) {
        // console.log(listaUsuarios[i])
        if (pCorreo == listaUsuarios[i].email && pContrasenna == listaUsuarios[i].password) {
            bAccesso = true;
            // localStorage.setItem('numero', 3);
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i].nombre + ' ' + listaUsuarios[i].email);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i].rol);
            break
        }
    }

    return bAccesso
}