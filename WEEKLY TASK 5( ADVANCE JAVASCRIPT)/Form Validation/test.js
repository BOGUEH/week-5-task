const   fName = document.getElementById('fName');
const   lName = document.getElementById('lName');
const   userName = document.getElementById('userName');
const   emails = document.getElementById('email');
const   password = document.getElementById('password');
const   confirmPassword = document.getElementById('confirmPassword');

const   submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', formValidation)

function formValidation() {

        passwordCheck();
        
}

function passwordCheck() {
                
    if (password.value !== confirmPassword.value) {
        alert("password does not match")
        return false;
    }else {
        alert('successful')
    }
}

















if (!isNaN(fName.value)) {
    alert('field cannot contain number');
}

          //checking for empty string ( if the field is empty it return and error message)
//    if(lastName == ""  || lastName == nul){
//     alert('field cannot be empty');
//     return false;
// };


}



//     // cheking if the value include a Number. if yes it will return an error message
//     if(!isNaN(lastName)){
    
//         alert('field must not contain number');
//         return false;
//     };


//     // cheking if the first name and last name is thesame. if yes it will return an error message
//     if (fName.value === lName.value) {
    
//         alert("first name and last name cant be the same");
//         return false;
//     } ;

//     //checking for the length of the character to be inputed on the first name and last name input

//     if (firstName.length   < 8 ) {
//         alert( "character must be more than 8 ");

//         return false;
    
//     } 
//     if(lastName.length > 11){
//         alert( "character must not be greater than 12");

//         return false;
//     };

//     if (firstName.length < 8 ) {
//         alert( "character must be more than 8 ")
    
//     }
//      if(lastName.length > 11){
//         alert( "character must not be greater than 12");

//         return false;

//     }



// }



// function emailValidation (email) {

//     let  emailRegExp =  /\S+@\S+\.\S+/;
//     /*the expression above is achieved using regular expression
//     the '\s' is to check for space and '@' is to check for that value in the code while the
//     '.' is to check for the dot value before the validation can take
//     */
//     if (emails.value.match(emailRegExp)) {
//         alert( "successful");
//     } else { 
//         alert('some text are required')
//     }

// }

// function userNameValidation () {
//     //checking for the length of the text
//     let userName1 = userName.value;
//     if (userName1.length < 6) {
//         alert("field must be up to 6")
//         return false;
//     } else if( userName1.length > 8 ){
//         alert("field must not be up to 8")
//     }

//        //checking for empty string ( if the field is empty it return and error message)
//        if(userName1 == "" ){
//         alert('field is empty');
//         return false;
//     }

//     let  userRegExp =  /([a-zA-Z0-9][@&^%])/;
//     /*the expression above is achieved using regular expression
//     it check if the input contain a number or alphabet  and the special characters
//     */
//     if (userName.value.match(userRegExp)) {
//         alert( "successful");
//     } else { 
//         alert('some text are required')
//     }
    
// }




//         function passwordCheck() {
                        
//             if (password.value !== confirmPassword.value) {
//                 alert("password does not match")
//                 return true;
//             }else {
//                 alert('successful')
//             }

            
// if(password.length<6){  
//     alert("Password must be at least 6 characters long.");  
//     return false;  
//     }   

//         }




    
        
   
  


