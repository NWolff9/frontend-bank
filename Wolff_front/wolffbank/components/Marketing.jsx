import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Marketing = () =>{
    return (
 

    <div className='paisagem'>
        <div>
            Agora também no celular, baixe o app!
        </div>
        <div className='flex justify-center'>
            <div className="w-96">
                <img src="celular.png" className="rounded-lg bg-gray-100"/>
            </div>
         </div>
    </div>

    )
}

export default Marketing;