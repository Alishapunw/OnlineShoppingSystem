#pragma checksum "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b5fdbf5accd12e61ec504f6f8bf1099bc55e64b2"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ProductImages_Details), @"mvc.1.0.view", @"/Views/ProductImages/Details.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b5fdbf5accd12e61ec504f6f8bf1099bc55e64b2", @"/Views/ProductImages/Details.cshtml")]
    public class Views_ProductImages_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<OnlineShopping.Models.ProductImages>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
  
    ViewData["Title"] = "Details";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Details</h1>\r\n\r\n<div>\r\n    <h4>ProductImages</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 14 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ImagePath));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 17 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
       Write(Html.DisplayFor(model => model.ImagePath));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 20 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Product));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 23 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
       Write(Html.DisplayFor(model => model.Product.BrandName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n    </dl>\r\n</div>\r\n<div>\r\n    <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 662, "\"", 700, 1);
#nullable restore
#line 28 "H:\LTI_TRAINING\OnlineShoppingApplication\ASP\OnlineShoppingSystem\Views\ProductImages\Details.cshtml"
WriteAttributeValue("", 677, Model.TbProductImageId, 677, 23, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\r\n    <a asp-action=\"Index\">Back to List</a>\r\n</div>\r\n");
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
