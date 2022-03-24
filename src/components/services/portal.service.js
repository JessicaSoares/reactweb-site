import http from "../../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  download() {
    return http.get("/tutorials/download");
  }

  downloaddefesas() {
    return http.get("/tutorials/downloaddefesas");
  }

  downloadaves() {
    return http.get("/tutorials/downloadaves");
  }

  downloadfolhapagamento() {
    return http.get("/tutorials/downloadfolhapagamento");
  }

  downloadagrifamiliar() {
    return http.get("/tutorials/downloadagrifamiliar");
  }

  
  downloadempregospormunicipio() {
    return http.get("/tutorials/downloadempregospormunicipio");
  }


  downloadempregosporsetor() {
    return http.get("/tutorials/downloadempregosporsetor");
  }

  
  downloadempregosporsexo() {
    return http.get("/tutorials/downloadempregosporsexo");
  }

    
  downloadpib() {
    return http.get("/tutorials/downloadpib");
  }
      
  downloadproducaoagricola() {
    return http.get("/tutorials/downloadproducaoagricola");
  }
  downloadproducaoanimal() {
    return http.get("/tutorials/downloadproducaoanimal");
  }

  downloadrebanhomunicipal() {
    return http.get("/tutorials/downloadrebanhomunicipal");
  }

  downloadaves() {
    return http.get("/tutorials/downloadaves");
  }

  downloadbovinos() {
    return http.get("/tutorials/downloadbovinos");
  }

  downloadprodutoscap() {
    return http.get("/tutorials/downloadprodutoscap");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();