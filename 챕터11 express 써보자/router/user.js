import express from 'express';

const router = express.Router();

router
.get('/', (req, res)=> {
  res.status(200).send('get user!!');
}).post((req, res)=> {
  res.status(201).send('post user!');
})

export default router;