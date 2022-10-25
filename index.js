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

        await fetch("localhost/slim-project/clientes", {
            method: "POST",
            body: formNewCliente
        });
    });
}

const formEditCliente = document.getElementById("form-edit-cliente");
if(formEditCliente){
    formEditCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        const dadosForm = new FormData(formEditCliente);

        await fetch("localhost/slim-project/clientes", { 
            method: "PUT",
            body: dadosForm
        });
    });
}

const formDeleteCliente = document.getElementById("form-delete-cliente");
if(formDeleteCliente){
    formDeleteCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        const dadosForm = new FormData(formDeleteCliente);
        await fetch("localhost/slim-project/clientes", { 
            method: "DELETE",
            body: dadosForm
        });
    });
}