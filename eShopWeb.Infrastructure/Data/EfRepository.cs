using Ardalis.Specification;
using eShopWeb.Core.Entities;
using eShopWeb.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eShopWeb.Infrastructure.Data
{
    public class EfRepository<T> : IAsyncRepository<T> where T : BaseEntity, IAggregateRoot
    {
        protected readonly ShopWebContext _dbContext;
        public EfRepository(ShopWebContext context)
        {
            _dbContext = context;
        }

        public IUnitOfWork unitOfWork
        {
            get
            {
                return _dbContext;
            }
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            return entity;
        }

        public async Task DeleteAsync(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangeAsync();
        }

        public async Task<T> GetIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyCollection<T>> ListAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangeAsync();
        }
     
    }
}
