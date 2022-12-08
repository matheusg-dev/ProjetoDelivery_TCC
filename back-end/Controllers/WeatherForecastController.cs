using Microsoft.AspNetCore.Mvc;
using back_end.Model;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using System.Data;
namespace back_end.Controllers;

[ApiController]
[Route("Usuario")]
public class UserController : ControllerBase
{
    [EnableCors("MyPolicy")]
    [HttpPost("cadastrar4")]
    public async Task<IActionResult> cadastrarUsuario([FromBody]Usuario user)
    {
        try
        {
            CadastroArmazemContext context = new CadastroArmazemContext();

            var jojos = 
                from u in context.Usuarios
                where u.UsuarioPrimeiroSome == "Jojo"
                select u;

            await context.AddAsync(user);
            await context.SaveChangesAsync();
        }
        catch
        {
            return Ok(new {
                Status = "Erro",
                Message = "Erro na conexão do banco de dados"
            });
        }

        return Ok(new {
            Status = "Sucess",
            Message = "Sucesso ao salvar usuario."
        });
    }
    /* 
    [HttpGet("SendInfo/{id}")]
    public async Task<IActionResult> SendInfo(int id)
    {
        CadastroArmazemContext context = new CadastroArmazemContext();
        var TakeUser = context.Usuarios.FirstOrDefault(u => u.UsuarioId == id);
        return Ok(TakeUser);
    } */

   [HttpGet("Login")]
    public object Login()
   {

    //Validação dos campos do Formulário
        var user = new Usuario();
        user.UsuarioPrimeiroSome = "kf";
        user.UsuarioSenha = "matheus123";
        user.UsuarioRepetirSenha = "matheus1234";
        CadastroArmazemContext context = new CadastroArmazemContext();

        var query1 = context.Usuarios.FirstOrDefault(u => u.UsuarioPrimeiroSome == user.UsuarioPrimeiroSome);
        if(query1.UsuarioPrimeiroSome.Length <= 3)
            return BadRequest("Primeiro nome inválido.");
        var query2 = context.Usuarios.FirstOrDefault(u => u.UsuarioSenha == user.UsuarioSenha);
        if(query2.UsuarioSenha.Length <= 8)
            return BadRequest("senha invalida.");
            var query3 = context.Usuarios.FirstOrDefault(u => u.UsuarioRepetirSenha == user.UsuarioRepetirSenha);
            if(query2.UsuarioSenha.Length == query3.UsuarioRepetirSenha.Length && query3.UsuarioRepetirSenha.Length <= 8)
            return BadRequest("Senhas não compativeis");
        return Ok("Login efetuado com sucesso."); 
    }
}
