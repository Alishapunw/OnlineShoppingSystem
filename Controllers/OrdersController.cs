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
    public class OrdersController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public OrdersController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Orders>> GetOrders(int id)
        {
            var orders = await _context.Orders.FindAsync(id);

            if (orders == null)
            {
                return NotFound();
            }

            return orders;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrders(int id, Orders orders)
        {
            if (id != orders.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orders).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdersExists(id))
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

        // POST: api/Orders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}")]
        public async Task<ActionResult<Orders>> PostOrders(int id)
        {
           var totalamount= _context.ProductCart.Where(x => x.CartId == id).Sum(x => x.Amount);
            if (id != 0)
            {
                Orders order = new Orders();
                order.CartId = id;
                order.OrderDate = DateTime.Now;
                order.TotalAmount = totalamount;
                order.ShippingAddress = "2051 Goldcliff Circle,Washington,Province abbr DC,Province full Washington DC: 20011";
                order.OrderStatus = "dispatched";
                order.ShippingDate = DateTime.Today;
                _context.Orders.Add(order);

                Cart cart = _context.Cart.Where(x => x.CartId == id).FirstOrDefault();
                cart.Status = true;
                _context.Cart.Update(cart);


                await _context.SaveChangesAsync();

                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Orders>> DeleteOrders(int id)
        {
            var orders = await _context.Orders.FindAsync(id);
            if (orders == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(orders);
            await _context.SaveChangesAsync();

            return orders;
        }

        private bool OrdersExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}
