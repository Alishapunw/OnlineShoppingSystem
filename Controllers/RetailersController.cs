﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetailersController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public RetailersController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Retailers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Retailer>>> GetRetailer()
        {
            return await _context.Retailer.ToListAsync();
        }

        // GET: api/Retailers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Retailer>> GetRetailer(int id)
        {
            var retailer = await _context.Retailer.FindAsync(id);

            if (retailer == null)
            {
                return NotFound();
            }

            return retailer;
        } 
        [HttpGet("retailerbyemail/{email}")]
        public IActionResult GetRetailerbyEmail(string email)
        {
            var retailer = _context.Retailer.Where(x=>x.Email==email).FirstOrDefault();

            if (retailer == null)
            {
                return NotFound();
            }
            return Ok(retailer);
        }
        [HttpGet("xyz/{id}")]
        public IActionResult GetRetailerProducts(int id)
        {
            var a = _context.Products.Select(p => new Products
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                BrandName = p.BrandName,
                CategoryId = p.CategoryId,
                Description = p.Description,
                PricePerUnit = p.PricePerUnit,
                Quantity = p.Quantity,
                RetailerId = p.RetailerId,
                Status=p.Status,
                ProductImages = p.ProductImages.Select(pi => new ProductImages { ProductId = pi.ProductId, ImagePath = pi.ImagePath }).ToList()
            }).ToList();
            var b = a.Where(x => x.RetailerId == id).ToList();
            return Ok(b);

        }

        // PUT: api/Retailers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRetailer(int id, Retailer retailer)
        {
            if (id != retailer.RetailerId)
            {
                return BadRequest();
            }
            _context.Entry(retailer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RetailerExists(id))
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
        // POST: api/Retailers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Retailer>> PostRetailer(Retailer retailer)
        {
            _context.Retailer.Add(retailer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRetailer", new { id = retailer.RetailerId }, retailer);
        }
        [HttpPost("AddProducts")]
        public async Task<ActionResult<Products>> PostProducts(Products products)
        {
            _context.Products.Add(products);
            await _context.SaveChangesAsync();
            return Ok(_context.Products);
        }

        // DELETE: api/Retailers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Retailer>> DeleteRetailer(int id)
        {
            var retailer = await _context.Retailer.FindAsync(id);
            if (retailer == null)
            {
                return NotFound();
            }

            _context.Retailer.Remove(retailer);
            await _context.SaveChangesAsync();

            return retailer;
        }
        [HttpPost("abcd")]

        private bool RetailerExists(int id)
        {
            return _context.Retailer.Any(e => e.RetailerId == id);
        }

        [HttpGet("retailerbyemail/{email}")]
        public IActionResult GetRetailerbyEmail(string email)
        {
            var retailer = _context.Retailer.Where(x => x.Email == email).FirstOrDefault();

            if (retailer == null)
            {
                return NotFound();
            }
            return Ok(retailer);
        }


        [HttpGet("xyz/{id}")]
        public IActionResult GetRetailerProducts(int id)
        {
            var a = _context.Products.Select(p => new Products
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
            }).ToList();
            var b = a.Where(x => x.RetailerId == id).ToList();
            return Ok(b);
        }
    }
}