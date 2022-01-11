import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  download() {
    return http.get("/tutorials/download");
  }

  get(grupo) {
    return http.get(`/tutorials/${grupo}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(grupo, data) {
    return http.put(`/tutorials/${grupo}`, data);
  }

  delete(grupo) {
    return http.delete(`/tutorials/${grupo}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();