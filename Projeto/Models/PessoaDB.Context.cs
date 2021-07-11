
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Projeto.Models
{
 
    
    public partial class PessoasEntities : DbContext
    {
        public PessoasEntities()
            : base("name=PessoasEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Pessoa> Pessoas { get; set; }
    }
}
