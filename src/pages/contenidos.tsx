import * as React from 'react'
import Link from 'gatsby-link'

const Contenidos = () => (
  <div>
    <h1>Índice de Contenidos</h1>
    <h2>Libros disponibles:</h2>

    <ul>
      <li><Link to="/genesis/">Génesis</Link></li>
      <li><Link to="/exodo">Éxodo</Link></li>
      <li><Link to="/levitico">Levítico</Link></li>
      <li><Link to="/numeros">Números</Link></li>
      <li><Link to="/deuteronomio">Deuteronomio</Link></li>
    </ul>
    <Link to="/">Volver al inicio.</Link>
  </div>
)

export default Contenidos
