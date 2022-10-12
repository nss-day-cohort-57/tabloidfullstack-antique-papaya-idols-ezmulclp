using System;
using Tabloid.Models;

namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int CategoryId { get; set; }
        public string ImageLocation { get; set; }
        public DateTime PublishDateTime { get; set; }
        public string Content { get; set; }
        public DateTime CreateDateTime { get; set; }
        public bool IsApproved { get; set; }
        public int UserProfileId { get; set; }
        //public Category Category { get; set; }


    }
}
