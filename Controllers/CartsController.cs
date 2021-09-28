using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class CartsController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;
        //private readonly IMapper _mapper;
        //IMapper mapper


        public CartsController(DB_OnlineShoppingContext context )
        {
            _context = context;
        }

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCart()
        {
            return await _context.Cart.ToListAsync();
        }





        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _context.Cart.FindAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        [HttpGet("GetCartByUserEmail/{email}")]
        public async Task<ActionResult<Cart>> GetCartByUserEmail(string email)
        {
            Customer customer = _context.Customer.Where(x => x.Email == email).FirstOrDefault();

            Cart cart = _context.Cart.Where(c => c.CustomerId == customer.CustomerId && c.Status == false).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();


            if (customer != null)
            {
                if (cart == null)
                {
                    Cart newcart = new Cart();
                    newcart.CustomerId = customer.CustomerId;
                    _context.Cart.Add(newcart);
                    _context.SaveChanges();
                    status.Add("CartCreatedorExists", true);
                    return Ok(status);
                }
                else
                {
                    status.Add("CartCreatedorExists", true);
                    return Ok(status);
                }
               
                }
            else
            {
                status.Add("CartCreatedorExists", false);
                return Ok(status);
            }

        }

        [HttpPost("AddProductToCart/{email}")]
        public async Task<ActionResult<Cart>> AddProductToCart(string email, Products product)
        {
            Customer customer = _context.Customer.Where(x => x.Email == email).FirstOrDefault();

            Cart cart = _context.Cart.Where(c => c.CustomerId == customer.CustomerId && c.Status == false).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();


            if (customer != null)
            {
                if (cart == null)
                {
                    status.Add("AddedProduct", false);
                    return Ok(status);
                }
                else
                {
                    ProductCart existingProductCart = _context.ProductCart.Where(pc => pc.CartId == cart.CartId && pc.ProductId == product.ProductId).FirstOrDefault();
                    if (existingProductCart == null)
                    {
                        ProductCart pc = new ProductCart();
                        pc.CartId = cart.CartId;
                        pc.ProductId = product.ProductId;
                        pc.Amount = product.PricePerUnit;
                        _context.ProductCart.Add(pc);
                        _context.SaveChanges();
                    }
                    else
                    {
                        existingProductCart.Quantity += 1;
                        existingProductCart.Amount += product.PricePerUnit;
                        _context.ProductCart.Update(existingProductCart);
                        _context.SaveChanges();

                    }
                    
                    status.Add("AddedProduct", true);
                    return Ok(status);
                }

            }
            else
            {
                status.Add("AddedProduct", false);
                return Ok(status);
            }

        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(int id, Cart cart)
        {
            if (id != cart.CartId)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
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

        // POST: api/Carts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        /*
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart(CartDTO cart)
        {
            //cart.CartId = 1002;
            cart.CustomerId = 1001;
            cart.Status = true;

            Cart cart2 = new Cart();
            cart2.CustomerId = 1001;
            cart2.Status = true;

           //var customerBasket = _mapper.Map<CartDTO, Cart>(cart);
           //var updatedBasket = await _basketRepository.UpdateBasketAsync(customerBasket);

            _context.Cart.Add(cart2);
            await _context.SaveChangesAsync();
            return Ok(cart2);
           // return CreatedAtAction("GetCart", new { id = cart.CartId }, cart);
        }*/

        public class CartDTO
        {
            public int? CustomerId { get; set; }
            public bool? Status { get; set; }

        }

        /*

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasketDTO basket)
        {
            var customerBasket = _mapper.Map<CustomerBasketDTO, CustomerBasket>(basket);
            var updatedBasket = await _basketRepository.UpdateBasketAsync(customerBasket);
            return Ok(updatedBasket);
        }*/



        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cart>> DeleteCart(int id)
        {
            var cart = await _context.Cart.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Cart.Remove(cart);
            await _context.SaveChangesAsync();

            return cart;
        }

        private bool CartExists(int id)
        {
            return _context.Cart.Any(e => e.CartId == id);
        }
    }
}
