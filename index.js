var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8016/clientes";
xmlhttp.open("GET",url,true);
const sessao = 'Bearer ' + sessionStorage.getItem('token');
xmlhttp.setRequestHeader(
    "Authorization",
    sessao
);
xmlhttp.send();

// console.log(sessao);
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
            { "data": "cnpj" },
            { "data": "telefone" },
            {"data": "precoVisual"}
        ],
    });
}
}

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

const formNewCliente = document.getElementById("form-cad-cliente");
if (formNewCliente) {
    formNewCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const nome = document.querySelector("#nome");
        const telefone = document.querySelector("#telefone");
        const cep = document.querySelector("#cep");
        const rua = document.querySelector("#rua");
        const numeroIMO = document.querySelector("#numeroIMO");
        const bairro = document.querySelector("#bairro");
        const cidade = document.querySelector("#cidade");
        const uf = document.querySelector("#uf");
        const cnpj = document.querySelector("#cnpj");
        const email = document.querySelector("#email");
        const preco = document.querySelector("#preco");
        const json = {"nome": nome.value, 
            "cep": cep.value, 
            "rua": rua.value,
            "numeroIMO": numeroIMO.value,
            "bairro": bairro.value, 
            "cidade": cidade.value, 
            "uf": uf.value, 
            "cnpj": cnpj.value, 
            "preco": preco.value, 
            "precoVisual": "R$ " + preco.value, 
            "telefone" : telefone.value, 
            "email": email.value};

        await fetch("http://localhost:8016/clientes", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessao,
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}

$(document).ready(function() {
    $("form[id='form-edit-cliente']").ready(async function(){
        const dados = await fetch("http://localhost:8016/clientes", {
            method: "GET",
            headers: {
                'Authorization': sessao,
            }
        });
        const resposta = await dados.json();
        // console.log(resposta);

        const id = document.querySelector('#editId');
        resposta.forEach(element => {
            id.appendChild(new Option(element.id + ": " + element.nome, element.id));
        });

    });
});

$(document).ready(function() {
    $("select[id='editId']").blur(async function(){
        const id = document.querySelector("#editId");
        const json = {"id": id.value};
        // console.log(json);
        
        const dados = await fetch("http://localhost:8016/clientes/id", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessao,
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
                    'Authorization': sessao,
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}

window.onload = async function() {
    const dados = await fetch("http://localhost:8016/clientes", {
        method: "GET",
        headers: {
            'Authorization': sessao,
        }
    });
    const resposta = await dados.json();
    // console.log(resposta);
    
    const visId = document.querySelector('#visId');
    resposta.forEach(element => {
        visId.appendChild(new Option(element.id + ": " + element.nome, element.id));
    });
    
    const deleteId = document.querySelector('#deleteId');
    resposta.forEach(element => {
        deleteId.appendChild(new Option(element.id + ": " + element.nome, element.id));
    });
};

$(document).ready(function() {
    $("select[id='visId']").blur(async function(){
        const id = document.querySelector("#visId");
        const json = {"id": id.value};
        // console.log(json);
        
        const dados = await fetch("http://localhost:8016/clientes/id", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessao,
            },
            body: JSON.stringify(json)
        });
        const resposta = await dados.json();
        // console.log(resposta);

        document.getElementById("visCod").innerHTML = resposta['0'].id;
        document.getElementById("visCliente").innerHTML = resposta['0'].nome;
        document.getElementById("visCep").innerHTML = resposta['0'].cep;
        document.getElementById("visRua").innerHTML = resposta['0'].rua;
        document.getElementById("visNum").innerHTML = resposta['0'].numeroIMO;
        document.getElementById("visBairro").innerHTML = resposta['0'].bairro;
        document.getElementById("visCidade").innerHTML = resposta['0'].cidade;
        document.getElementById("visEstado").innerHTML = resposta['0'].telefone;
        document.getElementById("visCnpj").innerHTML = resposta['0'].cnpj;
        document.getElementById("visPreco").innerHTML = resposta['0'].preco;
        document.getElementById("visTelefone").innerHTML = resposta['0'].telefone;
        document.getElementById("visEmail").innerHTML = resposta['0'].email;
        

    });
});

const formDeleteCliente = document.getElementById("form-delete-cliente");
if(formDeleteCliente){
    formDeleteCliente.addEventListener("submit", async(e) => {
        e.preventDefault();
        const id = document.querySelector("#deleteId");
        const json = {"id": id.value};
        // console.log(json);

        await fetch("http://localhost:8016/clientes", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessao,
                },
                body: JSON.stringify(json)
        });

        location.reload();
    });
}