function passwordValidator(password) {
    let isValid = true;

    if (!isLengthValid(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!isLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

function isLengthValid(password) {
    return password.length >= 6 && password.length <= 10;
}

function isLettersAndDigits(password) {
    for (let char of password) {
        let code = char.charCodeAt(0);

        let isLetter =
            (code >= 65 && code <= 90) ||   // A-Z
            (code >= 97 && code <= 122);    // a-z

        let isDigit = code >= 48 && code <= 57; // 0-9

        if (!isLetter && !isDigit) {
            return false;
        }
    }

    return true;
}

function hasAtLeastTwoDigits(password) {
    let count = 0;

    for (let char of password) {
        if (char >= '0' && char <= '9') {
            count++;
        }
    }

    return count >= 2;
}

passwordValidator("logIn");
console.log("-----");
passwordValidator("MyPass123");
console.log("-----");
passwordValidator("Pa$s$s");