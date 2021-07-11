pessoaApp.controller('pessoaCtrl', function ($scope, pessoaService) {
    
    carregarPessoas();
    
    //carregar pessoa
    function carregarPessoas() {
        var listarPessoas = pessoaService.getTodasPessoas();

        listarPessoas.then(function (d) {
            //se der certo
            $scope.Pessoas = d.data;
        },
            function () {
                alert("Ocoreu um erro ");
            });
    }
    
    //adicionar pessoa
    $scope.adicionarPessoa = function () {

        var pessoa = {
            pessoaId: $scope.pessoaId,
            codigo: $scope.codigo,
            nome: $scope.nome,
            cpf: $scope.cpf,
            endereco: $scope.endereco,
            telefone: $scope.telefone
        };
        var adicionarInfo = pessoaService.adicionarPessoa(pessoa);

        adicionarInfo.then(function (d) {
            if (d.data.success === true) {
                carregarPessoas();
                alert("Pessoa cadastrada com sucesso");

                $scope.limparDados();
            } else {alert("Pessoa não adicionada");}
        },
            //erro no banco
            function () {
                alert("Erro ao tentar adicionar um contato")
            });
    }

    //limpar campos
    $scope.limparDados = function () {
        $scope.pessoaId = '';
        $scope.codigo = '';
        $scope.nome = '';
        $scope.cpf = '';
        $scope.endereco = '';
        $scope.telefone = '';
    }

    //atualizar por ID
    $scope.atualizarPessoaPorId = function (pessoa) {

        $scope.AtualizadaPessoaId = pessoa.PessoaId;
        $scope.AtualizadaCodigo = pessoa.Codigo;
        $scope.AtualizadaNome = pessoa.Nome;
        $scope.AtualizadaCpf = pessoa.Cpf;
        $scope.AtualizadaEndereco = pessoa.Endereco;
        $scope.AtualizadaTelefone = pessoa.Telefone;
    }

    //regatar dados para excluir pessoa
    $scope.excluirPessoaPorId = function (pessoa) {
        $scope.AtualizadaPessoaId = pessoa.PessoaId;
        $scope.AtualizadaNome = pessoa.Nome;
    }

    //atualizar os dados da pessoa
    $scope.atualizarPessoa = function () {
        var pessoa = {
            PessoaId: $scope.AtualizadaPessoaId,
            Codigo: $scope.AtualizadaCodigo,
            Nome: $scope.AtualizadaNome,
            Cpf: $scope.AtualizadaCpf,
            Endereco: $scope.AtualizadaEndereco,
            Telefone: $scope.AtualizadaTelefone
        };

        var atualizarInfos = pessoaService.atualizarPessoa(pessoa);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPessoas();

                alert("Pessoa atualizada");
                $scope.limparDadosAtualizados();
            } else {
                alert("Pessoa não atualizada");
            }
        }, function () { // caso erro for no banco
            alert("Erro ao tentar atualizar");
        });
    }

    // limpar dados apos atualizar
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadaPessoaId = '';
        $scope.AtualizadaCodigo = '';
        $scope.AtualizadaNome = '';
        $scope.AtualizadaCpf = '';
        $scope.AtualizadaEndereco = '';
        $scope.AtualizadaTelefone = '';
    }

    //excluir pessoa pelo ID
    $scope.excluirPessoa = function (AtualizadaPessoaId) {

        var excluirInfos = pessoaService.excluirPessoa($scope.AtualizadaPessoaId);
        excluirInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPessoas();

                alert("Pessoa excluida.")
            } else {
                alert("Pessoa não excluida.")
            }
        }, function () {// caso erro for no banco
            alert("Ocorreu um erro ao excluir")
        });
    }
});
