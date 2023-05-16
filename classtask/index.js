const nameInput=document.getElementById("nameinput");
const surnameInput=document.getElementById("surnameinput");
const jobInput=document.getElementById("jobinput");
const saveBtn=document.getElementById("savebtn");
const tableBody = document.querySelector(".tbody");
const searchInput=document.querySelector("#searchinput")
const arr=[];

saveBtn.addEventListener("click", () =>{
    if (!nameInput.value.trim() || !surnameInput.value.trim() || !jobInput.value.trim()) {
        alert("Please fill the blanks !")
        return;
    }

    const user = {
        name: nameInput.value,
        surname: surnameInput.value,
        job: jobInput.value
    }
    arr.push(user)
    const newElement=document.createElement("tr");
    newElement.innerHTML=`
    <th class="name">${nameInput.value}</th>
    <th class="surname">${surnameInput.value}</th>
    <th class="job">${jobInput.value}</th>
    `;
    tableBody.append(newElement);
    resetInputs();

    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    newElement.append(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newElement.append(deleteBtn);

    editBtn.style.cursor="pointer";
    deleteBtn.style.cursor="pointer";

    deleteBtn.addEventListener("click", () => {
        newElement.remove();
        confirm("Are u sure to delete?");
        const result = arr.findIndex(
            (item) => {
                return item.name === user.name && item.surname === user.surname && item.job === user.job
            }
        );
        arr.splice(result, 1);
    })
    editBtn.addEventListener("click", ()=>{
        nameInput.value=user.name;
        surnameInput.value=user.surname;
        jobInput.value=user.job;
    })


   
})

function resetInputs(){
    nameInput.value='';
    surnameInput.value='';
    jobInput.value='';
}
searchInput.addEventListener("keyup",(e)=>{
    const names = document.querySelectorAll(".name");
    const surnames = document.querySelectorAll(".surname");
    const jobs=document.querySelectorAll(".job")
    // console.log(e.target.value);
    
    // console.log(names);
    for (let i = 0; i < names.length; i++) {
        if(names[i].textContent.includes(e.target.value)||surnames[i].textContent.includes(e.target.value) || jobs[i].textContent.includes(e.target.value)){
            names[i].parentElement.style.display="flex";
        }
        else{
            names[i].parentElement.style.display="none";
        }
    }
})