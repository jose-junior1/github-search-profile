import { useState } from "react";
import Perfil from "./components/Perfil";
//import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";

function App() {
  //const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <div className="container usuarioGitHub">
      <label htmlFor="nameGit">Insira seu nome de usuário no GitHub: </label>
      <input
        id="nameGit" 
        type="text" 
        onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Ex.: usuario-x"/>
    </div>

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}></Perfil>
        <RepoList nomeUsuario={nomeUsuario}></RepoList>
      </>
    )}
    
    {/* <Formulario className={`formulario ${formularioEstaVisivel ? 'ativo' : ''}`} />

    <div className="container">
      <button className="mostra-formulario" type="button" onClick={() => setFormularioEstaVisivel( !formularioEstaVisivel)}>Exibir formulário</button>
    </div> */}
    </>   
  );
};

export default App
