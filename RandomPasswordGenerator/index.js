function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const  uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_-=+"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars :"";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    

    if(length <= 0){
        return `(password length must be at least 1)`
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

   

    return  password;

}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols  
)

console.log(`Generated Passowrd: ${password}`);