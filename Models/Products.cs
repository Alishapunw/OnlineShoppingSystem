using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Products
    {
        public Products()
        {
            ProductCart = new HashSet<ProductCart>();
            ProductImages = new HashSet<ProductImages>();
            Wishlist = new HashSet<Wishlist>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string BrandName { get; set; }
        public int PricePerUnit { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int? CategoryId { get; set; }
        public int? RetailerId { get; set; }
        public bool? Status { get; set; }

        public virtual Category Category { get; set; }
        public virtual Retailer Retailer { get; set; }
        public virtual ICollection<ProductCart> ProductCart { get; set; }
        public virtual ICollection<ProductImages> ProductImages { get; set; }
        public virtual ICollection<Wishlist> Wishlist { get; set; }
    }
}
