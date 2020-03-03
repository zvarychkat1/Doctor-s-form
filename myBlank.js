let doctor = document.getElementById('doctor')
let patient = document.getElementById('patient')
let agree = document.getElementById('agree')
let agreeBox = document.getElementById('agreeBox')
let popup = document.getElementById('b-popup')
let comment = document.getElementById("comment")

comment.onclick = function clearText() {
    comment.innerText = ""
}

function send() {
    if (doctor.value == "") { doctor.classList.add("red") } else doctor.classList.remove("red");
    if (patient.value == "") { patient.classList.add("red") } else patient.classList.remove("red");
    if (agree.checked == false) { agreeBox.style.borderColor = "red" } else agreeBox.style.borderColor = "#898989"

    if (doctor.value !== "" && patient.value !== "" && agree.checked == true) {
        showPopup()
        setTimeout(hidePopup, 3000)

    }
}

function showPopup() {
    popup.style.display = "block"
    let chckbox = document.querySelectorAll('.value')
    for (let i of chckbox) {
        i.checked = false
    }
    let txtArea = document.querySelectorAll('.plch')
    for (let j of txtArea) {
        j.value = ""
    }
    document.getElementById("comment").click()
    agreeBox.style.borderColor = "#898989"
}

function hidePopup() {
    popup.style.display = "none"
}