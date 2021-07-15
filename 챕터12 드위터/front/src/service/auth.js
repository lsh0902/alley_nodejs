import axios from "axios";
export default class AuthService {

  constructor(base, storage) {
    this.instance = axios.create({
      baseURL : base,
    })
    this.storage = storage;
  }

  async login(username, password) {
    const result = await this.instance.post(`/auth/login`, { username, password }).then(res => res.data).catch(console.log);
    this.storage.save(result.token);
    
    return result;
  }

  async me() {
    return {
      username: 'ellie',
      token: 'abc1234',
    };
  }

  async logout() {
    this.storage.clear();
  }

  async signup(username, password, name, email, url) {
    return {
      username: 'ellie',
      token: 'abc1234',
    };
  }
}
