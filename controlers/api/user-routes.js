const router = require('express').Router();
const user = require('../../models/user');


router.post('/', async (req, res) => {
    try {
      const userData = await user.create({
        user_name: req.body.user_name,
        ID: req.body.id,
        password: req.body.password
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  