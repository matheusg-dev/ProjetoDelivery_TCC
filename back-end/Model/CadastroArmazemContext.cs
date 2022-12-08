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
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-O6AL255\\MSSQLSERVER01;Initial Catalog=cadastro_armazem;Integrated Security=SSPI;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK__Usuario__2B3DE7B8CC5D49B5");

            entity.ToTable("Usuario");

            entity.Property(e => e.UsuarioBairro)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioCep)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioCpf)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioEmail)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioEndereco)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioNumeroCasa)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioPrimeiroSome)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioRepetirSenha)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioSenha)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.UsuarioTelefoneWhatsapp)
                .HasMaxLength(15)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
