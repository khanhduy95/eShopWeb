using eShopWeb.Core.Entities;
using eShopWeb.Core.Interfaces;
using eShopWeb.Infrastructure.Data.Configurations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace eShopWeb.Infrastructure
{
    public class ShopWebContext : DbContext, IUnitOfWork
    {
        public DbSet<CatalogItem> CatalogItems { get; set; }

        public DbSet<CatalogBrand> CatalogBrands { get; set; }


        public DbSet<CatalogType> CatalogTypes { get; set; }


        public ShopWebContext(DbContextOptions<ShopWebContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {


            builder.ApplyConfiguration(new CatalogBrandConfiguration());
            builder.ApplyConfiguration(new CatalogItemConfiguration());
            builder.ApplyConfiguration(new CatalogTypeConfiguration());

        }

        public async Task<int> SaveChangeAsync(CancellationToken cancellationToken = default)
        {
            return await SaveChangeAsync();
        }
    }
}
