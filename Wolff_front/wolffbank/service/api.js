import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const createSession = async(id,nome,sobrenome,celular,endereco,email,cpf,foto) => {

  let dados = {
    "id": id,
    "nome": nome,
    "sobrenome": sobrenome,
    "celular": celular,
    "endereco": endereco,
    "email": email,
    "cpf": cpf,
    "foto": foto
}
  return api.post('/cliente/', dados);
};

export const logar = async(id, senha) => {
  return api.get("/usuario/", { senha, id } );
};