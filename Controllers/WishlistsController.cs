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
    public class WishlistsController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public WishlistsController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Wishlists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Wishlist>>> GetWishlist()
        {
            return await _context.Wishlist.ToListAsync();
        }

        // GET: api/Wishlists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Wishlist>> GetWishlist(int id)
        {
            var wishlist = await _context.Wishlist.FindAsync(id);

            if (wishlist == null)
            {
                return NotFound();
            }

            return wishlist;
        }

        [HttpGet("getWishListedProductsByEmail/{email}")]
        public async Task<ActionResult<Wishlist[]>> GetWishlist(string email)
        {
            Customer customer = _context.Customer.Where(x => x.Email == email).FirstOrDefault();
            if (customer != null)
            {
                var wishlistofUser = await _context.Wishlist.Select(wl => new Wishlist { Id = wl.Id, CustomerId = wl.CustomerId, ProductId = wl.ProductId, Product = _context.Products.Where(p => p.ProductId == wl.ProductId).FirstOrDefault() }).Where(wlc => wlc.CustomerId == customer.CustomerId).ToListAsync();
                return Ok(wishlistofUser);
            }
            return BadRequest();
        }

        // PUT: api/Wishlists/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWishlist(int id, Wishlist wishlist)
        {
            if (id != wishlist.Id)
            {
                return BadRequest();
            }

            _context.Entry(wishlist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WishlistExists(id))
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

        // POST: api/Wishlists
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{Email}/{productId}")]
        public async Task<ActionResult<Wishlist>> PostWishlist(string Email, int productId)
        {
            Customer customer = _context.Customer.Where(x => x.Email == Email).FirstOrDefault();
            Products selectedProduct =  await _context.Products.FindAsync(productId);
            Dictionary<string, bool> status = new Dictionary<string, bool>();


            if (customer != null && selectedProduct != null)
            {
                Wishlist wishlist = _context.Wishlist.Where(x => x.CustomerId == customer.CustomerId && x.ProductId == selectedProduct.ProductId).FirstOrDefault();
                if(wishlist == null)
                {
                    Wishlist wishlistItem = new Wishlist();
                    wishlistItem.CustomerId = customer.CustomerId;
                    wishlistItem.ProductId = selectedProduct.ProductId;
                    _context.Wishlist.Add(wishlistItem);
                    await _context.SaveChangesAsync();
                    status.Add("AddedProduct", true);
                }
                else
                {
                    status.Add("AddedProduct", false);
                }
            }
            else
            {
                status.Add("AddedProduct", false);
            }

            return Ok(status);
        }



            // DELETE: api/Wishlists/5
        [HttpDelete("{email}/{id}")]
        public async Task<ActionResult<Wishlist>> DeleteWishlist(string email, int id)
        {
            Customer customer = _context.Customer.Where(x => x.Email == email).FirstOrDefault();
            if (customer != null)
            {
                var wishlist =  _context.Wishlist.Where(wl => wl.CustomerId == customer.CustomerId && wl.ProductId == id ).FirstOrDefault();
                _context.Wishlist.Remove(wishlist);
                await _context.SaveChangesAsync();
                return Ok();
            }

            return BadRequest();
        }

        private bool WishlistExists(int id)
        {
            return _context.Wishlist.Any(e => e.Id == id);
        }
    }
}
