import Sidebar from "../components/sidebar/Sidebar";
import "../styles/pages/homepage.sass";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      
      <div className="conteudo-principal">
        <div className="espaco-foto">
          <img src="../img/my-fotos/foto-social.jpg" alt="foto-social"/>
        </div>
        <div className="text-homepage">
          <h2>Olá!</h2>
          <h1>Eu sou <span className="span-text">Jhonatan Silva</span></h1>
          <h3>Eu sou um <span className="span-text">Desenvolvedor</span> Front-End</h3>
          
        </div>
        <div className="container-btn-bg">
          <button className="btn-curriculo">Currículo</button>
          <button className="btn-portfolio">Portfolio</button>
          
          <div class="bg-absolute">background 1</div>
        </div>
        
      </div>
    </div>
  )
}

export default Homepage