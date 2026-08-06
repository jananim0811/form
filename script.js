const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = email;

    let actionCell = row.insertCell(5);

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";

    deleteButton.className = "delete-btn";

    deleteButton.onclick = function(){
        row.remove();
    };

    actionCell.appendChild(deleteButton);

    form.reset();
});