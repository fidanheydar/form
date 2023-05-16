const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPassword = document.getElementById("rePassword");
const tableBody = document.querySelector("tbody");
const registerButton = document.querySelector("#register");
const arr = [];
const emailLoginInput = document.getElementById("emailCheck");
const passwordLoginInput = document.getElementById("passCheck");
const loginBtn = document.getElementById("loginBtn");
const loginInfo = document.querySelector("div")



registerButton.addEventListener("click", () => {

    if (!emailInput.value.trim() || !passwordInput.value.trim() || !rePassword.value.trim() || passwordInput.value.trim() != confirmPassword.value.trim()) {
        alert("Duzgun daxil  edin")
        return
    }
    const user = {
        email: emailInput.value,
        password: passwordInput.value
    }
    arr.push(user)
    const newTrItem = document.createElement("tr");
    newTrItem.innerHTML = `
    <td>${emailInput.value}</td>
    <td>${passwordInput.value}</td>
    `;
    tableBody.append(newTrItem);
    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    newTrItem.append(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newTrItem.append(deleteBtn);
    emailInput.value = "";
    passwordInput.value = "";
    rePassword.value = "";


    deleteBtn.addEventListener("click", () => {
        newTrItem.remove();
        const result = arr.findIndex(
            (item) => {
                return item.email === user.email && item.email === user.password
            }
        );
        arr.splice(result, 1);

    })
})

loginBtn.addEventListener("click", () => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email == emailCheck.value && passCheck.value == arr[i].password) {
            loginInfo.textContent = "Logged in"

            emailCheck.value = '';
            passCheck.value = '';
            return
        }
    }
    loginInfo.textContent = "Not logged in"
})

























 
  



















