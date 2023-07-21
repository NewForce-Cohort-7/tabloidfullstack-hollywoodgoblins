using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;

namespace TabloidFullStack.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAllCategories());
        }
    }
}
