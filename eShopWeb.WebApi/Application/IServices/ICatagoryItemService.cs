using eShopWeb.WebApi.Application.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.WebApi.Application.IServices
{
    public interface ICatagoryItemService
    {
        Task<IEnumerable<CatalogItemModel>> GetAll();
    }
}
