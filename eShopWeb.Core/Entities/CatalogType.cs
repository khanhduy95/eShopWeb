using eShopWeb.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Core.Entities
{
    public class CatalogType : BaseEntity, IAggregateRoot
    {
        public int CatalogID { get; set; }
        public string CatalogCode { get; set; }
        public string CatalogName { get; set; }
        public CatalogType(int catalogID, string catalogCode, string catalogName)
        {
            CatalogID = catalogID;
            CatalogCode = catalogCode;
            CatalogName = catalogName;
        }
    }
}
