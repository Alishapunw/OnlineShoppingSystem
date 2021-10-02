using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineShopping.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Net.Mail;

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

       

        [HttpPost("Register")]
        public IActionResult Register(Customer userdetails)
        {
            var e = userdetails.Email;
            var ud = context.Customer.Where(x =>x.Email==e).ToList();

            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (ud.Count() == 0)
            {
                userdetails.Password = ComputeSha256Hash(userdetails.Password);
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
                Customer ud =   context.Customer.Where( u => u.Email == userdetails.Email ).FirstOrDefault();
                //Customer ud = await context.Customer.FindAsync(userdetails.Email);

                Dictionary<string, string> status = new Dictionary<string, string>();

                if (ud == null)
                {
                    status.Add("LoginMessage", "UserDoesNotExist");
                    return Ok(status);
                }
                else
                {
                    if (ud.Password == ComputeSha256Hash(userdetails.Password))
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
            Retailer ud = context.Retailer.Where(u => u.Email == userdetails.Email ).FirstOrDefault();
            //Customer ud = await context.Admin.FindAsync(userdetails.Email);

            Dictionary<string, string> status = new Dictionary<string, string>();

            if (ud == null)
            {
                status.Add("LoginMessage", "UserDoesNotExist");
                return Ok(status);
            }
            else
            {
                if (ud.Password == ComputeSha256Hash(userdetails.Password))
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

        [HttpPost("EmailExists")]
        public IActionResult EmailExists(Customer c)
        {
            Customer customer = context.Customer.Where(x => x.Email == c.Email).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (customer != null)
            {
                status.Add("EmailExists", true);
                string OTP = Generate_otp();
                customer.Otp = OTP;
                context.SaveChanges();
                SendMail("justforzom2@gmail.com", customer.Email, "OTP for resetting the password - Stop&Shop", "OTP for resetting your password is - " + OTP);
                return Ok(status);
            }
            else
            {
                status.Add("EmailExists", false);
                return Ok(status);
            }
        }

        [HttpPost("ForgotPassword")]
        public IActionResult ForgotPassword(Customer c)
        {
            Customer customer = context.Customer.Where(x => x.Email == c.Email).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (customer != null)
            {
                if (customer.Otp == c.Otp)
                {
                    customer.Password = ComputeSha256Hash(c.Password);
                    customer.Otp = "";
                    context.SaveChanges();
                    status.Add("IsOTPValid", true);
                }
                else
                {
                    status.Add("IsOTPValid", false);
                }
                return Ok(status);
            }
            return BadRequest();
        }

        [HttpPost("ChangePassword")]
        public async Task<IActionResult> ChangePassword(RetailerChangePassword retailer)
        {
            Retailer r = context.Retailer.Where(x => x.Email == retailer.Email).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (r != null)
            {
                if (r.Password == ComputeSha256Hash(retailer.OldPassword))
                {
                    r.Password = ComputeSha256Hash(retailer.NewPassword);
                    context.SaveChanges();
                    status.Add("Change Password successful", true);
                    return Ok(status);
                }
                else
                {
                    status.Add("Invalid Password", false);
                    return Ok(status);
                }
            }
            return BadRequest();    
        }

        //[HttpPost("ChangePassword")]
        //public async Task<IActionResult> ChangePassword(RetailerChangePassword retailer)
        //{
        //    Retailer r = context.Retailer.Where(x => x.Email == retailer.Email).FirstOrDefault();
        //    Dictionary<string, bool> status = new Dictionary<string, bool>();

        //    if (r != null)
        //    {
        //        if (r.Password == ComputeSha256Hash(retailer.OldPassword))
        //        {
        //            r.Password = ComputeSha256Hash(retailer.NewPassword);
        //            context.SaveChanges();
        //            status.Add("Change Password successful", true);
        //            return Ok(status);
        //        }
        //        else
        //        {
        //            status.Add("Invalid Password", false);
        //            return Ok(status);
        //        }
        //    }
        //    return BadRequest();
        //}


        [HttpPost("ChangePasswordCustomer")]
        public async Task<IActionResult> ChangePasswordCustomer(CustomerChangePassword customer)
        {
            Customer r = context.Customer.Where(x => x.Email == customer.Email).FirstOrDefault();
            Dictionary<string, bool> status = new Dictionary<string, bool>();

            if (r != null)
            {
                if (r.Password == ComputeSha256Hash(customer.OldPassword))
                {
                    r.Password = ComputeSha256Hash(customer.NewPassword);
                    context.SaveChanges();
                    status.Add("Change Password successful", true);
                    return Ok(status);
                }
                else
                {
                    status.Add("Invalid Password", false);
                    return Ok(status);
                }
            }
            return BadRequest();
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


        protected string Generate_otp()
        {
            char[] charArr = "0123456789".ToCharArray();
            string strrandom = string.Empty;
            Random objran = new Random();
            for (int i = 0; i < 4; i++)
            {
                //It will not allow Repetation of Characters
                int pos = objran.Next(1, charArr.Length);
                if (!strrandom.Contains(charArr.GetValue(pos).ToString())) strrandom += charArr.GetValue(pos);
                else i--;
            }
            return strrandom;
        }

        [NonAction]
        public void SendMail(string from, string To, String Subject, string Body)
        {
            MailMessage mail = new MailMessage(from, To);
            mail.Subject = Subject;
            mail.Body = Body;

            //Attachment attachment = new Attachment(@"");
            //mail.Attachments.Add(attachment);
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);

            client.Credentials = new System.Net.NetworkCredential()
            {
                UserName = "justforzom2@gmail.com",
                Password = "268osgs862"
            };
            client.EnableSsl = true;
            client.Send(mail);
        }
    }
}
