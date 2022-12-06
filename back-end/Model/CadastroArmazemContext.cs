using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace back_end.Model;

public partial class CadastroArmazemContext : DbContext
{
    public CadastroArmazemContext()
    {
    }

    public CadastroArmazemContext(DbContextOptions<CadastroArmazemContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=SNCCHLAB02F29\\TEW_SQLEXPRESS;Initial Catalog=cadastro_armazem;Integrated Security=SSPI;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK__usuario__2ED7D2AF42909640");

            entity.ToTable("usuario");

            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");
            entity.Property(e => e.UsuarioBairro)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("usuario_bairro");
            entity.Property(e => e.UsuarioCep)
                .HasMaxLength(8)
                .IsUnicode(false)
                .HasColumnName("usuario_cep");
            entity.Property(e => e.UsuarioCpf)
                .HasMaxLength(14)
                .IsUnicode(false)
                .HasColumnName("usuario_cpf");
            entity.Property(e => e.UsuarioEmail)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("usuario_email");
            entity.Property(e => e.UsuarioEndereco)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("usuario_endereco");
            entity.Property(e => e.UsuarioNumeroCasa)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("usuario_numero_casa");
            entity.Property(e => e.UsuarioPrimeiroSome)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("usuario_primeiro_some");
            entity.Property(e => e.UsuarioRepetirSenha)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("usuario_repetir_senha");
            entity.Property(e => e.UsuarioSenha)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("usuario_senha");
            entity.Property(e => e.UsuarioTelefoneWhatsapp)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("usuario_telefone_whatsapp");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
