using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly DB_OnlineShoppingContext _context;

        public AdminsController(DB_OnlineShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            return await _context.Admin.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(string id)
        {
            var admin = await _context.Admin.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        // PUT: api/Admins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(string id, Admin admin)
        {
            if (id != admin.Email)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
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

        // POST: api/Admins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        {
            _context.Admin.Add(admin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AdminExists(admin.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAdmin", new { id = admin.Email }, admin);
        }

        // DELETE: api/Admins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Admin>> DeleteAdmin(string id)
        {
            var admin = await _context.Admin.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.Admin.Remove(admin);
            await _context.SaveChangesAsync();

            return admin;
        }
        [HttpGet("getRetailers")]
        public async Task<ActionResult<IEnumerable<Retailer>>> GetRetailers()
        {
            return await _context.Retailer.ToListAsync();
        }
        [HttpPost("addRetailer")]

        public async Task<ActionResult<Retailer>> AddRetailer(Retailer retailer)
        {
            retailer.Password = ComputeSha256Hash(retailer.Password);
            _context.Retailer.Add(retailer);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetRetailer", new { id = retailer.RetailerId }, retailer);
            return Ok();
        }
        [HttpDelete("del/{email}")]
        public async Task<ActionResult<Retailer>> DeleteRetailer(string email)
        {
            var retailer = _context.Retailer.Where(x => x.Email == email).FirstOrDefault();
            if (retailer == null)
            {
                return NotFound();
            }

            _context.Retailer.Remove(retailer);
            await _context.SaveChangesAsync();

            return Ok();
        }
        [HttpPost("status/{id}")]
        public IActionResult PostStatus(int id)
        {
            var a = _context.Products.Where(x => x.ProductId == id).FirstOrDefault();
            a.Status = true;
            _context.SaveChanges();
            return Ok(_context.Products);
        }

        private bool AdminExists(string id)
        {
            return _context.Admin.Any(e => e.Email == id);
        }
        [HttpGet("adminproducts")]
        public async Task<ActionResult<IEnumerable<Products>>> GetAdminProducts()
        {
            return await _context.Products.ToListAsync();
        }
        [NonAction]
        static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
