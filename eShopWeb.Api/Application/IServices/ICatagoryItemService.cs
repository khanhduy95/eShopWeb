﻿using eShopWeb.Api.Application.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.Api.Application.IServices
{
    public interface ICatalogItemService
    {
        Task<IEnumerable<CatalogItemModel>> GetAll();
        void CreateCataLogItem(CatalogItemModel catalogItem);
    }
}
