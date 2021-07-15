import express from 'express';
import postRouter from './router/post.js'
import userRouter from './router/user.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json()); //rest api에서 body를 편하게 파싱 해올 수 있음.
app.use(express.urlencoded({extended : false})) // HTML form -> body로 파싱 넣어줌. 서버사이드 렌더링에 유용
app.use(express.static('폴더이름')) // 폴더이름 내에 있는 파일들은 url로 접근 가능하게 함.  /index.html
app.use(cors({
  origin : ['http:127.0.0.1:5500']
}));
app.use(cookieParser());

app.use('/posts', postRouter);
app.use('/user', userRouter);

app.listen(8080);