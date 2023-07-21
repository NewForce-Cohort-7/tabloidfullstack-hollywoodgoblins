﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;
using System.Security.Claims;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAllPosts());
        }
        [HttpGet("GetUsersPosts/{id}")]
        public IActionResult Get(int id)
        {
            List<Post> posts = _postRepository.GetPostsByUserId(id);
            if (posts == null)
            {
                return NotFound();
            }
            return Ok(posts);
        }
    }
}