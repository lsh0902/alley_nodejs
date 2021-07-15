import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.get('/lsh/:id/:age', (req,res) => {
  // console.log(req.path, req.headers);
  console.log(req.params, req.query);


  res.setHeader('key','any avlueeee')
  res.sendStatus(201).send('h');
  res.json({name : 'lshslhs'});
})

app.get('/', (req,res,next)=> {
  console.log('first');
  next('router');
}, (req,res,next)=> {
  console.log('sfd');
})
app.get('/', (req,res,next)=> {
  console.log('second');
  res.send('result');
})

app.get('/file1', (req,res) => {
  try{
    const data = fs.readFileSync('/fil.txt');
    res.send(data)
  } catch(error) {
    res.sendStatus(404);
  }
})

app.get('/file2', (req,res) => {
  fsAsync.readFile('./file.txt').then(res.send);
})

app.get('/file3', async (req,res) => {
  const data = await fsAsync.readFile('./file.txt');
  res.send(data);
})



app.use(express.json())
app.post('/', (req,res,next) => {
  console.log(req.body);
})

app.use((error, req,res,next) => {
  res.send('error!!!');
})

app.listen(8080);