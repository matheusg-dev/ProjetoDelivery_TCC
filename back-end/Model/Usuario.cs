using System;
using System.Collections.Generic;

namespace back_end.Model;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string? UsuarioPrimeiroSome { get; set; }

    public string? UsuarioEmail { get; set; }

    public string? UsuarioSenha { get; set; }

    public string? UsuarioRepetirSenha { get; set; }

    public string? UsuarioCpf { get; set; }

    public string? UsuarioTelefoneWhatsapp { get; set; }

    public string? UsuarioCep { get; set; }

    public string? UsuarioEndereco { get; set; }

    public string? UsuarioNumeroCasa { get; set; }

    public string? UsuarioBairro { get; set; }
}
