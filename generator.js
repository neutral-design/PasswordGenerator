let pwLength = 15;

let pwEl = [
    document.getElementById("pw-1"),
    document.getElementById("pw-2"),
    document.getElementById("pw-3"),
    document.getElementById("pw-4")
]

let pwLengthEl = document.getElementById("pw-length-input");
pwLengthEl.value = 15;

let buttonEl = document.getElementById("generate-btn");



let chars  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#¤%&()=?`@£$€{[]}^¨*-_";

function generatePassword(length){
    let password = "";
    for(let i = 0; i<length;i++){
        random = Math.floor(Math.random()*chars.length);
        password+=chars[random];
    }
    
    return password;
}

function pwButtonClicked() {
    console.log("Button clicked!");
    pwLength = pwLengthEl.value;     
    
    pwEl.forEach( password => {
        let pwField = document.createElement("input");
        pwField.className="pw-suggestion";
        pwField.value = generatePassword(pwLength);
        password.innerHTML="";
        password.appendChild(pwField);
        //password.textContent = generatePassword(pwLength);;
    });
    
    
}






