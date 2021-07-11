pessoaApp.service('pessoaService', function ($http) {

    //listar pessoas
    this.getTodasPessoas = function () {
        return $http.get("/Pessoa/GetPessoa");
    }

    //adicionar pessoa
    this.adicionarPessoa = function (pessoa) {
        var request = $http({
            method: 'post',
            url: '/Pessoa/AdicionarPessoa',
            data: pessoa
        });

        return request;
    }

    //atualizar por ID
    this.atualizarPessoa = function (pessoa) {

        var request = $http({
            method: 'post',
            url: '/Pessoa/AtualizarPessoa',
            data: pessoa
        });

        return request;
    }

    //excluir pessoa por ID
    this.excluirPessoa = function (AtualizadaPessoaId) {

        return $http.post('/Pessoa/ExcluirPessoa/' + AtualizadaPessoaId);
    }
});