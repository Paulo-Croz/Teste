
using System;
using System.Collections.Generic;

namespace Projeto.Models
{

    
    public partial class Pessoa
    {
        public int PessoaId { get; set; }

        public Nullable<int> Codigo { get; set; }

        public string Nome { get; set; }

        public string Cpf { get; set; }

        public string Endereco { get; set; }

        public string Telefone { get; set; }
    }
}
