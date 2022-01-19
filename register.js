console.log("Register");

class User{
    constructor(email, password, first, last, age, address, phone, payment, color) {
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone
        this.payment=payment;
        this.color=color;
    }
}

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need to reset the orginal apparance of the inputs
    //by removing the error class (styles.css)
    //$(`input`).removeClass("error");
    //validations
    if(user.email.length==0){
        //if we got here it means that email is not valid
        valid=false;
        $("#txtEmail").addClass("error");
    }
    if(user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("error");
    }
    if(user.fname.length==0){
        valid=false;
        $("#txtFirst").addClass("error");
    }
    if(user.lname.length==0){
        valid=false;
        $("#txtLast").addClass("error");
    }
    return valid;
}

function registerUser(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#telPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user= new User(email,password,first,last,age,address,phone,payment,color);

    if (isValid(user)==true){
        saveUser(user);//this fn is in the storeManager
    }
}

function clearInputs(){
     $("#txtEmail").val("");
     $("#txtPassword").val("");
     $("#txtFirst").val("");
     $("#txtLast").val("");
     $("#txtAddress").val("");
     $("#telPhone").val("")
     $("#selPayment").val("");
     $("#txtcolor").val(""); 
}

function Init(){
    console.log("Init Function");
    $("#btnSave").click(registerUser);
}
window.onload=Init;