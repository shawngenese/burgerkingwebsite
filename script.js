const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const profileLogo = document.querySelector('#profileLogo');
const profileName = document.querySelector('#profileName');
const emailAddress = document.querySelector('#emailAddress');
const logoutBtn = document.querySelector('#logout');

if(loggedInUser){
    profileName.textContent = loggedInUser.name;
    emailAddress.textContent = loggedInUser.email;
    profileLogo.textContent = loggedInUser.name.charAt(0).toUpperCase();
    logoutBtn.textContent = "Logout";
} 
else {
    profileName.textContent = "Guest User";
    emailAddress.textContent = "Not logged in";
    profileLogo.textContent = "G";
    logoutBtn.textContent = "Sign In";
}

logoutBtn.addEventListener('click', function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});













