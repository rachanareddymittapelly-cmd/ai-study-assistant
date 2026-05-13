const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogapp')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Create Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Blog = mongoose.model('Blog', blogSchema);

// API: Create a blog post
app.post('/blogs', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content
  });
  await blog.save();
  res.json({ message: 'Blog saved!', blog: blog });
});

app.listen(5000, () => console.log('Server running on 5000'));