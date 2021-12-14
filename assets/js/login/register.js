const parrafo = document.getElementById("warnings")
const register = document.getElementById("register")


register.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = {
        name: document.querySelector("#txtName").value,
        last_name: document.querySelector("#txtLast_name").value,
        celular: document.querySelector("#txtCelular").value,
        telefono: document.querySelector("#txtCelular").value,
        email: document.querySelector("#txtEmail").value,
        address: document.querySelector("#txtAddress").value,
        data_birth: document.querySelector("#txtBirthday").value,
        photo: document.querySelector("#txtPhoto").value,
        password: document.querySelector("#txtPassword").value,
        role: document.querySelector("#txtRole").value,
        submit: document.querySelector("#btnSaveFriend").value,
        messages: document.getElementById("form-messages")
    };
    console.log(form.last_name)
    const save = "http://localhost/API-DOMI/v1/user/save";

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('last_name', form.last_name);
    formData.append('telephone', form.last_name);
    formData.append('cell_phone', form.last_name);
    formData.append('email', form.email);
    formData.append('address', form.address);
    formData.append('date_birth', form.data_birth);
    formData.append('photo', form.photo);
    formData.append('role', form.role);
    formData.append('password', form.password);

    console.log(formData)


    const response = fetch(save, {
            method: 'POST',
            body: formData

        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                // window.open(
                //     "user.html"
                // );
            }
        })
        .catch((err) => {
            console.log(err);
        });
});