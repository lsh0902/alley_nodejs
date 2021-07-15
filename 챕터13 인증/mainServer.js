import express from 'express';
import { param, body, validationResult } from 'express-validator';
const app = express();
app.use(express.json());

const validate = (req, res, next)=>{
  const error = validationResult(req);
  if(error.isEmpty()) {
    return next();
  } else {
    //만약 보내고 싶은 에러메시지 형식을 수정하고 싶다 하면 여기서만 하면 됨
    return res.status(400).json({message : error.array()[0].msg});
  }
}

app.post('/users', 
[
  body('name').trim().notEmpty().withMessage('입력해라 이름...!').isLength({min:2}).withMessage('이름 두글자 이상이닷'),
  body('job.name').notEmpty(),
  body('age').notEmpty().isInt().withMessage('숫자 입력 ㄱ'),
  validate,
], (res,req) => {
  res.sendStatus(201);
})

app.get('/:email', [
  param('email').isEmail().withMessage('이메일 입력해라').normalizeEmail(),
  validate
], (req,res,next) => {
  res.send('a');
})

app.listen(8080);