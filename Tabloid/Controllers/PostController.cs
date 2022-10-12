using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        /*
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }
        */
        

        [HttpPost]
        public IActionResult Post(Post post)
        {
            post.UserProfileId = 1;

            post.CreateDateTime = DateTime.Now;
            post.PublishDateTime = DateTime.Now;

            if (string.IsNullOrWhiteSpace(post.ImageLocation))
            {
                post.ImageLocation = null;
            }

           
            _postRepository.AddPost(post);

            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        /*
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
        */
    }
}
