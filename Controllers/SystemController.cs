using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Vuespa.Controllers
{
    [Route("api/[controller]")]
    public class HostingEnvironmentController : Controller
    {
        private readonly IHostingEnvironment _env;

        public HostingEnvironmentController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpGet("[action]")]
        public string EnvironmentName()
        {
            return _env.EnvironmentName;
        }
    }
}
