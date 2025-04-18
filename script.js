document.getElementById("studentform").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const gendervalue = gender ? gender.value : "";
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;


    const tablebody = document.getElementById("studenttable").querySelector("tbody")

    const newrow = document.createElement("tr");
    newrow.innerHTML = `
    <td style="padding: 10px; " >${name} </td> 
    <td style="padding: 10px;">${age}</td>
     <td style="padding: 10px;">${gendervalue}</td>
     <td style="padding: 10px;">${course}</td>
     <td style="padding: 10px;">${email}</td>
     <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;"><button class="delete-btn" style="background-color: red; color:white; padding:5px; border-radius: 5px;  border: none; cursor: pointer; ">Delete</button></td>`;

    newrow.querySelector(".delete-btn").addEventListener("click", function () {
        tablebody.removeChild(newrow);

    });
    tablebody.appendChild(newrow);
    document.getElementById("studentform").reset();

})