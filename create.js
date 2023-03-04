const actionButtonPageOne = document.querySelector('#button_page_one');
const actionButtonPageTwo = document.querySelector('#button_page_two');

const content_login = (body) => {
    return `
            <p class="p-title">Zaloguj się</p>
            <form class="form-login" id="form_login" action="login.php" method="post" >
                <label class="label-login-text" >Login:</label>
                <input class="input-login" type="text" name="login"></input>
                <label class="label-login-text" >Hasło:</label>
                <input class="input-login" type="text" name="password"></input>
                <button class="button-login"><i data-feather="log-in"></i></button>
            </form>
            `;
};

const content_register = (body) => {
    return `
            <p class="p-title">Zarejestruj się</p>
            <form class="form-login" id="form_register" action="register.php" method="post" >
                <label class="label-login-text" >Login:</label>
                <input class="input-login" type="text" name="login"></input>
                <label class="label-login-text" >Email:</label>
                <input class="input-login" type="text" name="email"></input>
                <label class="label-login-text" >Hasło:</label>
                <input class="input-login" type="text" name="password"></input>
                <label class="label-login-text" >Powtóż hasło:</label>
                <input class="input-login" type="text" name="re_password"></input>
                <button class="button-login"><i data-feather="log-in"></i></button>
            </form>
            `;
};

const createBinLogin = (body) => {
    const create_element_div = document.createElement("div");
    create_element_div.className = ("content-form");
    create_element_div.innerHTML = content_login();
    // div = document.querySelector('.content-main'); // div ?? body
    div_main = document.getElementsByClassName('content-main');
    div_main[0].appendChild(create_element_div); // div ?? body
    feather.replace();
    console.log("Utworzyłem div login");
}

const createBinRegister = (body) => {
    const create_element_div = document.createElement("div");
    create_element_div.className = ("content-form");
    create_element_div.innerHTML = content_register();
    // div = document.querySelector('.content-main'); // div ?? body
    div_main = document.getElementsByClassName('content-main');
    div_main[0].appendChild(create_element_div); // div ?? body
    feather.replace();
    console.log("Utworzyłem div register");
}

actionButtonPageOne.addEventListener("click", (body) => {
    console.log("Kliknięty Button One");
    if (document.querySelector('#form_login') === null) {
        if(document.querySelector('.content-form') !== null){
            document.querySelector('.content-form').remove();
        }
        createBinLogin(); 
    } else { 
        const pcontent_login = document.querySelector('.content-form');
        pcontent_login.remove();
        console.log('Okienko login już istenieje');        
    }
});

actionButtonPageTwo.addEventListener("click", (body) => {
    console.log("Kliknięty Button Two");
    if (document.querySelector('#form_register') === null) {
        if(document.querySelector('.content-form') !== null){
            document.querySelector('.content-form').remove();
        }
        createBinRegister();
    } else { 
        const pcontent_login = document.querySelector('.content-form');
        pcontent_login.remove();
        console.log('Okienko register już istenieje');        
    }
});

