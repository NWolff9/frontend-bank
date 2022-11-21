const callouts = [
    {
      name: 'Transferências',
      description: 'Realize suas transferências',
      imageSrc: 'https://www.capitecbank.co.za/globalassets/approved-images/transact/sendcash---desktop2x-compressed.jpg?w=1200&h=630',
      href: '#',
    },

    {
      name: 'Cartões',
      description: 'Veja seus cartões',
      imageSrc: 'https://portalonbr.com/wp-content/uploads/cartao-acesso-3858.jpg',
      href: '#',
    },

    {
      name: 'Emprestimo',
      description: 'Aqui você pode realizar e administrar seus emprestimos',
      imageSrc: 'https://cdn.rcn67.com.br/upload/dn_noticia/2019/06/casal-orcamento-familiar.jpg',
      href: '#',
    },

    {
        name: 'Extrato',
        description: 'Veja o que entrou e saiu da sua conta',
        imageSrc: 'https://www.eurodicas.com.br/wp-content/uploads/2022/05/imposto-de-renda-em-portugal.jpg',
        href: '#',
    },

    {
        name: 'Gerenciamento de contas',
        description: 'Organize o seu dinheiro de acordo com os seus objetivos',
        imageSrc: 'https://brain4finance.com.br/wp-content/uploads/2020/07/finan%C3%A7as-para-casais-3.jpg',
        href: '#',
    },

    {
        name: 'Contatos',
        description: 'O espaço onde você pode gerenciar seus contatos',
        imageSrc: 'http://conteudo.imguol.com.br/c/entretenimento/d4/2021/01/28/mulher-negra-olhando-o-celular-1611864034350_v2_1366x768.jpg',
        href: '#',
    },
      
    
  ]
  
  export default function Finalidades() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">O Controle da sua vida em suas mãos!</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  