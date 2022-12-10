using Microsoft.AspNetCore.Mvc;
using back_end.Model;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using System.Data;
namespace back_end.Controllers;
using System;

[ApiController]
[Route("Usuario")]
public class UserController : ControllerBase
{
    [EnableCors("MyPolicy")]
    [HttpPost("cadastrar4")]
    public async Task<IActionResult> cadastrarUsuario([FromBody]Usuario user)
    {
        Console.WriteLine("oi");
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
        catch (Exception ex)
        
        {
            Console.WriteLine(ex);
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

    [Route("Usuario")]
   [HttpGet("Login")]
    public object Login()
   {

    //Validação dos campos de login
        var user = new Usuario();
        user.UsuarioEmail = "matheus@gmail.com";
        user.UsuarioSenha = "matheus123";
        CadastroArmazemContext context = new CadastroArmazemContext();

        var possibleUser = context.Usuarios.FirstOrDefault(u => u.UsuarioEmail ==  user.UsuarioEmail);
        if(possibleUser == null)
            return NotFound("Email invalido.");
       if(possibleUser.UsuarioSenha!= user.UsuarioSenha)
            return NotFound("senha invalida.");
        return Ok("Login efetuado com sucesso."); 
    }
}
