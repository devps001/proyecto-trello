using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace proyecto_trello_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    [HttpGet]
    [Authorize]
    public IActionResult GetValues()
    {
        return Ok(new[] { "value1", "value2" });
    }
}