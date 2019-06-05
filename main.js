const button = document.getElementById('btn');

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const checkEmail = () => {
    const email = document.getElementById('email').value;
    if (emailIsValid(email)) {
        console.log(`Correct mail`);
    } else {
        console.log(`Incorrect mail`);
    }
}

const checkPhoneNumber = () => {
    const phoneNumber = document.getElementById('phoneNumber')
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if ((phoneNumber.value.match(phoneno))) {
        console.log(`Dobry numer tel`);
        return true;
    } else {
        console.log(`zły numer tel`);
        return false;
    }
}
const checkNameOrSurename = (inputText) => {

    //console.log(inputText.value);
    if (inputText == null || inputText == "" || inputText.length < 3) {
        console.log(`Puste pole lub zbyt krótka wartość`);
    } else {
        var letters = /^[A-Za-z]+$/;
        if (inputText.match(letters)) {
            console.log(`poprawne: ` + inputText);
        } else {
            console.log(`niepoprawne: ` + inputText);
        }
    }
}
const checkCheckBox = () => {
    const checkbox = document.getElementById('wariat').checked;
    if (checkbox == true) {
        console.log(`Wyrażono zgodę`);
    } else {
        console.log(`Musisz zaznaczyć zgodę`);
    }
}

const main = () => {
    //console.log(`Działam`);
    const surename = document.getElementById('surename').value;
    const name = document.getElementById('name').value;

    checkNameOrSurename(name);
    checkNameOrSurename(surename);
    checkPhoneNumber();
    checkEmail();
    checkCheckBox();
}

button.addEventListener("click", main);