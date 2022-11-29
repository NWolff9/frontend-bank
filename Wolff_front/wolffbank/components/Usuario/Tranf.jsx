import { useState } from "react";

export default function Transf() {
  const [number, setNumber] = useState(0);
  const [contato, setContato] = useState("US");
  const [values, setValues] = useState([
    { value: 1 },
    { value: 5 },
    { value: 10 },
    { value: 20 },
    { value: 50 },
    { value: 100 },
  ]);

  const dados = {
    valor:number, usuario: contato
  }

  return (
    <>
      <div class="mx-auto w-full bg-white p-4">
        <div class="mt-2">
          <div className="font-semibold text-2xl">Quanto gostaria de enviar?</div>
          <div>
            <div className="valor-input flex text-black text-lg border-2 items-center w-96 border-black px-2">
              {number}
            </div>
          </div>
          <div class="flex justify-between text-base ">
            {values.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setNumber(number + item.value)}
                  class="mt-[14px] cursor-pointer truncate rounded-md border hover:bg-white hover:border-coral border-rosa p-3 text-black"
                >
                  R${item.value}.00
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4">
        <label
          htmlFor="contatos"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Escolha um de seus contatos
        </label>

        <select
          id="contatos"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={()=>{setContato(event.target.value)}}
        >
          <option value="US">Contato1</option>
          <option value="CA">Contato2</option>
          <option value="FR">Contato3</option>
          <option value="DE">Contato4</option>
        </select>
       
      </div>
      <div className="p-4">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => console.log(dados)}>Enviar</button>
      </div>

      <div className="p-4">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => setNumber(0)}>Apagar</button>
      </div>
    </>
  );
}
