using eShopWeb.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Infrastructure.Data.Configurations
{
    public class CatalogItemConfiguration : IEntityTypeConfiguration<CatalogItem>
    {
        public void Configure(EntityTypeBuilder<CatalogItem> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.ProductName)
                .HasMaxLength(50)
                .IsRequired(true);

            builder.Property(x => x.ProductCode).IsRequired(false);

            builder.Property(x => x.Price)
                    .HasColumnType("decimal(18,2)")
                    .IsRequired(true);

            builder.Property(x => x.Image).IsRequired(false);

            builder.HasOne(x => x.CatalogBrand)
                .WithMany()
                .HasForeignKey(x => x.BrandId);

            builder.HasOne(x => x.CatalogType)
                .WithMany()
                .HasForeignKey(p => p.CatalogTypeID);
        }
    }
}
