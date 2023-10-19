import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {/* vai pegar o valor digitado neste campo executando através do useState atualização do nome do usuário*/}
      {/* onBlur é o evento acionado ao sair do campo input clicando fora do campo*/}
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {/* condiçao para ser chamado o arquivo que faz a requisição da api; só quando for maior de 4 caracteres */}
      {/* para não dar erro ao tentar fazer a requisição antes de receber o dado do nome do usuário que é passado como parâmetro para a função que faz a requisição */}
      {nomeUsuario.length > 4 && (
        <>
        {/* chama os arquivos com funções que executam os códigos passando como parâmetro o nome do usuário*/}
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
