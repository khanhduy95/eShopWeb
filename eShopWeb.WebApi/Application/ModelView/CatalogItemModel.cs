﻿using Microsoft.AspNetCore.Razor.Language.CodeGeneration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eShopWeb.WebApi.Application.ModelView
{
    public class CatalogItemModel
    {
        public CatalogItemModel(int productId,
                                string productCode,
                                string productName,
                                string description,
                                decimal price
                               )
        {
            ProductId = productId;
            ProductCode = productCode;
            ProductName = productName;
            Description = description;
            Price = price;
        }
        public CatalogItemModel()
        {

        }
        public int ProductId { get; set; }
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
    
}
