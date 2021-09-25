using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class ProductImages
    {
        public int TbProductImageId { get; set; }
        public int? ProductId { get; set; }
        public string ImagePath { get; set; }

        public virtual Products Product { get; set; }
    }
}
