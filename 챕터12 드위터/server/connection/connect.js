import {Server} from 'socket.io';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';

class Socket {
  constructor(server) {
    this.socketIO = new Server(server, { cors : '*' });
    
    this.socketIO.use((socket, next) => {
      const token = socket.handshake.auth.token;
      console.log(token, '토큰');
      if(!token) {
        console.log('토큰 없네');
        return next(new Error('Authentication error'));
      } else {
        jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
          if(error) {
            return next(new Error('Authentication error'));
          }
          console.log('다음으로');
          next();
        })
      }
    })
    
    this.socketIO.on('connection', () => {
      console.log('연결');
      this.socketIO.emit("dwitter", 'hi guys😁');
    })
  }
}

let socket;
export function Init(server) {
  if(!socket) {
    socket = new Socket(server);
  }
}

export function getSocketIO() {
  if(!socket) throw new Error('init first');
  return socket.socketIO;
}