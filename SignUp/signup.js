function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
const indicator = document.querySelector('.indicator');
const input = document.getElementById('psw');
const weak = document.querySelector('.weak');
const tobe = document.querySelector('.tobe');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const text = document.querySelector('.text');
const showBtn = document.querySelector('.showBtn');

let regExgWeak = /[a-z]/;
let regExgTobe = /[0-9]/;
// let regExgMedium = /\d+/;
let regExgMedium = /[A-Z]/;
let regExgStrong = /.[!,@,#,$,%,^,&,*,_,-,~,(,)]/;
function trigger() {
    if (input.value != "") {
        indicator.style.display = 'block';
        indicator.style.display = 'flex';
        if (input.value.length <= 3 && (input.value.match(regExgWeak) || input.value.match(regExgTobe) || input.value.match(regExgMedium) || input.value.match(regExgStrong))) no = 1;
        // if(input.value.length >= 3 && (input.value.match(regExgWeak) || input.value.match(regExgTobe) || input.value.match(regExgMedium) || input.value.match(regExgStrong)))no=2;
        if (input.value.length >= 6 && ((input.value.match(regExgWeak) && input.value.match(regExgTobe)) || (input.value.match(regExgWeak) && input.value.match(regExgStrong)) || (input.value.match(regExgTobe) && input.value.match(regExgStrong)) || (input.value.match(regExgWeak) && input.value.match(regExgMedium)) || (input.value.match(regExgMedium) && input.value.match(regExgStrong)) || (input.value.match(regExgTobe) && input.value.match(regExgMedium)))) no = 2;
        if (input.value.length >= 6 && ((input.value.match(regExgWeak) && input.value.match(regExgTobe) && input.value.match(regExgMedium)) || (input.value.match(regExgWeak) && input.value.match(regExgStrong) && input.value.match(regExgMedium)) || (input.value.match(regExgStrong) && input.value.match(regExgWeak) && input.value.match(regExgTobe)) || (input.value.match(regExgMedium) && input.value.match(regExgStrong) && input.value.match(regExgTobe)))) no = 3;
        if (input.value.length >= 6 && (input.value.match(regExgWeak) && input.value.match(regExgTobe) && input.value.match(regExgMedium) && input.value.match(regExgStrong))) no = 4;
        if (no == 1) {
            console.log(1)
            weak.classList.add('active');
            text.style.display = "block";
            text.textContent = "Too weak";
            text.classList.add('weak');
        }
        if (no == 2) {
            console.log(2)
            weak.classList.add('active');
            tobe.classList.add('active');
            text.textContent = "Could be Stronger";
            text.classList.add('tobe');
        }
        else {
            tobe.classList.remove('active');
            text.classList.remove('tobe');
        }
        if (no == 3) {
            console.log(3)
            tobe.classList.add('active');
            medium.classList.add('active');
            text.textContent = "Medium password";
            text.classList.add('medium');
        }
        else {
            medium.classList.remove('active');
            text.classList.remove('medium');
        }
        if (no == 4) {
            console.log(4)
            medium.classList.add('active');
            strong.classList.add('active');
            text.textContent = "Strong password";
            text.classList.add('strong');
        }
        else {
            strong.classList.remove('active');
            text.classList.remove('strong');
        }
        showBtn.style.display = 'block';
        showBtn.onclick = function () {
            if (input.type == 'password') {
                input.type = "text";
            }
            else {
                input.type = "password"
            }
        }
    } else {
        indicator.style.display = "none";
        text.style.display = "none"
    }
}


function checkFullname(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == " ") {
            count++;
        }
    }
    if (count >= 1) {
        return true;
    } else {
        return false;
    }
}
function signUp() {
    var input_field = document.getElementsByClassName('input-field');
    var signupFullname = input_field[0].value;
    var signupEmail = input_field[1].value;
    var signupPassword = input_field[2].value;

    if (checkFullname(signupFullname) == true) {

        let udemyUser = {
            signupFullname,
            signupEmail,
            signupPassword
        }
        let userData;
        userData = localStorage.getItem('udemyUsers');
        if (userData == null) {
            userData = [];
        } else {
            userData = JSON.parse(userData)
        }
        userData.push(udemyUser);
        localStorage.setItem('udemyUsers', JSON.stringify(userData));
        window.location.href = "login.html"
    } else {
        alert('Please fill valid Full name')
    }

}
// This is newly added script for showing no of items present in cart
let noOfCartItems = document.getElementById('noOfCartItems');
let cartItem = JSON.parse(localStorage.getItem('cartItem'));
noOfCartItems.innerHTML = `${cartItem.length}`
function showCart() {
    window.location.href = "../Cart/after_cart.html"
}