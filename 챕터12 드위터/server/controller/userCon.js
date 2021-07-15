import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/userData.js';

const jwtSecretKey = 'dsfno43045'
const ExpireDate = '2d';
const salt = 4;

export async function login(req,res,next) {
  const {username, password} = req.body;
  const user = await userRepository.findByUsername(username);
  if(!user)  return res.status(401).json({ message : "존재하지 않는 사용자 or 비번 틀림"});
  const isValid = await bcrypt.compare(password, user.password);
  if(!isValid) return res.status(401).json({ message : "존재하지 않는 사용자 or 비번 틀림"});

  const token = createToken(user.id);
  res.status(201).json({token, username})
}

export async function signUp(req,res,next) {
  const {username, password, name, email, url} = req.body;
  const found = await userRepository.findByUsername(username);
  if(found) {
    return res.status(409).json({message : '이미 존재하는 사용자'});
  }
  const hashed = await bcrypt.hash(password, salt);
  const userId = await userRepository.createUser({
    username,
    passworod : hashed,
    name,
    email,
    url
  });

  const token = createToken(userId);
  res.status(201).json({token, username})
}

export async function me(req, res, next) {
  const user = userRepository.findById(req.userId);
  if(!user) return res.status(404).json({ message : "user not found" });
  res.status(200).json({ token : req.token, username : user.username});
}

function createToken(userId) { 
  return jwt.sign({
    id : userId,
    isAdmin : false
  }, jwtSecretKey, {
    expiresIn : ExpireDate
  })
}