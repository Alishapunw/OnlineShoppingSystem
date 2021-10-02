using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fileManager.Models
{
    public class FileModel
    {
        public IFormFile MyFile1 { get; set; }
        public IFormFile MyFile2 { get; set; }


        public IFormFile MyFile3 { get; set; }
        public IFormFile MyFile4 { get; set; }

        public string ProductName { get; set; }
        public string BrandName { get; set; }
        public int PricePerUnit { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int? CategoryId { get; set; }
        public int? RetailerId { get; set; }

    }
}
