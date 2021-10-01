using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShopping.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimagesController : ControllerBase
    {
        public IHostingEnvironment hostingEnvironment;
        private readonly DB_OnlineShoppingContext _context;
        private readonly string AppDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");



        public TimagesController(IHostingEnvironment hostinge, DB_OnlineShoppingContext context)
        {
            hostingEnvironment = hostinge;
            _context = context;
        }


        [HttpPost("UploadImages")]
        public ActionResult<string> UploadImages()
        {
            Dictionary<string, bool> status = new Dictionary<string, bool>();

            try
            {
                var files = HttpContext.Request.Form.Files;
                if(files != null && files.Count > 0)
                {
                    foreach (var file in files)
                    {
                        FileInfo fi = new FileInfo(file.FileName);
                        //file.FileName
                        //var newFileName = "Image_" + DateTime.Now.TimeOfDay.Milliseconds + fi.Extension;
                        //ti.FilePath =
                        //var path = Path.Combine("", hostingEnvironment.ContentRootPath + "\\Images\\" + newFileName);
                        if (!Directory.Exists(AppDirectory))
                            Directory.CreateDirectory(AppDirectory);
                        var fileName = DateTime.Now.Ticks.ToString() + Path.GetExtension(file.FileName);
                        var path = Path.Combine(AppDirectory, fileName);
                        using (var stream  =  new FileStream(path, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }

                        Timages ti = new Timages();
                        ti.FilePath = fileName;
                        _context.Timages.Add(ti);
                        _context.SaveChanges();
                    }
                    status.Add("ImageUploaded", true);
                    return Ok(status);
                }
                else
                {
                    status.Add("ImageUploaded", false);
                    return Ok(status);
                }
            }
            catch (Exception)
            {
                throw;
            }

        }


        [HttpGet("GetOneImage")]
        public async Task<ActionResult<Timages>> GetOneImage()
        {
            Timages t =  await _context.Timages.FindAsync(9);
            return Ok(t);
        }
    }
}
