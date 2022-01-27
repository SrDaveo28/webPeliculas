export default function Paginacion(props) {



    const getPaginas = () => {
        const resultado = [];

        for (var i = 0; i < props.total; i++) {
            let pagina = i + 1;
            resultado.push(
                <a onClick={() => props.onChange(pagina)}
                    className={props.pagina === pagina ? 'active' : ''}>
                    {pagina}
                </a>
            )

        }

        return resultado;
    }
    return (

        <div className="topbar-filter">
            <p>Encontramos <span>{props.total}</span> peliculas</p>


            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}:</span>

                {getPaginas()}


            </div>

        </div>
    );
}