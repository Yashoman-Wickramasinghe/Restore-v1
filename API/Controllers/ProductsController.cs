using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController(StoreContext context) : ControllerBase
    {
        [HttpGet] // query for a result
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id}")] // api/products/2
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            var product = await context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }
    }
}