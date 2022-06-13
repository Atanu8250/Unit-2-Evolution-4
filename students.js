// All the Code for All Students Page Goes Here
let filter = document.querySelector("#filter");
filter.addEventListener("change", filterData);

function filterData() {
    let selected;
    if (filter.value == "" || filter.value == "all") {
        displayTable(admission);
    } else {
        let filtered = admission.filter(function (elem) {
            return filter.value == elem.course;
        })

        displayTable(filtered)
    }
}


let admission = JSON.parse(localStorage.getItem("admission")) || [];

displayTable(admission);

function displayTable(admission) {
    document.querySelector("tbody").innerHTML = "";
    admission.forEach(function (elem, index) {

        let tr = document.createElement("tr");
        tr.style.textAlign = "center";

        let td1 = document.createElement("td");
        td1.innerText = elem.name;

        let td2 = document.createElement("td");
        td2.innerText = elem.email;

        let td3 = document.createElement("td");
        td3.innerText = elem.course;

        let td4 = document.createElement("td");
        td4.innerText = elem.gender;

        let td5 = document.createElement("td");
        td5.innerText = elem.phone;

        let td6 = document.createElement("td");
        td6.innerText = "Accept";
        td6.style.cursor = "pointer";
        td6.style.backgroundColor = "green";
        td6.style.color = "white";
        td6.addEventListener("click", function () {
            selected(elem, index);
        })

        let td7 = document.createElement("td");
        td7.innerText = "Reject";
        td7.style.cursor = "pointer";
        td7.style.backgroundColor = "red";
        td7.style.color = "white";
        td7.addEventListener("click", function () {
            rejected(elem, index);
        })


        tr.append(td1, td2, td3, td4, td5, td6, td7)
        document.querySelector("tbody").append(tr);
    })
}

let admissionAcceptedArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];

function selected(element, index) {
    let admissionAcceptedObj = {
        name: element.name,
        email: element.email,
        course: element.course,
        gender: element.gender,
        phone: element.phone
    }

    admissionAcceptedArr.push(admissionAcceptedObj);

    localStorage.setItem("admission-accepted", JSON.stringify(admissionAcceptedArr))

    admission.splice(index, 1);
    displayTable(admission);
    localStorage.setItem("admission", JSON.stringify(admission));
}

let admissionRejectedArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

function rejected(element, index) {
    let admissionRejectedObj = {
        name: element.name,
        email: element.email,
        course: element.course,
        gender: element.gender,
        phone: element.phone
    }

    admissionRejectedArr.push(admissionRejectedObj);

    localStorage.setItem("admission-rejected", JSON.stringify(admissionRejectedArr))

    admission.splice(index, 1);
    displayTable(admission);
    localStorage.setItem("admission", JSON.stringify(admission));
}