using eShopWeb.Core.Entities;
using eShopWeb.Core.Interfaces;
using eShopWeb.Api.Application.IServices;
using eShopWeb.Api.Application.ModelView;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.Api.Application.Services
{
    public class CatalogItemsService : ICatagoryItemService
    {
        private readonly IAsyncRepository<CatalogItem> _catalogItemRepository;

        public CatalogItemsService(IAsyncRepository<CatalogItem> catalogItemRepository)
        {
            this._catalogItemRepository = catalogItemRepository
                ?? throw new ArgumentNullException(nameof(catalogItemRepository));
        }

        public void CreateCataLogItem(CatalogItemModel catalogItem)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CatalogItemModel>> GetAll()
        {
            var catalogItems = await _catalogItemRepository.ListAllAsync();
            var itemsModel =new List<CatalogItemModel>();

           foreach( var i in catalogItems)
            {
                var catalogItem = new CatalogItemModel
                {
                    ProductId = i.Id,
                    ProductCode = i.ProductCode,
                    ProductName = i.ProductName,
                    Price = i.Price,
                    Description = i.Description,
                };
                itemsModel.Add(catalogItem);
            }
            return itemsModel;
        } 
    }
}
