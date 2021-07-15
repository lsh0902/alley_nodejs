// const counter = require('./exports 노드버전');
// let a = counter.getCount();

import {getCount} from './exports 노드버전.js';
// import * as counter from './exports 노드버전.js';
let a = getCount();


console.log(a);