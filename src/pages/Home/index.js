import ListaUsuarios from "../../components/ListaUsuarios";
import UsuarioForm from "../../components/UsuarioForm";
import { useState } from "react";
import "./style.css";

function Home() {
    const [isAgregando, setIsAgregando ] = useState(false);
    const[usuarios, setUsuarios] = useState([]);
  return (
    <div className="home">
      <button onClick={() => setIsAgregando(true)}>Agregar Usuario</button>
      {isAgregando && <UsuarioForm />}
      <ListaUsuarios />
    </div>
  );
}

export default Home;
