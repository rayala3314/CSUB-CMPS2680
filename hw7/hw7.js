var formInput = document.getElementsByTagName("input");
var checkbox = document.getElementsByName("topics");
var content = document.getElementsByName("emailSignup");
function validateForm(){
    var regex = /^([a-zA-Z])/;
    var regex1 =  /^([a-z0-9-])+\@csub.edu$/;    
    
    if(!regex.test(formInput[1].value)){
        console.log("First name is invalid");

    
        if(!regex1.test(formInput[1].value)){
            console.log("Email is empty");

        
            if(!formInput.checked){
        console.log("box unchecked");
            }       
        }
    }
    else{

        content.innerHTML += "<p> Thank you! </p>";
    }
}