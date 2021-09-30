using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using fileManager.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public ProductsController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("GetAllProducts")]
        public ActionResult<IEnumerable<Products>> GetAllProducts()
        {
            var a = _context.Products.Select( p => new Products { ProductId = p.ProductId , 
                ProductName = p.ProductName , 
                BrandName = p.BrandName,
                CategoryId = p.CategoryId,
                Description = p.Description,
                PricePerUnit = p.PricePerUnit,
                Quantity = p.Quantity,
                RetailerId = p.RetailerId,
                Status = p.Status,
                ProductImages = p.ProductImages.Select(pi => new ProductImages { ProductId = pi.ProductId,  ImagePath = pi.ImagePath }).ToList()
            } ).ToList();

            return Ok(a);
        }


        [HttpGet("GetOneProduct")]
        public async  Task<ActionResult<IEnumerable<Products>>> GetOneProduct()
        {
            var a = await _context.Products.Select(p => new Products
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                BrandName = p.BrandName,
                CategoryId = p.CategoryId,
                Description = p.Description,
                PricePerUnit = p.PricePerUnit,
                Quantity = p.Quantity,
                RetailerId = p.RetailerId,
                Status = p.Status,
                ProductImages = p.ProductImages.Select(pi => new ProductImages { ProductId = pi.ProductId, ImagePath = pi.ImagePath }).ToList()
            }).ToListAsync();

            return Ok(a[0]);
        }


        // GET: api/Products/5
        [HttpGet("getProductById/{id}")]
        public async Task<ActionResult<Products>> getProductById(int id)
        {
            Products CurrentProduct = await _context.Products.FindAsync(id);
            if (CurrentProduct == null)
            {
                return NotFound();
            }
            CurrentProduct.ProductImages = await _context.ProductImages.Select(pi => new ProductImages { ProductId = pi.ProductId, ImagePath = pi.ImagePath }   ).Where(pii => pii.ProductId == id).ToListAsync();
            return Ok(CurrentProduct);
        }


        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Products>> GetProducts(int id)
        {
            var products = await _context.Products.FindAsync(id);

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducts(int id, Products products)
        {
            if (id != products.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(products).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Products>> PostProducts(Products products)
        {
            _context.Products.Add(products);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProducts", new { id = products.ProductId }, products);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Products>> DeleteProducts(int id)
        {
            var products = await _context.Products.FindAsync(id);
            if (products == null)
            {
                return NotFound();
            }

            _context.Products.Remove(products);
            await _context.SaveChangesAsync();

            return products;
        }

        private bool ProductsExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }

        /*


        private readonly string AppDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        private static List<FileRecord> fileDB = new List<FileRecord>();

        [HttpPost("uploadImage")]
        [Consumes("multipart/form-data")]
        public async Task<HttpResponseMessage> PostAsync([FromForm] FileModel model)
        {
            try
            {
                FileRecord file = await SaveFileAsync(model.MyFile);

                if (!string.IsNullOrEmpty(file.FilePath))
                {
                    //file.AltText = model.AltText;
                    //file.Description = model.Description;
                    //Save to Inmemory object
                    //fileDB.Add(file);
                    //Save to SQL Server DB
                    SaveToDB(file);
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent(ex.Message),
                };
            }
        }

        private async Task<FileRecord> SaveFileAsync(IFormFile myFile)
        {
            FileRecord file = new FileRecord();
            if (myFile != null)
            {
                if (!Directory.Exists(AppDirectory))
                    Directory.CreateDirectory(AppDirectory);

                var fileName = DateTime.Now.Ticks.ToString() + Path.GetExtension(myFile.FileName);
                var path = Path.Combine(AppDirectory, fileName);

                file.Id = fileDB.Count() + 1;
                file.FilePath = path;
              

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await myFile.CopyToAsync(stream);
                }

                return file;
            }
            return file;
        }

        private void SaveToDB(FileRecord record)
        {
            if (record == null)
                throw new ArgumentNullException($"{nameof(record)}");

            Timages fileData = new Timages();
            fileData.FilePath = record.FilePath;

            _context.Timages.Add(fileData);
            _context.SaveChanges();
        }*/


    }
}
