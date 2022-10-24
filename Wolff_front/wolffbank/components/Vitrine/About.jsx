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
                  se sentiu indentificado com a história do empreendedor Sérgio All e decidiu
                  tornar sua vontade de empreender se encaixar com seu desejo de ajudar os outros
                  em um só projeto, Wolff's Bank. 
                                    `,
        },
        {
          label: "Serviços",
          value: "Serv",
          desc: "serviçolas",
        },
     
        {
          label: "Contatos",
          value: "Cont",
          desc: "contatolas",
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