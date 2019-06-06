const button = document.getElementById('btn');
const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const checkEmail = () => {
    const email = document.getElementById('email');
    if (email.value == null || email.value == "") {
        email.className = 'error';
    } else {
        if (emailIsValid(email.value)) {
            // console.log(`Correct mail`);
            email.className = 'ok';
            return true;
        } else {
            // console.log(`Incorrect mail`);
            email.className = 'error';
            return false;
        }
    }
}
const checkPhoneNumber = () => {
    var phoneNumber = document.getElementById('phoneNumber')
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (phoneNumber.value == null || phoneNumber.value == "") {
        phoneNumber.className = 'error';
    } else {

        if ((phoneNumber.value.match(phoneno))) {
            // console.log(`Dobry numer tel`);
            phoneNumber.className = 'ok';
            return true;
        } else {
            // console.log(`zły numer tel`);
            phoneNumber.className = 'error';
            return false;
        }
    }
}
const checkName = () => {
    const name = document.getElementById('name');
    //console.log(inputText.value);
    if (name.value == null || name.value == "" || name.value.length < 3) {
        // console.log(`Puste pole lub zbyt krótka wartość`);
        name.className = 'error';
    } else {
        var letters = /^[A-Za-z]+$/;
        if (name.value.match(letters)) {
            // console.log(`poprawne: ` + name.value);
            name.className = 'ok';
        } else {
            // console.log(`niepoprawne: ` + name.value);
            name.className = 'error';
        }
    }
}
const checkSurename = () => {
    const surename = document.getElementById('surename');
    //console.log(inputText.value);
    if (surename.value == null || surename.value == "" || surename.value.length < 3) {
        // console.log(`Puste pole lub zbyt krótka wartość`);
        surename.className = 'error';
    } else {
        var letters = /^[A-Za-z]+$/;
        if (surename.value.match(letters)) {
            // console.log(`poprawne: ` + surename.value);
            surename.className = 'ok';
        } else {
            // console.log(`niepoprawne: ` + surename.value);
            surename.className = 'error';
        }
    }
}
const checkCheckBox = () => {
    const checkbox = document.getElementById('checkbox').checked;
    if (checkbox == true) {
        console.log(`Wyrażono zgodę`);
        document.getElementById("checkboxText").setAttribute("id", "checkboxTextOk");
    } else {
        console.log(`Musisz zaznaczyć zgodę`);
        document.getElementById("checkboxText").setAttribute("id", "checkboxTextError");
    }
}
const main = () => {
    //console.log(`Działam`);
    checkName();
    checkSurename();
    checkPhoneNumber();
    checkEmail();
    checkCheckBox();
}
button.addEventListener("click", main);