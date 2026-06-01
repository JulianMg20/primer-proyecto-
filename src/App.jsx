import img2026 from './assets/IMG2026.jpg'

function App() {
  return (
    <div>

      <header style={{ background: '#1a1a2e', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Mi Perfil Personal</h1>
        <p style={{ fontSize: '14px', opacity: 0.7 }}>Aprendiz SENA · Desarrollo de Software</p>
      </header>

      <main>
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
          <h3>Mis hobbies</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li> Videojuegos</li>
            <li> Escuchar música</li>
            </ul>
          <button className="btn-contactar">Contactar</button>
        </div>
      </main>

      <footer style={{ background: '#1a1a2e', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>© 2026 Julián Machado · SENA</p>
      </footer>

    </div>
  )
}

export default App