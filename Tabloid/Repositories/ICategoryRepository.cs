﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        void Add(Category category);
        List<Category> GetAll();
        void UpdateCategory(Category category);
        void DeleteCategory(int id);
    }
}