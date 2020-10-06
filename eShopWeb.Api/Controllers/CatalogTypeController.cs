using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eShopWeb.Api.Application.IServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eShopWeb.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]

    public class CatalogTypeController : ControllerBase
    {
        private readonly ICatalogTypeService _catalogTypeService;

        public CatalogTypeController(ICatalogTypeService catalogTypeService)
        {
            _catalogTypeService = catalogTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _catalogTypeService.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
