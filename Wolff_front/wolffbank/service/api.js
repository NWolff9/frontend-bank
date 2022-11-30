import axios from "axios";

const URL = "http://127.0.0.1:8000"

export const createSession = async (dados) => {
  return axios.post(`http://127.0.0.1:8000/cliente/`, dados)
};

export const createPassword = async (dados) => {
  try {
    return axios.post(`${URL}/usuario/`, dados)
  } catch (err) {
    console.log(err)
  }
};

export const logar = async () => {
  return axios.get(`${URL}/cliente/`)
};