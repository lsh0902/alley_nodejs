import axios from 'axios';

export default class TweetService {
  constructor(base, storage, authErrorEventBus) {
    this.instance = axios.create({
      baseURL : base,
    })
    this.storage = storage;
    this.authErrorEventBus = authErrorEventBus;
  }

  setToken() {
    this.instance.defaults.headers.common['Authorization'] = this.storage.get();
  }

  async getTweets(username = '') {
    return await this.instance.get('/tweets',{
        params : {
          user : username || ''
        },
        headers : {
          Authorization : this.storage.get()
        }
      }).then(res => res.data).catch(this.isExpired);
  }

  async postTweet(text) {
    return await axios.post('http://localhost:8080/tweets', {
      id: Date.now(),
      createdAt: new Date(),
      userId : 1,
      text,
      headers : {
        Authorization : this.storage.get()
      }
    }).then(res => res.data);
  }

  async deleteTweet(tweetId) {
    await axios.delete(`${this.baseUrl}/tweets/${tweetId}`, {
      params : {
        id : tweetId
      },
      headers : {
        Authorization : this.storage.get()
      }
    }).then(console.log);
  }

  async updateTweet(tweetId, text) {
    return await axios.put(`${this.baseUrl}/tweets/${tweetId}`, {
      text,
      tweetId,
      headers : {
        Authorization : this.storage.get()
      }
    }).then(res => res.data);
  }


  isExpired = (e) => {
    if(e.response.status === 401) {
      console.log(this)
      this.authErrorEventBus.notify(e);
      return;
    }
  }

}

