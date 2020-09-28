using eShopWeb.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Infrastructure.Data.Configurations
{
    public class CatalogBrandConfiguration : IEntityTypeConfiguration<CatalogBrand>
    {
        public void Configure(EntityTypeBuilder<CatalogBrand> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.BrandID).IsRequired();

            builder.Property(x => x.BrandName).HasMaxLength(50).IsRequired(false);
        }
    }
}
