﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using eShopWeb.Api.Application.IServices;
using eShopWeb.Api.Application.ModelView;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eShopWeb.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
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
