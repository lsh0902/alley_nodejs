import * as userRepository from './userData.js';
let tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    userId : '1',
  },
  {
    id: 2,
    text: '하하하하하하',
    createdAt: '2021-06-09T04:20:57.000Z',
    userId : '1',
  },
  {
    id: 3,
    text: 'dhflwldlfsldf jai하',
    createdAt: '2021-06-09T04:20:57.000Z',
    userId : '1',
  },
];

export async function getTweet(username) {
  return Promise.all(
    tweets.map(async (t) => {
      const {username, name, url} = await userRepository.findById(t.userId);
      return {...t, username, name, url};
    })
  );
}

export async function getTweetByUserName(username) {
  return getTweet().then((tweet) => tweet.filter(t => t.username === username));
}

export async function getTweetById(id) {
  const found = tweets.find(tweet => tweet.id == id);
  if(!found) return null;
  const {name, url, username } = await userRepository.findById(found.userId);
  return {...found, name, url, username};
}

export async function createTweet(text, userId) {
  const tweet = {
    id : Date.now().toString(),
    text,
    createdAt : new Date(),
    userId
  }
  tweets = [tweet, ...tweets];
  return getTweetById(tweet.id);
}

export async function updateTweet(id, text) {
  const tweet = tweets.find(t => t.id == id);

  if(tweet) tweet.text = text;
  return getTweetById(tweet.id);
}

export async function deleteTweet(id) {
  tweets = tweets.filter(t => t.id != id);
}