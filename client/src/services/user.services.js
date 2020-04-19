import axios  from "axios";

class UserDataService {
  signIn(data) {
    return axios.post('/api/user/signin', data);
  }

  signUp(data) {
    return axios.post(`/api/user/signup`, data);
  }

  logout(data) {
    return axios.post("/api/user/logout", data);
  }

  getAll() {
    return axios.put("/api/user");
  }
}

export default new UserDataService();