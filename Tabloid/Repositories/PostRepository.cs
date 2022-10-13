using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;
using System;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

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
        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select p.Id AS PostId, p.Title,p.Content, p.ImageLocation, p.CreateDateTime,
                                        p.PublishDateTime, p.IsApproved, c.Id AS CategoryId , c.Name AS CategoryName, u.Id AS UserId, 
                                        u.DisplayName
                                    
                                    from Post p Left Join Category c
                                    on p.CategoryId = c.Id
                                    Left Join
                                    UserProfile As u
                                    ON p.UserProfileId = u.Id";

                    var posts = new List<Post>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Post post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "PostId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            PublishDateTime = DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                          
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "UserId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            }
                        };
                        posts.Add(post);
                    }
                    reader.Close();

                    return posts;
                }
            }
        }
    }
}
