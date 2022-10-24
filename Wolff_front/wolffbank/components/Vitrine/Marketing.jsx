import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const features = [
    { name: '', description: '' },
    { name: '', description: '' },
   
  ]

const Marketing = () =>{
    return (
 
    <div className="bg-cinzaFundo">
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16  lg:max-w-7xl lg:grid-cols-2 lg:px-14">
            
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">O Wolff's Bank também tem aplicativo!</h2>
            <p className="mt-4 text-gray-500">
            Aqui você é um mebro e não um número.<br/>
            Conheça agora o nosso app e veja como é prático controlar sua vida finaceira.<br/>
            </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 ">
             <img src="celular.png" className="rounded-lg bg-gray-100 w-15" />
        </div>

        </div>
    </div>

    )
}

export default Marketing;