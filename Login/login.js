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

function logIn() {
    var input_field = document.getElementsByClassName('input-field');
    var loginEmail = input_field[0].value;
    var loginPassword = input_field[1].value;
    let udemyUsers = JSON.parse(localStorage.getItem('udemyUsers'));
    for (let i = 0; i < udemyUsers.length; i++) {
        if (loginEmail == udemyUsers[i].signupEmail && loginPassword == udemyUsers[i].signupPassword) {
            let loginUser = {
                loginEmail,
            }

            let loginDetail;
            loginDetail = localStorage.getItem('loginDetails');
            if (loginDetail == null) {
                loginDetail = [];
            } else {
                loginDetail = JSON.parse(loginDetail);
            }
            loginDetail.push(loginUser);
            localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
            window.location.href = "../AfterLogin/afterLogin.html"

            break;
        }
    }
}

// This is newly added script for showing no of items present in cart
let noOfCartItems = document.getElementById('noOfCartItems');
let cartItem = JSON.parse(localStorage.getItem('cartItem'));
noOfCartItems.innerHTML = `${cartItem.length}`
function showCart() {
    window.location.href = "../Cart/after_cart.html"
}