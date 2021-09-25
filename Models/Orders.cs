using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int? CartId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime ShippingDate { get; set; }
        public string ShippingAddress { get; set; }
        public string OrderStatus { get; set; }

        public virtual Cart Cart { get; set; }
    }
}
