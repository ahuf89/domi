const parrafo = document.getElementById("warnings")
const register = document.getElementById("register")


register.addEventListener("submit", (e) => {
    e.preventDefault();
    const save = "http://localhost/API-DOMI/v1/user/save";
    const response = fetch(save, {
            method: 'POST',
            body: new FormData(register)

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