import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const features = [
    { name: 'Wolffs Bank', description: 'Aqui você é um mebro e não um número.' },
    { name: 'Wolffs Bank', description: ' baixe o nosso app, dê-nos dicas, sugestões para melhorias e contruamos "JUNTOS" a nossa comunidade..' },
   
  ]

const Marketing = () =>{
    return (
 
    <div className="bg-cinzaFundo">
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16  lg:max-w-7xl lg:grid-cols-2 lg:px-14">
            <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 ">
                <img src="celular.png" className="rounded-lg bg-gray-100 w-15" />
            </div>
            
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">O Wolff's Bank também tem aplicativo!</h2>
            <p className="mt-4 text-gray-500">
            Aqui você é um mebro e não um número.<br/>
            Conheça agora o nosso app e veja como é prático controlar sua vida finaceira .
            </p>
           
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>

        </div>
    </div>

    )
}

export default Marketing;