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

  downloadescolasealunos() {
    return http.get("/tutorials/downloadescolasealunos");
  }

  downloadnotaideb() {
    return http.get("/tutorials/downloadnotaideb");
  }

  downloadbovinos() {
    return http.get("/tutorials/downloadbovinos");
  }

  downloadimportacao() {
    return http.get("/tutorials/downloadimportacao");
  }

  downloadsaldo() {
    return http.get("/tutorials/downloadsaldo");
  }

  downloadexportacao() {
    return http.get("/tutorials/downloadexportacao");
  }

  downloadprodutoscap() {
    return http.get("/tutorials/downloadprodutoscap");
  }

  downloadiluminacao() {
    return http.get("/tutorials/downloadiluminacao");
  }

  downloadqueimadas() {
    return http.get("/tutorials/downloadqueimadas");
  }

  downloadpequenoporte() {
    return http.get("/tutorials/downloadpequenoporte");
  }

  downloadmedioporte() {
    return http.get("/tutorials/downloadmedioporte");
  }

  downloadgrandeporte() {
    return http.get("/tutorials/downloadgrandeporte");
  }

  downloaddespesaspessoal() {
    return http.get("/tutorials/downloaddespesaspessoal");
  }


  downloadcomissionados() {
    return http.get("/tutorials/downloadcomissionados");
  }


  downloadefetivados() {
    return http.get("/tutorials/downloadefetivados");
  }


  downloadcontratados() {
    return http.get("/tutorials/downloadcontratados");
  }


  downloaddemais() {
    return http.get("/tutorials/downloaddemais");
  }

  downloadmicroempresa() {
    return http.get("/tutorials/downloadmicroempresa");
  }

  downloadnaoinformado() {
    return http.get("/tutorials/downloadnaoinformado");
  }

  downloadesgoto() {
    return http.get("/tutorials/downloadesgoto");
  }


  downloadagua() {
    return http.get("/tutorials/downloadagua");
  }

  downloadlixo() {
    return http.get("/tutorials/downloadlixo");
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