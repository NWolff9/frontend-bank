import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import axios from "axios";
import { logar } from "../../service/api";

const Login = () => {
  const router = useRouter();
  const [api, setApi] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    event.preventDefault();
    logar().then((data) => {
      data.data.map((item, index) => {
        if (email == item.email) {
          router.push("/logado");
        } else {
          console.log("deu ruim");
        }
      });
    });
  };

  return (
    <div className="all flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 image-login">
      <div className="border-preto flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg border rounded-lg">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entre com sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
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
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-loginCor">
                <a className="font-medium">Esqueceu a senha?</a>
              </div>
              <div className="text-loginCor">
                <a
                  onClick={() => router.push("/cadastro")}
                  className="cursor-pointer font-medium"
                >
                  Criar uma conta
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-loginCor py-2 px-4 text-sm font-medium text-loginCor focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
