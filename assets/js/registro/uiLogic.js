document.querySelector('#btnSaveFriend').addEventListener('click', validarCampos);


function validarCampos() {
    let sId = friendList.length,
        sName = document.querySelector('#txtName').value,
        sLastName = document.querySelector('#txtLastName').value,
        sBirthday = document.querySelector('#txtBirthday').value,
        sEmail = document.querySelector('#txtEmail').value;
    sPassword = document.querySelector('#txtPassword').value;
    sRol2 = document.querySelector('#txtRol2 option:checked').value;
    console.log('rol', sRol2.value);
    console.log('rol', sRol2.selectedIndex);

    if (sName.length == 0) {
        alert('Por favor digite el nombre')
            // document.registro.nom.focus()

        return 0
    }
    if (sLastName.length == 0) {
        alert('Por favor digite el apellido')
            // document.registro.nom.focus()

        return 0
    }
    if (sEmail.length == 0) {
        alert('Por favor digite el correo')
            // document.registro.nom.focus()

        return 0
    }
    if (sRol2.value == 0) {
        alert('Por favor seleccione una opcion')
            // document.registro.nom.focus()
        return 0
    }

    // if (sPassword.length == 0) {
    //     alert('Por favor digite contraseña')
    //         // document.registro.nom.focus()

    //     return 0
    // }
    if (document.f1.rol.selectedIndex == 0) {
        alert('Por favor selecione una select')
            // document.registro.nom.focus()

        return 0
    }

    saveFriend();
    console.log('registrado')
    alert('Sus datos se han registrado')
}



drawFriendsTable();

function saveFriend() {
    let sId = friendList.length,
        sName = document.querySelector('#txtName').value,
        sLastName = document.querySelector('#txtLastName').value,
        sBirthday = document.querySelector('#txtBirthday').value,
        sEmail = document.querySelector('#txtEmail').value;
    sPassword = document.querySelector('#txtPassword').value;
    sRol2 = document.querySelector('#txtRol2 option:checked').value;

    addFriendToSystem(sId, sName, sLastName, sBirthday, sEmail, sPassword, sRol2);
    drawFriendsTable();
}

function drawFriendsTable() {
    let list = getFriendList(),
        tbody = document.querySelector('#friendsTable tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            sLastName = row.insertCell(2),
            birthdayCell = row.insertCell(3),
            emailCell = row.insertCell(4);
        passwordCell = row.insertCell(5);

        rol2Cell = row.insertCell(6);
        selectCell = row.insertCell(7);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].name;
        sLastName.innerHTML = list[i].lastName;
        birthdayCell.innerHTML = list[i].birth;
        emailCell.innerHTML = list[i].email;
        passwordCell.innerHTML = list[i].password;
        rol2Cell.innerHTML = list[i].rol2;


        let inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;
        inputSelect.name = "rntFriend"
        selectCell.appendChild(inputSelect);

        tbody.appendChild(row);
    }
}

function addPet() {
    let sName = document.querySelector('#txtPedName').value,
        sType = document.querySelector('#txtAnimal').value,
        sGender = document.querySelector('#txtGender').value,
        sOwnerId = document.querySelector('#friendsTable tbody input[type=radio]:checked').value;

    let friendObj = findFriend(sOwnerId);

    addPetToFriend(friendObj, sName, sType, sGender);
    drawPetsTable();
}