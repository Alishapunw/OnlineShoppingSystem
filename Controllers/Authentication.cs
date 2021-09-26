using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineShopping.Models;
using Microsoft.EntityFrameworkCore;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Authentication : ControllerBase
    {
        DB_OnlineShoppingContext context;
        public Authentication(DB_OnlineShoppingContext _context)
        {
            context = _context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Customer>>> GetCart()
        {
            return Ok(context.Customer);

        }

        [HttpPost("Register")]
        public IActionResult Register(Customer userdetails)
        {
            var e = userdetails.Email;
            var ud = context.Customer.Where(x =>x.Email==e).ToList();

            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (ud.Count() == 0)
            {
                context.Customer.Add(userdetails);
                context.SaveChanges();
                status.Add("RegistrationSuccess", true);
                return Ok(status);
            }
            else
            {
                status.Add("RegistrationSuccess", false);
                return Ok(status);
            }

        }



        [HttpPost("Login")]
        public async Task<IActionResult> Login(Admin userdetails)
        {
            //UserDetails ud = context.UserDetails.Where( u => u.Email == userdetails.Email && u.Password == userdetails.Password ).FirstOrDefault() ;
            Admin ud = await context.Admin.FindAsync(userdetails.Email);

            Dictionary<string, string> status = new Dictionary<string, string>();

            if (ud == null)
            {
                status.Add("LoginMessage", "UserDoesNotExist");
                return Ok(status);
            }
            else
            {
                if (ud.Password == userdetails.Password)
                {
                    status.Add("LoginMessage", "Success");
                }
                else
                {
                    status.Add("LoginMessage", "InvalidPassword");
                }
                return Ok(status);
            }


        }
            [HttpPost("Login1")]
            public async Task<IActionResult> Login1(Customer userdetails)
            {
                Customer ud =  context.Customer.Where( u => u.Email == userdetails.Email && u.Password == userdetails.Password ).FirstOrDefault() ;
                //Customer ud = await context.Admin.FindAsync(userdetails.Email);

                Dictionary<string, string> status = new Dictionary<string, string>();

                if (ud == null)
                {
                    status.Add("LoginMessage", "UserDoesNotExist");
                    return Ok(status);
                }
                else
                {
                    if (ud.Password == userdetails.Password)
                    {
                        status.Add("LoginMessage", "Success");
                    }
                    else
                    {
                        status.Add("LoginMessage", "InvalidPassword");
                    }
                    return Ok(status);
                }
            }
        [HttpPost("Login2")]
        public async Task<IActionResult> Login2(Retailer userdetails)
        {
            Retailer ud = context.Retailer.Where(u => u.Email == userdetails.Email && u.Password == userdetails.Password).FirstOrDefault();
            //Customer ud = await context.Admin.FindAsync(userdetails.Email);

            Dictionary<string, string> status = new Dictionary<string, string>();

            if (ud == null)
            {
                status.Add("LoginMessage", "UserDoesNotExist");
                return Ok(status);
            }
            else
            {
                if (ud.Password == userdetails.Password)
                {
                    status.Add("LoginMessage", "Success");
                }
                else
                {
                    status.Add("LoginMessage", "InvalidPassword");
                }
                return Ok(status);
            }
        }
    }
}
