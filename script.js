function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
  var validLastName = false;
  var validEmail =false;
  var validPhone = false;
  var validAddress = false;
  var validCity = false;
  var validZip= false;
  
  
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var check1 = /^[.@]+$/;
  
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

  
  
  
  
  
/*********** VALIDATES USERNAME ******** */
 if (myContact.username.value.length > 12 ||
     myContact.username.value ===null||
     myContact.username.value==="")
   errorMessages += "<p>The username must be less than 12 characters</p>";
 
 else 
 validUsername =true;
 //console.log(validUsername);  
  
  
  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
  
   /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >7||
    !myContact.firstname.value.match(letters))
 errorMessages += "<p>The first name must be less than 20 characters and it is required</p>";
 else
 validFirstName = true; 
  
    /*********** VALIDATES LASTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50||
     !myContact.lastname.value.match(letters))
 errorMessages += "<p>The last name must be less than 50 characters and it is required</p>";
 else
 validLastName = true; 
  
     /*********** VALIDATES EMAIL ******** */
 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
    !myContact.email.value.match(check1))
 errorMessages += "<p>The email is required</p>";
 else
 validEmail = true;
  
   /*********** VALIDATES PHONENUMBER ******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15||
    !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Numbers only.</p>";
 else
 validPhone = true;
  
    /*********** VALIDATES ADDRESS ******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "" )
 errorMessages += "<p>The address is required. </p>";
 else
 validAddress = true;
  
    /*********** VALIDATES CITY ******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "" )
 errorMessages += "<p>The city is required. </p>";
 else
 validCity = true;
  // I did not include the JS code for country because there will always be a 
  // country selected due to the HTML code.
  
      /*********** VALIDATES ZIP ******** */
 if(myContact.countries.value==="United States")
   
  if (myContact.zip.value==null ||
 myContact.zip.value=== "" ||
    myContact.zip.value.length >5)
 errorMessages += "<p>The zip is required. </p>";
   
 else
 validZip = true;
  
  //no validation code for comments because comments are optional.
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && 
         validFirstName && validLastName && validPhone && 
         validAddress && validCity && validZip && validEmail ) ;
}
