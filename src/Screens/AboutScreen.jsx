import React from 'react'
import { Link } from 'react-router-dom' 

export default function AboutScreen() {
  return (
    <>
        <div>
            <h1>¿De que trata esta pagina?</h1>
            <p>Esta pagina es un espacio para compartir secretos de forma anónima. Cualquiera puede escribir un secreto y compartirlo con el mundo, sin miedo a ser juzgado. Es un lugar seguro para expresar lo que llevamos dentro.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    </>
  )
}
