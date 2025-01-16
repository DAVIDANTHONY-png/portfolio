const goBtn = document.getElementById("sod-upload");
const inputCode = document.getElementById("input")
const sodUploadPage = document.getElementById("SOD-input")
const codeForm = document.getElementsByClassName("upload");

goBtn.addEventListener("click", ()=>{
    if(inputCode.value === "9076423"){
        sodUploadPage.classList.toggle("hidden")
        codeForm.classList.remove("hidden")
        inputCode = "";
    }
    if(inputCode.value === "" || inputCode.value !== "9076423"){
        alert("Wrong or no Upload Code Inserted")
    }
})