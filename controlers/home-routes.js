const router = require('express').Router();
const Dish = require('../models/post');

// route to get all dishes
router.get('/', async (req, res) => {
    
    postData = await post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((posts) => post.get({ plain: true }));
        res.render('all', { posts });
      });
  
  // route to get one dish
  router.get('/post/:id', async (req, res) => {
    try{ 
        const postData = await posts.findByPk(req.params.id);
        if(!postData) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }
        const posts = postData.get({ plain: true });
        res.render('post', dish);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;