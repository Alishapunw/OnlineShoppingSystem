using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Cart = new HashSet<Cart>();
            Wishlist = new HashSet<Wishlist>();
        }

        public int CustomerId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public long PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Otp { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Wishlist> Wishlist { get; set; }
    }
}
