using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace eShopWeb.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task<int> SaveChangeAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}
