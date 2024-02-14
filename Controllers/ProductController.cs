using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AspNetCoreRateLimit; 

namespace react_asp_mail.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [RateLimit("GetProductsLimit")]
        public IActionResult GetProducts()
        {
       
            return Ok();
        }
    }
}
