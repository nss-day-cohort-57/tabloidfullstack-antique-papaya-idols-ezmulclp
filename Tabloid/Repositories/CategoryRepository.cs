using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }
        public void Add(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Category ([Name])
                                        OUTPUT INSERTED.ID
                                        VALUES (@Name)";
                    DbUtils.AddParameter(cmd, "@Name", category.Name);

                    category.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateCategory(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       UPDATE Category
                                        SET Name = @Name
                                        WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", category.Id);
                    DbUtils.AddParameter(cmd, "@Name", category.Name);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteCategory(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Category
                                        WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public List<Category> GetAll()

        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select * from Category";

                    var categorys = new List<Category>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Category category = new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        };
                        categorys.Add(category);
                    }
                    reader.Close();

                    return categorys;
                }
            }
        }
    }
}
