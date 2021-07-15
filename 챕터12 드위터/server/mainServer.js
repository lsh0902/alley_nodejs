import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetRouter from './controller/tweet.js';
import userRouter from './controller/user.js';
import { resourceLimits } from 'worker_threads';
import { body, param, validationResult } from 'express-validator';

const app = express();

app.use(express.json());
app.use(helmet())
app.use(morgan('tiny'))
app.use(cors({
  origin : ['http://localhost:3000']
}))

// app.post('/users', 
// [
//   body('name').notEmpty().withMessage('입력해라 이름...!').isLength({min:2}).withMessage('이름 두글자 이상이닷'),
//   body('job.name').notEmpty(),
//   body('age').notEmpty().isInt().withMessage('숫자 입력 ㄱ')
// ], (req, res, next)=>{
//   const error = validationResult(req);
//   if(!error.isEmpty()) {
//     res.status(400).json({message:error.array()})
//   }else {
//     res.sendStatus(201);
//   }
// })


app.use('/tweets', tweetRouter);
app.use('/auth', userRouter)

app.use((req,res,next)=>{
  res.sendStatus(404);
});

app.use((error, req,res,next)=>{
  console.error(error);
  res.sendStatus(500);
})

app.listen(8080);