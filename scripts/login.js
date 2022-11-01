const http = axios.create({
    baseURL: 'http://localhost:8016/'
});

const formLogin = document.querySelector("#login");
formLogin.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    let logar = {
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value
    }
    
    const login = await http.post("login", logar);
    
    var token = login.data.token;
    var refresh_token = login.data.refresh_token;
    console.log(login);
    console.log(token);
    console.log(refresh_token);

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('refresh_token', refresh_token);
});