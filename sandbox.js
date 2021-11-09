const input = document.querySelector("#input");
const btnSubmit = document.querySelector("#btnSubmit");
const output = document.querySelector(".output");





btnSubmit.disabled = true;
input.style.border = "1px solid red"




input.addEventListener('input', function () {

    let value = input.value

    if (value.length >= 10) {
        input.style.border = "1px solid green"
        btnSubmit.disabled = false


    } else {

        btnSubmit.disabled = true;
        input.style.border = "1px solid red"
        output.display = "none"

    }
})

let success = "Success: passowrd is strong"
let error = "Error: your passowrd is weak"

function passwordChecker() {

    let value = input.value
    if (value.length >= 10) {
        output.innerText = success

    } else {
        output.innerText = error;
        input.style.border = "1px solid red"

    }
}

btnSubmit.addEventListener('click', passwordChecker)