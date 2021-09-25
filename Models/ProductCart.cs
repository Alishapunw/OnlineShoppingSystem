using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class ProductCart
    {
        public int Id { get; set; }
        public int? CartId { get; set; }
        public int? ProductId { get; set; }
        public byte? Quantity { get; set; }
        public decimal Amount { get; set; }

        public virtual Cart Cart { get; set; }
        public virtual Products Product { get; set; }
    }
}
