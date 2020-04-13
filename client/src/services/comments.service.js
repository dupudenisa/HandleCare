import http from "../http-common";

class CommentsDataService {
  getAll() {
    return http.get("/comments");
  }

  get(id) {
    return http.get(`/comments/${id}`);
  }

  create(data) {
    return http.post("/comments", data);
  }

  update(id, data) {
    return http.put(`/comments/${id}`, data);
  }

  delete(id) {
    return http.delete(`/comments/${id}`);
  }

  deleteAll() {
    return http.delete(`/comments`);
  }

  findByComment(comments) {
    return http.get(`/comments?comments=${comments}`);
  }
}

export default new CommentsDataService();