using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;
using Microsoft.Extensions.Hosting;

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
        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepository.AddCategory(category);
            return CreatedAtAction("Get", new { id = category.Id }, category);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _categoryRepository.DeleteCategory(id);
                return NoContent(); // 204 No Content
            }
            catch (Exception ex)
            {
                // Log the error or handle it as appropriate
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error.");
            }
        }
    }
   
}
