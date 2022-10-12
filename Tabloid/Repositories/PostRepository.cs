using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;
using System;
using Microsoft.Data.SqlClient;

namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public void AddPost(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Post (Title, Content, CategoryId, ImageLocation, 
                                        PublishDateTime, CreateDateTime, IsApproved, UserProfileId)
                                         OUTPUT INSERTED.ID
                                         VALUES (@Title, @Content, @CategoryId, @ImageLocation, @PublishDateTime, @CreateDateTime, @IsApproved, @UserProfileId)";
                    DbUtils.AddParameter(cmd, "@Title", post.Title);
                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
                    DbUtils.AddParameter(cmd, "@ImageLocation", post.ImageLocation == null ? DBNull.Value : post.ImageLocation);
                    DbUtils.AddParameter(cmd, "@PublishDateTime", DateTime.Now);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", DateTime.Now);
                    DbUtils.AddParameter(cmd, "@IsApproved", post.IsApproved);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }

            }
        }
    }
}
