using System;
using System.Collections.Generic;
using System.Text;

namespace eShopWeb.Core.Entities
{
    public abstract class BaseEntity
    {
        public virtual int Id { get; protected set; }
        public virtual string CreateBy { get; protected set; }
        public virtual DateTime CreateAt { get; protected set; }
        public virtual string UpdateBy { get; protected set; }
        public virtual DateTime UpdateAt { get; protected set; }
        public virtual string DeleteBy { get; protected set; }
        public virtual DateTime DeleteAt { get; protected set; }
    }
}
