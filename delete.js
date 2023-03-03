const actionButtonX = document.querySelector('.x');

function remove_content_login() {
    const content_login = document.querySelector('.content-login');
    content_login.remove();
}

actionButtonX.addEventListener("click", (body) => {
    remove_content_login();
    console.log("Kliknięty Button X");
});

/* 
# dla id
. dla class
empty dla h1, h2 ... itd. 
*/