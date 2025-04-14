window.addEventListener("load", solve);

function solve() {
    let addButton = document.getElementById("add_btn");
    let firstNameInput = document.getElementById("first_name");
    let lastNameInput = document.getElementById("last_name");
    let phoneInput = document.getElementById("phone");
    let pendingContactList = document.getElementById("pending_contact_list");
    let verifiedContactList = document.getElementById("contact_list");

    let editingContact = null;

    addButton.addEventListener("click", function (event) {
        event.preventDefault();

        let firstName = firstNameInput.value.trim();
        let lastName = lastNameInput.value.trim();
        let phone = phoneInput.value.trim();

        if (firstName && lastName && phone) {
            let contactItem = document.createElement("li");
            contactItem.classList.add("contact");

            let namesSpan = document.createElement("span");
            namesSpan.classList.add("names");
            namesSpan.textContent = `${firstName} ${lastName}`;

            let phoneSpan = document.createElement("span");
            phoneSpan.classList.add("phone_number");
            phoneSpan.textContent = phone;

            let editButton = document.createElement("button");
            editButton.classList.add("edit_btn");
            editButton.textContent = "Edit";

            let verifyButton = document.createElement("button");
            verifyButton.classList.add("verify_btn");
            verifyButton.textContent = "Verify";

            contactItem.appendChild(namesSpan);
            contactItem.appendChild(phoneSpan);
            contactItem.appendChild(editButton);
            contactItem.appendChild(verifyButton);

            pendingContactList.appendChild(contactItem);

            firstNameInput.value = '';
            lastNameInput.value = '';
            phoneInput.value = '';

            if (editingContact) {
                editingContact = null;
            }
        }
    });

    pendingContactList.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit_btn")) {
            let contactItem = event.target.parentElement;

            let names = contactItem.querySelector(".names").textContent;
            let phone = contactItem.querySelector(".phone_number").textContent;

            let [firstName, lastName] = names.split(' ');

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            phoneInput.value = phone;

            pendingContactList.removeChild(contactItem);

            editingContact = contactItem;
        }
    });

    pendingContactList.addEventListener("click", function (event) {
        if (event.target.classList.contains("verify_btn")) {
            let contactItem = event.target.parentElement;

            contactItem.querySelector(".edit_btn").remove();
            contactItem.querySelector(".verify_btn").remove();

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete_btn");
            deleteButton.textContent = "Delete";

            contactItem.appendChild(deleteButton);

            pendingContactList.removeChild(contactItem);

            verifiedContactList.appendChild(contactItem);

            contactItem.classList.add("verified_contact");
        }
    });

    verifiedContactList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete_btn")) {
            let contactItem = event.target.parentElement;

            verifiedContactList.removeChild(contactItem);
        }
    });
}
