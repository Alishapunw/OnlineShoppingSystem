using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Retailer
    {
        public Retailer()
        {
            Products = new HashSet<Products>();
        }

        public int RetailerId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RetailerName { get; set; }
        public long RetailerMobile { get; set; }

        public virtual ICollection<Products> Products { get; set; }
    }
}
