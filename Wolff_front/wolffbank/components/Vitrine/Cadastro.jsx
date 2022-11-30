import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createPassword, createSession } from "../../service/api";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const cadastrar = () => {
    //aqui enviar para api utilizando axios
    alert(email);
    alert(password);
    //aqui são os campos do formulário
    let dados = {
      nome: nome,
      sobrenome: sobrenome,
      celular: celular,
      endereco: endereco,
      email: email,
      cpf: cpf,
    };

    createSession(dados).then((data) =>
      createPassword({ senha: password, fk_cliente: data.data.id }).then(
        (res) => console.log(res)
      )
    );
  };

  return (
    <div className="all flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 image-login">
      <div className="border-preto flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg border rounded-lg">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Seja um dos nossos!
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="user"
                  type="text"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nome"
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="user"
                  type="text"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(event) => setSobrenome(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="user"
                  type="text"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="endereco"
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="user"
                  type="text"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Celular"
                  value={celular}
                  onChange={(event) => setCelular(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="user"
                  type="text"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Crie uma senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-loginCor border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-preto placeholder-preto focus:z-10 focus:border-loginCor focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="button"
                onClick={cadastrar}
                className="group relative flex w-full justify-center rounded-md border border-loginCor py-2 px-4 text-sm font-medium text-loginCor focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
