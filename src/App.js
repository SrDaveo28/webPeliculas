
import './App.css';
import Pelicula from './pelicula';
import { useState } from 'react';
import PageWrapper from './PageWrapper';

import PeliculasJson from './peliculas.json';
import Paginacion from './Paginacion';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  /* const [peliculas, setPeliculas] = useState([]); */
  const TOTAL_POR_PAGINA = 7;

   let peliculas = PeliculasJson;

  /* const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let respuesta = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        "Origin": "https://lucasmoy.dev/data/react/peliculas.json"
      }
    }); 

    var json = await respuesta.json();

    alert(json);
    debugger;
    
     setPeliculas(json); 
  }*/

  
  const cargarPeliculas = () => {
   peliculas = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);
  }

  const getTotalPaginas = () => {
    return Math.ceil(peliculas.length / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();
  return (

    <PageWrapper>

      {/* <button onClick={buscarPeliculas}>Pruebas</button> */}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {

        setPaginaActual(pagina);

      }} />


      {
        peliculas.map(pelicula =>

          <Pelicula
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}
            img={pelicula.img}
          >

            {pelicula.descripcion}

          </Pelicula>

        )
      }




    </PageWrapper>







  );
}

export default App;
