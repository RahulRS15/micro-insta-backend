const Post = require('../models/Post');
const User = require('../models/User');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

const createPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, description, images } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const post = await Post.create({
      title,
      description,
      user_id: userId,
      images
    });

    user.post_count += 1;
    await user.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

module.exports = { getAllPosts, createPost };
