var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8016/clientes";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
   // console.log(data);
    $('#listar-clientes').DataTable({
        "data": data,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json"
        },
        "columns": [
            { "data": "id" },
            { "data": "nome" },
            { "data": "telefone" },
        ]
    });
}
}

const formNewCliente = document.getElementById("form-cad-cliente");
if (formNewCliente) {
    formNewCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        const json = {"nome": nome.value, "telefone" : telefone.value, "email": email.value};

        await fetch("http://localhost:8016/clientes", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}

$(document).ready(function() {
    $("input[id='editId']").blur(async function(){
        const id = document.querySelector("#editId");
        const json = {"id": id.value};
        // console.log(json);
        
        const dados = await fetch("http://localhost:8016/clientes/id", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        });
        const resposta = await dados.json();
        // console.log(resposta);

        document.getElementById("editNome").value = resposta['0'].nome;
        document.getElementById("editTelefone").value = resposta['0'].telefone;
        document.getElementById("editEmail").value = resposta['0'].email;

    });
});

const formEditCliente = document.getElementById("form-edit-cliente");
if(formEditCliente){
    formEditCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const id = document.querySelector("#editId");
        const nome = document.querySelector("#editNome");
        const email = document.querySelector("#editEmail");
        const telefone = document.querySelector("#editTelefone");
        const json = {"id": id.value ,"nome": nome.value, "telefone" : telefone.value, "email": email.value};
        // console.log(json);

        await fetch("http://localhost:8016/clientes", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}

const formDeleteCliente = document.getElementById("form-delete-cliente");
if(formDeleteCliente){
    formDeleteCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        const id = document.querySelector("#deleteId");
        const json = {"id": id.value};
        console.log(json);

        await fetch("http://localhost:8016/clientes", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}