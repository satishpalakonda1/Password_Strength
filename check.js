function strengthchecking() {
    let pass = document.querySelector(".password").value;
    var dis = document.querySelector(".js-display");
    dis.className = 'js-display'; 

    if (pass.length < 8) {
        dis.innerHTML = "Password must be greater than 8 characters";
        dis.classList.add('weak');
    } 
    else if(!containsUpperCase(pass))
    {
        dis.innerHTML = "Password must contain at least one Upper Case letter";
        dis.classList.add('medium');
    }
    else if (!specialCheck(pass)) {
        dis.innerHTML = "Password must contain at least one special character (@#$&)";
        dis.classList.add('medium');
    } 
    
    
    else {
        dis.innerHTML = "Password Strong";
        dis.classList.add('strong');
    }
}

function specialCheck(pass) {
    let special = "@#$&";
    for (let i = 0; i < special.length; i++) {
        if (pass.includes(special[i])) {
            return true;
        }
    }
    return false;
}
function containsUpperCase(pass) {
    return /[A-Z]/.test(pass);
}

function checkEqual() {
    let pass1 = document.querySelector(".password").value;
    let pass2 = document.querySelector(".password2").value;
    var display = document.querySelector(".js-display-same");

   
    display.className = 'js-display-same'; 

    if (pass1 === pass2) {
        display.innerHTML = "Password Matched";
        display.classList.add('password-match');
    } else {
        display.innerHTML = "Password Mismatch";
        display.classList.add('password-mismatch');
    }
}


function validateForm() {
   
    let pass1 = document.querySelector(".password").value;
    let pass2 = document.querySelector(".password2").value;

    if (pass1 !== pass2) {
        alert("Passwords do not match. Please correct the errors before submitting.");
        return false; 
    }

    
    return true;
}
