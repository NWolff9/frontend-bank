import { Fragment } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Cadastro = () =>{
    return (
      <div className='all flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 image-login'>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg border rounded-lg">
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
                  <input
                    id="email-address"
                    name="email"
                    required
                    className="bg-transparente border my-6 relative block w-full appearance-none rounded-lg  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Username"
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
                    className="bg-transparente border my-6 relative block w-full appearance-none rounded-lg  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                    className="bg-transparente border my-6 relative block w-full appearance-none rounded-lg  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Crie uma senha"
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
                    className="bg-transparente border my-6 relative block w-full appearance-none rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                
  
               
              
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                    Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Cadastro;