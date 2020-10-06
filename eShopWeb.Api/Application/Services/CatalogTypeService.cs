using eShopWeb.Api.Application.IServices;
using eShopWeb.Api.Application.ModelView;
using eShopWeb.Core.Entities;
using eShopWeb.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.Api.Application.Services
{
    public class CatalogTypeService : ICatalogTypeService
    {
        private readonly IAsyncRepository<CatalogType> _catalogTypeRepository;

        public CatalogTypeService(IAsyncRepository<CatalogType> catalogTypeRepository)
        {
            _catalogTypeRepository = catalogTypeRepository ?? throw new ArgumentNullException(nameof(catalogTypeRepository));
        }

        public async Task<IEnumerable<CatalogTypeViewModel>> GetAll()
        {
            var listTypes = new List<CatalogTypeViewModel>();
            var catalogTypes = await _catalogTypeRepository.ListAllAsync();
            listTypes = catalogTypes.Select(x => new CatalogTypeViewModel
            {
                CatalogCode = x.CatalogCode,
                CatalogId=x.Id,
                CatalogName=x.CatalogName
            }).ToList();

            return listTypes;
        }
    }
}
