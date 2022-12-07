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
            using CadastroArmazemContext context = new CadastroArmazemContext();

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

//    [HttpGet("Login")]
//    public object Login(Usuario user)
//    {
//         cadastro_armazem context = new cadastro_armazem();

//      /*    var query1 = context.usuarios.FirstOrDefault(u => u.Nome == user.Nome);
//         if(query1.Nome == null)
//             return BadRequest("Nome invalido.");
//         if(query1.Senha == null)
//             return BadRequest("senha invalida.");
//         return Ok("Login efetuado com sucesso."); */
//    }
}
