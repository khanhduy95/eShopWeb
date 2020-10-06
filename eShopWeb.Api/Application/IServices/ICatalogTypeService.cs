using eShopWeb.Api.Application.ModelView;
using eShopWeb.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.Api.Application.IServices
{
    public interface ICatalogTypeService
    {
        Task<IEnumerable<CatalogTypeViewModel>> GetAll();


    }
}
