<<<<<<< HEAD
#pragma checksum "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b41fe11fce80ebdf67b96ea8cb8df695de6e1161"
=======
#pragma checksum "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b41fe11fce80ebdf67b96ea8cb8df695de6e1161"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ProductImages_Delete), @"mvc.1.0.view", @"/Views/ProductImages/Delete.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b41fe11fce80ebdf67b96ea8cb8df695de6e1161", @"/Views/ProductImages/Delete.cshtml")]
    public class Views_ProductImages_Delete : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<OnlineShopping.Models.ProductImages>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
<<<<<<< HEAD
#line 3 "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml"
=======
#line 3 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
  
    ViewData["Title"] = "Delete";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>ProductImages</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
<<<<<<< HEAD
#line 15 "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml"
=======
#line 15 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
       Write(Html.DisplayNameFor(model => model.ImagePath));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
<<<<<<< HEAD
#line 18 "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml"
=======
#line 18 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
       Write(Html.DisplayFor(model => model.ImagePath));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
<<<<<<< HEAD
#line 21 "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml"
=======
#line 21 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
       Write(Html.DisplayNameFor(model => model.Product));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
<<<<<<< HEAD
#line 24 "C:\Users\LENOVO\source\repos\OnlineShopping\Views\ProductImages\Delete.cshtml"
=======
#line 24 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Delete.cshtml"
>>>>>>> d0f88a75b2af5b9e6bbd0437fd644b268c34d5fb
       Write(Html.DisplayFor(model => model.Product.BrandName));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
        </dd class>
    </dl>
    
    <form asp-action=""Delete"">
        <input type=""hidden"" asp-for=""TbProductImageId"" />
        <input type=""submit"" value=""Delete"" class=""btn btn-danger"" /> |
        <a asp-action=""Index"">Back to List</a>
    </form>
</div>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<OnlineShopping.Models.ProductImages> Html { get; private set; }
    }
}
#pragma warning restore 1591
