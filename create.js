const actionButtonPageOne = document.querySelector('#button_page_one');
const actionButtonPageTwo = document.querySelector('#button_page_two');

const content_login = (body) => {
    return `
            <p class="p-title">Zaloguj się</p>
            <form class="form-login" action="login.php" method="post" >
                <label class="label-login-text" >Login:</label>
                <input class="input-login" type="text" name="login"></input>
                <label class="label-login-text" >Hasło:</label>
                <input class="input-login" type="text" name="password"></input>
                <button class="button-login"><i data-feather="log-in"></i></button>
            </form>
            <i class="x" data-feather="x"></i>
            `;
};

const createBinLogin = (body) => {
    const pcontent_login = document.querySelector('.content-login');
    if (pcontent_login == 'defined') {
        pcontent_login.remove();
    }
    const create_element_div = document.createElement("div");
    create_element_div.className = ("content-login");
    create_element_div.innerHTML = content_login();
    // div = document.querySelector('.content-main'); // div ?? body
    div_main = document.getElementsByClassName('content-main');
    div_main[0].appendChild(create_element_div); // div ?? body
    feather.replace();
    console.log("Utworzyłem div login");
}

const createBinRegister = (body) => {
    console.log("Utworzyłem div register");
}

actionButtonPageOne.addEventListener("click", (body) => {
    console.log("Kliknięty Button One");
    createBinLogin();
});

actionButtonPageTwo.addEventListener("click", (body) => {
    createBinRegister();
    console.log("Kliknięty Button Two");
});

