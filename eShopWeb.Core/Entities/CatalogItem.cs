using eShopWeb.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Core.Entities
{
    public class CatalogItem : BaseEntity, IAggregateRoot
    {
        public int ProductID { get; private set; }
        public string ProductCode { get; private set; }
        public string ProductName { get; private set; }
        public string Description { get; private set; }
        public decimal Price { get; private set; }
        public CatalogType CatalogType { get; private set; }
        public int CatalogTypeID { get; private set; }
        public CatalogBrand CatalogBrand { get; private set; }
        public int BrandId { get; private set; }
        public string Image { get; private set; }
        public CatalogItem(int productID,
                        string productCode,
                       string productName,
                       string description,
                       decimal price,
                       int catalogTypeId,
                       string image,
                       int brandId)
        {
            ProductID = productID;
            ProductCode = productCode;
            ProductName = productName;
            Description = description;
            Price = price;
            CatalogTypeID = catalogTypeId;
            Image = image;
            BrandId = brandId;
        }
        public CatalogItem()
        {

        }
    }
}
