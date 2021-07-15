import express from 'express';

const router = express.Router();

router
.get('/', (req, res)=> {
  res.status(200).send('get post!!');
}).post((req, res)=> {
  res.status(201).send('post post!');
})

export default router;