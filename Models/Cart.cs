using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Cart
    {
        public Cart()
        {
            Orders = new HashSet<Orders>();
            ProductCart = new HashSet<ProductCart>();
        }

        public int CartId { get; set; }
        public int? CustomerId { get; set; }
        public bool? Status { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
        public virtual ICollection<ProductCart> ProductCart { get; set; }
    }
}
