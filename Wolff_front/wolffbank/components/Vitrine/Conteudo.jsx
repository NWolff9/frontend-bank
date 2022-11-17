import { Fragment } from 'react'
const features = [
  { name: 'Multiplas plataformas', description: 'Outra plataforma, o mesmo banco!' },
  { name: 'Wolffs Bank', description: 'A conta que vai levar você ao controle da sua vida financeira.' },
  { name: 'Chave de segurança', description: 'Veja como é fácil cadastrar' },
  { name: 'Débito e Crédito', description: 'O cartão ideal para a sua vida!' },
]

export default function Conteudo() {
  return (
    <div className="bg-cinzaFundo">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tudo pensado para você!</h2>
          <p className="mt-4 text-preto">
                Saiba mais sobre as soluções e os serviços que agilizam sua vida.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-roxonav pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-preto">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src="tabletmodelo.png"
           
            className="rounded-lg bg-gray-100 shadow-2xl"
          />
          <img
            src="https://todecacho.com.br/wp-content/uploads/2019/06/cortes-de-cabelo-masculino-crespo-1-1-630x420.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow-2xl"
          />
          <img
            src="http://blog.riopae.com.br/wp-content/uploads/2019/08/Comodidade-que-os-aplicativos-trazem-para-as-pessoas.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow-2xl"
          />
          <img
            src="modelocartao.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}