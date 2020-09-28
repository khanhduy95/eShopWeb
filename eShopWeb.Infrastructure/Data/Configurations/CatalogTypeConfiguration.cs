using eShopWeb.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Infrastructure.Data.Configurations
{
    public class CatalogTypeConfiguration : IEntityTypeConfiguration<CatalogType>
    {
        public void Configure(EntityTypeBuilder<CatalogType> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.CatalogCode).IsRequired(false);

            builder.Property(x => x.CatalogID).IsRequired();

            builder.Property(x => x.CatalogName).HasMaxLength(50);
        }
    }
}
