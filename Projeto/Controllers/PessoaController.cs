using Projeto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Windows.Documents;

namespace Projeto.Controllers
{
    public class PessoaController : Controller
    {
        #region - listar
        public JsonResult GetPessoa()
        {
            using (var db = new PessoasEntities())
            {
                List<Pessoa> listarPessoa = db.Pessoas.ToList();

                return Json(listarPessoa, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region - criar
        [HttpPost]
        public JsonResult AdicionarPessoa(Pessoa pessoa)
        {
            if (pessoa != null)
            {
                using(var db = new PessoasEntities())
                {
                    db.Pessoas.Add(pessoa);
                    db.SaveChanges();

                    return Json(new { success = true });
                } 
            }
            return Json(new { success = false });
        }
        #endregion

        #region - atualizar
        [HttpPost]
        public JsonResult AtualizarPessoa(Pessoa pessoa)
        {
            using (var db = new PessoasEntities())
            {
                var pessoaAtualizada = db.Pessoas.Find(pessoa.PessoaId);

                if(pessoaAtualizada == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    pessoaAtualizada.Codigo = pessoa.Codigo;
                    pessoaAtualizada.Nome = pessoa.Nome;
                    pessoaAtualizada.Cpf = pessoa.Cpf;
                    pessoaAtualizada.Endereco = pessoa.Endereco;
                    pessoaAtualizada.Telefone = pessoa.Telefone;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
            
        }
        #endregion

        #region - excluir
        [HttpPost]
        public JsonResult ExcluirPessoa(int id)
        {
            using (var db = new PessoasEntities())
            {
                var pessoa = db.Pessoas.Find(id);
                if(pessoa == null)
                {
                    return Json(new { success = false });
                }

                db.Pessoas.Remove(pessoa);
                db.SaveChanges();

                return Json(new { success = true });
            }
            
        }

        #endregion
    }
}