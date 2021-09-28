using System;
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
    public class ProductCartsController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public ProductCartsController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/ProductCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductCart>>> GetProductCart()
        {
            return await _context.ProductCart.ToListAsync();
        }


        [HttpGet("GetProductCartByEmail/{email}")]
        public async Task<ActionResult<IEnumerable<ProductCart>>> GetProductCartByEmail(string email)
        {
            Customer customer = _context.Customer.Where(x => x.Email == email).FirstOrDefault();
            Cart cart = _context.Cart.Where(c => c.CustomerId == customer.CustomerId && c.Status == false).FirstOrDefault();
            if(cart == null)
            {
                return Ok();
            }

            var productCart = _context.ProductCart.Select(pc => new ProductCart { Id = pc.Id , CartId = pc.CartId, ProductId = pc.ProductId , Amount = pc.Amount, Quantity = pc.Quantity , Product = _context.Products.Where(p => p.ProductId == pc.ProductId).FirstOrDefault() }  ).Where( pcc => pcc.CartId == cart.CartId ).ToList();
            return Ok(productCart);
        }

        // GET: api/ProductCarts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductCart>> GetProductCart(int id)
        {
            var productCart = await _context.ProductCart.FindAsync(id);

            if (productCart == null)
            {
                return NotFound();
            }

            return productCart;
        }

        // PUT: api/ProductCarts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductCart(int id, ProductCart productCart)
        {
            if (id != productCart.Id)
            {
                return BadRequest();
            }

            _context.Entry(productCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCartExists(id))
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

        // POST: api/ProductCarts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ProductCart>> PostProductCart(ProductCart productCart)
        {
            _context.ProductCart.Add(productCart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCart", new { id = productCart.Id }, productCart);
        }

        // DELETE: api/ProductCarts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductCart>> DeleteProductCart(int id)
        {
            var productCart = await _context.ProductCart.FindAsync(id);
            if (productCart == null)
            {
                return NotFound();
            }

            _context.ProductCart.Remove(productCart);
            await _context.SaveChangesAsync();

            return productCart;
        }

        private bool ProductCartExists(int id)
        {
            return _context.ProductCart.Any(e => e.Id == id);
        }
    }
}
