// *****************signup page*************

var memberName= document.querySelector("#name");
var memberEmail= document.querySelector("#Email");
var memberPass= document.querySelector("#pass");
var validateName=  document.querySelector('#validateName');
var validateEmail=  document.querySelector('#validateEmail');
var validatePass=  document.querySelector('#validatePass');
var required=  document.querySelector('#required');
var signup = document.querySelector('#signup');

var memberArr=[];
if(localStorage.getItem('member')!=null){
memberArr =  JSON.parse(localStorage.getItem('member'));
}



////////validation signup part

if(signup !=null){
    signup.addEventListener( 'click' , function() {

    if(memberName.value!==""&& memberEmail.value!=="" && memberPass.value!==""){
        required.classList.replace("d-block","d-none");

        if (validateNameMember()==true) {
            validateName.classList.replace("d-block","d-none");

                if(validateEmail2()==true){
                    validateEmail.classList.replace("d-block","d-none");

                    if(validatePassMember()==true){
                        validatePass.classList.replace("d-block","d-none");
                        member= {
                        name: memberName.value,
                        email: memberEmail.value ,
                        pass: memberPass.value
                        }
                        memberArr.push(member);
                        localStorage.setItem("member" , JSON.stringify(memberArr));
                        alert('congratulations, now you have an account go to Login page.');
                        // to go Login page auto
                        location.replace("index.html")
                    }
                    else{validatePass.classList.replace("d-none","d-block");}
                }
                else{validateEmail.classList.replace("d-none","d-block");}
        }
        else{validateName.classList.replace("d-none","d-block");}
    }
    else{ required.classList.replace("d-none","d-block");}
})


memberName.addEventListener('keyup',function(){
    if (validateNameMember()==true) {
        validateName.classList.replace("d-block","d-none");
    }
    else{validateName.classList.replace("d-none","d-block");}
})

memberEmail.addEventListener('keyup',function(){
    if(validateEmail2()==true){
        validateEmail.classList.replace("d-block","d-none");
    }
    else{validateEmail.classList.replace("d-none","d-block");}
})
memberPass.addEventListener('keyup',function(){
    if(validatePassMember()==true){
        validatePass.classList.replace("d-block","d-none");
    }
    else{validatePass.classList.replace("d-none","d-block");}
})

//validation reg part
function validateNameMember(){
    var reg=/^[a-zA-Z\s]{3,20}$/;
    return reg.test(memberName.value);
}
function validatePassMember(){
    var regp=/^[\w]{5,15}$/;
    return regp.test(memberPass.value);
}

function validateEmail2(){
    var val=true;
    for(var i=0; i<memberArr.length;i++){
        if(memberEmail.value==memberArr[i].email){
            val = false;
        }
    }
    return val;
}
}


// *****************Login page*************

var Login = document.getElementById('Login');
var LoginEmail = document.getElementById('LoginEmail');
var LoginPass = document.getElementById('LoginPass');
var incorrect = document.getElementById('incorrect');
var NameOfMember=document.getElementById('NameOfMember');

if(Login !=null ){
    
    Login.addEventListener('click', function(){
        

    var found=false;
    for(var i= 0 ; i<memberArr.length;i++){
        if(LoginEmail.value==memberArr[i].email && LoginPass.value==memberArr[i].pass){
        found=true;
        localStorage.setItem("name" , JSON.stringify(memberArr[i].name));
        }
    }

    if(LoginEmail.value!=="" && LoginPass.value!==""){
        requiredLogin.classList.replace("d-block","d-none");
        if(found==true){
            incorrect.classList.replace("d-block","d-none");
            location.replace("displayPage.html");
        }
        else{incorrect.classList.replace("d-none","d-block");}
    }
    else{ requiredLogin.classList.replace("d-none","d-block");
    incorrect.classList.replace("d-block","d-none");
}
    });
}


if(NameOfMember!=null){
    NameOfMember.innerHTML=  `welcome ${localStorage.getItem('name')}`  ;
}
