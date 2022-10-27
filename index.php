<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <nav class="navbar shadow navbar-dark bg-primary fixed-top">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="dropdown" style="margin-right: 65px;">
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>

        </div>
    </nav>

    <div class="offcanvas offcanvas-start d-flex flex-column flex-shrink-0 p-3 bg-light" tabindex="-1"
        id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 280px;">
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="../home.php" class="nav-link link-dark" aria-current="page">
                    <i class="bi bi-list-ul me-2"></i>
                    Home
                </a>
            </li>
            <li>
                <a href="../fornecedor/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Fornecedores
                </a>
            </li>
            <li>
                <a href="../clientes/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Clientes
                </a>
            </li>
            <li>
                <a href="../estoque/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Estoque
                </a>
            </li>
            <li>
                <a href="../entrada/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Entrada
                </a>
            </li>
            <li>
                <a href="../saida/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Saída
                </a>
            </li>
            <li>
                <a href="../boletos-a-pagar/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Boletos à pagar
                </a>
            </li>
            <li>
                <a href="../boletos-a-receber/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Boletos à receber
                </a>
            </li>
            <li>
                <a href="../extrato-bancario/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Extrato bancário
                </a>
            </li>
            <li>
                <a href="../extrato-dinheiro/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Extrato dinheiro
                </a>
            </li>
            <li>
                <a href="../despesas/" class="nav-link link-dark">
                    <i class="bi bi-list-ul me-2"></i>
                    Despesas
                </a>
            </li>
        </ul>
        <hr>
        <strong>Fiscal Contas</strong>
    </div>

    <div class="container pt-4">

        <div class="row row-cols-1 row-cols-md-2 g-4 pt-5">
            
        </div>
    </div>

    <main>
        <div class="container title">
            <h1>Clientes</h1>
        </div>
        <div class="container linha-horizontal"></div>
        <div class="container">
            <div class="table-responsive">
                <div id="header-buttons" class="d-flex justify-content-end align-Clientes-center pt-3 pb-2">
                    <div id="header-clientes" class="justify-content-between ">
                        <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#cadastrarCliente"> Cadastrar </button>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarCliente"> Editar </button>
                        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#apagarCliente"> Apagar </button>
                    </div>
                </div>
                <div class="col-sm">
                    <span id="msgAlerta"></span>
                </div>
                <table id="listar-clientes" class="table table-striped table-hover table-sm table-bordered align-middle display" style="width:100%;text-align:center">
                    <thead style="background: #0d6efd; color: #ffffffd1">
                        <tr>
                            <th style="text-align:center">Código</th>
                            <th style="text-align:center">Cliente</th>
                            <th style="text-align:center">Email</th>
                            <th style="text-align:center">Contato</th>
                        </tr>
                    </thead>
                </table>
            </div>

        <div class="modal fade" id="cadastrarCliente" tabindex="-1" aria-labelledby="cadastrar_clientesLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cadastrar_clientesLabel">Cadastrar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span id="msgAlertErroCad"></span>
                        <form method="POST" id="form-cad-cliente">
                            <div class="row mb-3">
                                <label for="nome" class="col-sm-3 col-form-label">Cliente</label>
                                <div class="col-sm">
                                    <input type="text" name="nome" class="form-control" id="nome" placeholder="Nome do cliente..">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="telefone" class="col-sm-3 col-form-label">Telefone</label>
                                <div class="col-sm">
                                    <input type="text" name="telefone" class="form-control" id="telefone" placeholder="Telefone do cliente.." data-mask="(00) 000000000">
                                </div>
                            </div>
                            
                            <div class="row mb-3">
                                <label for="email" class="col-sm-3 col-form-label">E-mail</label>
                                <div class="col-sm">
                                    <input type="text" name="email" class="form-control" id="email" placeholder="E-mail do cliente..">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success btn-sm" value="cadastrar">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editarCliente" tabindex="-1" aria-labelledby="editClienteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editClienteModalLabel">Editar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span id="msgAlertErroEdit"></span>
                        <form method="PUT" id="form-edit-cliente" action="localhost/slim-project/clientes">
                            <div class="row mb-3">
                                <label for="id" class="col-sm-3 col-form-label">Id</label>
                                <div class="col-sm">
                                    <input type="text" name="id" class="form-control" id="editId" placeholder="Id do cliente..">
                                </div>
                            </div>
                            
                            <div class="row mb-3">
                                <label for="nome" class="col-sm-3 col-form-label">Cliente</label>
                                <div class="col-sm">
                                    <input type="text" name="nome" class="form-control" id="editNome" placeholder="Nome do cliente..">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="telefone" class="col-sm-3 col-form-label">Telefone</label>
                                <div class="col-sm">
                                    <input type="text" name="telefone" class="form-control" id="editTelefone" placeholder="Telefone do cliente..">
                                </div>
                            </div>
                        
                            <div class="row mb-3">
                                <label for="email" class="col-sm-3 col-form-label">E-mail</label>
                                <div class="col-sm">
                                    <input type="text" name="email" class="form-control" id="editEmail" placeholder="E-mail do cliente..">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="modal fade" id="apagarCliente" tabindex="-1" aria-labelledby="editClienteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editClienteModalLabel">Apagar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span id="msgAlertErroEdit"></span>
                        <form method="DELETE" id="form-delete-cliente">
                            <input type="hidden" name="id" id="editId">
                            <div class="row mb-3">
                                <label for="id" class="col-sm-3 col-form-label">Id</label>
                                <div class="col-sm">
                                    <input type="text" name="id" class="form-control" id="deleteId" placeholder="Id do cliente..">
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary btn-sm">Apagar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
    <script src="index.js"></script>

<footer class="main-footer">
    <strong>Copyright &copy; 2022 <a href="">Guilherme Souza</a>.</strong> All rights
    reserved.
</footer>
</body>

</html>