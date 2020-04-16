import axios  from "axios";

class PatientDataService {
  getAll() {
    return axios.get('/api/patients');
  }

  get(id) {
    return axios.get(`/api/patients/${id}`);
  }

  create(data) {

    console.log(data);
    return axios.post("/api/patients", data);
  }

  update(id, data) {
    return axios.put(`/api/patients/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/api/patients/${id}`);
  }

  deleteAll() {
    return axios.delete(`/api/patients`);
  }

  findByName(name) {
    return axios.get(`/api/patients?name=${name}`);
  }
}

export default new PatientDataService();