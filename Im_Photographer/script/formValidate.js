/* Name : Rebecca Moses Dmello
   Student ID: 300322984
     Reference: Knowledge gained from the Lecture provided by Professor Bambang and little from previous education
*/

//function validateSubmit submits value from the user
function validateSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var contact = document.getElementById('contact').value;
    var interest = document.querySelector('input[name="training"]:checked').value;
    var message = document.getElementById('message').value;
    
    if(name != "" && email != "" && dob != "" && contact != "" && interest != "" &&  message != "") {
        console.log("Success"); 
        document.getElementById("close").parentElement.style.display="block";
        document.getElementById("close").parentElement.style.backgroundColor="green";
        document.getElementById("showResult").innerText = "Thank You! " + name + " Our representative will contact you soon!!!";
    }
    else {
        console.log("Error");
        document.getElementById("close").parentElement.style.display="block";
        document.getElementById("close").parentElement.style.backgroundColor="red";
        document.getElementById("showResult").innerText = "ERROR! All the fields in the form are necessary!!!";
    }
}// end of validateSubmit function

//This function hides the result div if it is displayed
function clearForm() {
    document.getElementById("close").parentElement.style.display="none";
}//end of clearForm Function 