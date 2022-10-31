import { Fragment } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";



const About = () =>{
   
   
      const data = [
        {
          label: "Sobre nós",
          value: "Sobre",
          desc:  `Com o sucesso do banco, Conta Black, o programador Nathã Wolff
          se sentiu identificado com a história do empreendedor Sérgio All e decidiu
          fazer sua vontade de empreender encaixar com seu desejo de ajudar os outros
          em um só projeto, Wolff's Bank.
          O Wolff's Bank é um banco digital prático e rápido, com interfaces dinâmicas 
          e intuitivas focada na boa experiência do usuário, aliás, todos tem o direito
          de controlar a sua própria vida financeira e o nosso banco está aqui com a missão
          de tornar o seu direito a sua realidade.`,
        },
        {
          label: "Serviços",
          value: "Serv",
          desc: `Nossos serviços são baseados na necessidade do usuário, a princípio temos as funcionalidades de
          empréstimos, pix, visibilidade de extrato, efetivação de transições e por fim oferecemos cartões debito e crédito`,
        },
     
        {
          label: "Contatos",
          value: "Cont",
          desc: `Entre em contato conosco através dos telefones: (19) 994806787, (19) 35798233
          Ou pelas redes sociais: Instagram - @Wolffs_Bank, Twitter - @Bank_Wolffs, Facebook - WolffsBank `
        },
      ];
      return (
        <Tabs value="labels">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      );
      
    }
    
    


export default About;