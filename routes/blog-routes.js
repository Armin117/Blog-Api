
const express = require('express')
const {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getById,
  getByUserId,
  updateBlog,
} =  require( "../controllers/blog-controller");
const blogRoute = express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.post("/add", addBlog);
blogRoute.put("/update/:id", updateBlog);
blogRoute.get("/:id", getById);
blogRoute.delete("/:id", deleteBlog);
blogRoute.get("/user/:id", getByUserId);

module.exports = blogRoute
