using Ardalis.Specification;
using eShopWeb.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eShopWeb.Core.Interfaces
{
    public interface IAsyncRepository<T> where T : BaseEntity, IAggregateRoot
    {
        Task<T> GetIdAsync(int id);
        Task<IReadOnlyCollection<T>> ListAllAsync();
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        IUnitOfWork unitOfWork { get; }
    }
}
