Inline CSS Validation

We have used in-line as well as HTML5 default validation for form input fields using "validity.valueMissing, validity.patternMismatch function" in JavaScript and "required" attributes for all the input form fields.

```
function validateEmail(form){
        var email = form.elements["email"];

        if(email.validity.valueMissing){
            email.setCustomValidity("Please enter your email address");
            return false;
        }
        else if(email.validity.patternMismatch){
            email.setCustomValidity("Email html@ is not in a correct format");
            return false;
        }
        else{
            email.setCustomValidity("");
            return true;
        }
    }
```
"validity.valueMissing, validity.patternMismatch function" are some JavaScript in-built functions which are commonly used to validate email address.
"required" attribute is a HTML5 attribute which checks if the input field is empty or not without any external library.


![Capture](https://user-images.githubusercontent.com/32956051/104039780-a6763200-518b-11eb-9f3a-57acd89bfc63.PNG)

