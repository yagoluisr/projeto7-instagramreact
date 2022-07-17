function Cabecalho(props) {
    return (
        <div class="titulo">
            {props.titulo}
            <div>{props.opcao}</div>
        </div>
    )
}


function Titulo_SideBar() {
    return (
        <Cabecalho titulo="Sugestões para você" opcao="Ver tudo"/>
    )
}

export default Titulo_SideBar;