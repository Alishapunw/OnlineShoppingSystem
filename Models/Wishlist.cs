using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Wishlist
    {
        public int Id { get; set; }
        public int? CustomerId { get; set; }
        public int? ProductId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Products Product { get; set; }
    }
}
