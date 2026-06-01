import img2026 from './assets/img2026.jpg'

function App() { 
  return (
    <div className="tarjeta">
      <h2>Julián Machado</h2>
      <p>Edad: 33</p>
      <p>Carrera: Desarrollo de Software</p>
      <p>Color favorito: Azul</p>
      <img
        src={img2026}
        alt="Mi foto"
        className="mi-foto"
        width="250" height="250"
      />
      <button className="btn-contactar">Contactar</button>
    </div>
  )
}
export default App 
