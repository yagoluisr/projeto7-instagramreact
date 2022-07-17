function DadosUsuario(props) {
    return (
        <div class="usuario">
         <img src={props.img} />
            <div class="texto">
              <strong>{props.perfil}</strong>
              {props.nomePerfil}
            </div>
      </div>
    )
}


function Usuario() {
    
    return (
        <DadosUsuario img="assets/img/catanacomics.svg" perfil="catanacomics" nomePerfil="Catana" />
    )
}

export default Usuario;