function passwordValidator(password) {
    
    let isLengthValid = password.length >= 6 && password.length <= 10;
    let isCharsValid = /^[A-Za-z0-9]+$/.test(password);
    let hasTwoDigits = (password.match(/\d/g) || []).length >= 2;
    
    let isValidPassword = isLengthValid && isCharsValid && hasTwoDigits

    if (isValidPassword) {
        console.log("Password is valid");
    } else {
        if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");        
        }
        if (!isCharsValid) {
        console.log("Password must consist only of letters and digits");
        }
        if (!hasTwoDigits) {
        console.log("Password must have at least 2 digits");
        }
    }
}
passwordValidator("logIn");
passwordValidator("MyPass123");
