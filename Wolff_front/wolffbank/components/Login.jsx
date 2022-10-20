import { Fragment } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'


const Login = () =>{
    const router = useRouter()
    return (
      <div className='all flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 image-login'>
        <div className="border-preto flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg border rounded-lg">
          <div className="w-full max-w-md space-y-8">
            <div>
             
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Entre com sua conta
              </h2>
             
             
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
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
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="text-loginCor">
                  <a onClick={() => router.push("/cadastro")}  className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                    Criar uma conta
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-loginCor bg-indigo-600 py-2 px-4 text-sm font-medium text-loginCor focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-loginCor" aria-hidden="true" />
                  </span>
                    Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login;