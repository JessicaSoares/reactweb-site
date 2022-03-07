import axios from "axios";

export default axios.create({
  baseURL: "https://observatorioapp.parauapebas.pa.gov.br/api",
  headers: {
    "Content-type": "application/json"
  }
});