//  name=firstName, lastName, regEmail, regPword, conPword


let form = document.forms["register"]

// targeting the submit btn to prevent the page refresh
document.getElementById("submit").addEventListener("click",
function(event){
    event.preventDefault()
    console.log(form.fname.value);
    let fname = form.firstName.value
    if(fname ){
        alert("first name required and must be atleast 2 characters!")
    } 

})