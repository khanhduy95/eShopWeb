using eShopWeb.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Core.Entities
{
    public class CatalogBrand : BaseEntity, IAggregateRoot
    {
        public int BrandID { get; set; }
        public string BrandName { get; set; }
        public CatalogBrand(int brandID, string brandName)
        {
            BrandID = brandID;
            BrandName = brandName;
        }
    }
}
