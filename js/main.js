let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userpasswordInput = document.getElementById("userpassword");
let signUpbtn = document.getElementById("signUpbtn");
let accountExist = document.getElementById("accountExist");
let closebtn = document.getElementById("closebtn");
let fail =document.getElementById("fail");
let sucessmsg =document.getElementById("sucessmsg");
let WelcomeUser = document.getElementById("username");
let users =[];
if (localStorage.getItem("ourlocalstorage")!=null){
    users = JSON.parse(localStorage.getItem("ourlocalstorage"))
}
function signup(){
    validation();   //true
    isExist();     //false
    if( validation()==true&& isExist()== false ){
        let userData={
            name: userNameInput.value ,
            email : userEmailInput.value ,
            password : userpasswordInput.value
        }
        console.log(userData);
        users.push(userData);
        localStorage.setItem("ourlocalstorage" , JSON.stringify(users));
        sucessmsg.classList.replace("d-none","d-flex");
    
    }
    else if (validation()==true && isExist()==true){
        isExist();
        let accountExist =document.getElementById("accountExist");
        accountExist.classList.replace("d-none" , "d-flex")
    }
    else{
        failmsg.classList.replace("d-none","d-flex"); 
        accountExist.classList.replace("d-block", "d-none")
    }
}
function userNameValidation(){                 // alaa ==> true
    let ragex = /^[a-zA-Z]{3,}(\s?)$/;
    let q = 0;
    if(ragex.test(userNameInput.value) == true && userNameInput.value !="" ){
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        nameValidation.classList.replace("d-block","d-none");
        return true;

    }
    else{
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        let nameValidation = document.getElementById("nameValidation");
        nameValidation.classList.replace("d-none","d-block");
        return false;
    }
}
function uesremailvalidation(){                  //alaa@gmail.com ==>true
    let emailValidation = document.getElementById("emailValidation");
    let ragex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(ragex.test(userEmailInput.value)== true && userEmailInput.value !="" ){
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        emailValidation.classList.replace("d-block" , "d-none");
        return true;
    }
    else{
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        emailValidation.classList.replace("d-none","d-block");
        return false;
    }
}
function userPassValidation(){            //Alaa12==>true
    let ragex = /^[A-Z]{1}[a-z0-9]{4,}(\W?\s?)$/;
    if(ragex.test(userpasswordInput.value) == true && userpasswordInput.value !="" ){
        userpasswordInput.classList.add("is-valid");
        userpasswordInput.classList.remove("is-invalid")
        passValidation.classList.replace("d-block" , "d-none");
        return true;
    }
    else{
        userpasswordInput.classList.add("is-invalid");
        userpasswordInput.classList.remove("is-valid");
        let passValidation = document.getElementById("passValidation");
        passValidation.classList.replace("d-none","d-block");
        return false;
    }
}
function validation(){
    userNameValidation();  //true
    userPassValidation();  //true
    uesremailvalidation();  //true
    let q =0 ;
    if(userNameValidation() == true && userPassValidation() == true && uesremailvalidation()==true){
        q++;
        console.log(q);
        return true
    }
    else{
        console.log(q);
        return false
    }

}
function isExist(){
    let q =0 ;
    for( let i=0 ; i<users.length ; i++){
        if( users[i].name == userNameInput.value || users[i].email == userEmailInput.value){
            accountExist.classList.replace("d-none" , "d-block");
            q++;
            console.log(q);
            return true ;
        }
        else{
            console.log(q);
            return false ;
        }
    }
}
function closefail(){
    fail.classList.remove("d-flex");
    fail.classList.add("d-none");
}






































function login()
{
    let loginEmail = document.getElementById("userEmail");
    let loginPassword = document.getElementById("userpassword");
    let loginBtn = document.getElementById("loginbtn");
    let incorrect = document.getElementById("incorrect");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].email.toLowerCase() == loginEmail.value.toLowerCase() && users[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            let name = users[i].name ;
            localStorage.setItem('Username', name);
            incorrect.classList.replace("d-block", "d-none");
            location.href ='welcome.html';
            return true ;
        }
    }
    incorrect.classList.replace("d-none", "d-block");
    fillMsg.classList.replace("d-block", "d-none");
}
function welcomePage(){
    document.getElementById("username").innerHTML= localStorage.getItem("Username");
}
function logout(){
    // document.getElementById("logoutbtn")
    localStorage.removeItem("Username")
}