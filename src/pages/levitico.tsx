import * as React from 'react'
import Link from 'gatsby-link'

const Levitico = () => {
  
  const chapters = Array.from(Array(27).keys())
  
  return (
    <div>
      <h1>El libro del Éxodo</h1>
      <h2>Capítulos:</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {chapters.map((chapter, idx) => <span
          style={{border: '1px solid #999', width: '4rem', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <a href={`/mp3/levitico/${idx + 1}.mp3`} style={{ padding: '1rem', display: 'block', textAlign: 'center'}}>
              { idx + 1 }
            </a>
          </span>)}
      </div>

      <br />
      <Link to="/contenidos/">Volver al índice.</Link>
    </div>
  )
}

export default Levitico