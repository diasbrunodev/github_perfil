import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');

  const searchRepository = () => {
    ReposList(nomeUsuario);
  }

  return (
    <>
      <div className="top">

        <h1>Repository Search</h1>

        <div className="topForm">
          <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Usuário" />

          <button type="submit" onClick={searchRepository}>Search</button>
        </div>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
