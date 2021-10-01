using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Models
{
    public class AddProduct
    {
        public AddProduct()
        {
            ProductCart = new HashSet<ProductCart>();
            ProductImages = new HashSet<ProductImages>();
            Wishlist = new HashSet<Wishlist>();
        }
        public string ProductName { get; set; }
        public string BrandName { get; set; }
        public int PricePerUnit { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int? CategoryId { get; set; }
        public int? RetailerId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Retailer Retailer { get; set; }

        public virtual ICollection<ProductCart> ProductCart { get; set; }
        public virtual ICollection<ProductImages> ProductImages { get; set; }
        public virtual ICollection<Wishlist> Wishlist { get; set; }
    }
}
