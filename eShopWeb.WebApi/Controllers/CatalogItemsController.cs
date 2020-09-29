using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using eShopWeb.WebApi.Application.IServices;
using eShopWeb.WebApi.Application.ModelView;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eShopWeb.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogItemsController : ControllerBase
    {
        private readonly ICatagoryItemService _catagoryItemService;

        public CatalogItemsController(ICatagoryItemService catagoryItemService)
        {
            _catagoryItemService = catagoryItemService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _catagoryItemService.GetAll());
            }
            catch (Exception)
            {
                throw new ArgumentNullException(nameof(_catagoryItemService));
            }
        }
    }
}
