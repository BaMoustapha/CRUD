let selectedRow = null;

var test = document.querySelector("#fiName")

// Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout (() => document.querySelector(".alert").remove(), 3000);

}

// Clear ALL Fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#job").value = "";

}

// Add Data

document.querySelector("#employee-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const job = document.querySelector("#job").value;

    // validate
    if(firstName == "" || lastName == "" || email == "" || job == ""){
        showAlert("Please fill in all fields" , "danger");
    }
    else {
        if(selectedRow == null){
            // let list = document.querySelector(".employee-list");
            // let row = document.createElement("tr");

            
            const tbody = document.querySelector("tbody")
            tbody.innerHTML += 
            `<tr> 
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${job}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            </tr>`
        
            selectedRow = null;
            showAlert("Employee Added", "success");
        }
        else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = email;
            selectedRow.children[3].textContent = job;
            selectedRow = null;
            showAlert("Employee Info Edited", "info");
        }

        clearFields();
    }

});

// Edit Data
document.querySelector(".employee-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#email").value = selectedRow.children[2].textContent;
        document.querySelector("#job").value = selectedRow.children[3].textContent;
    }
}
);


// Delete Data
document.querySelector(".employee-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Employee Data Deleted", "danger");
    }
}
);



