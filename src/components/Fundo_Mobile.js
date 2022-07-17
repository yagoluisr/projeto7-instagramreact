function ArrayIcons() {
    return (
        [
            {
            nome: "home"
            },
            {
            nome: "search-outline"
            },
            {
            nome: "search-outline"
            },
            {
            nome: "add-circle-outline"
            },
            {
            nome: "person-outline"
            }
        ]
    )
}


function Fundo_Mobile() {
    const icons = ArrayIcons();

    return (
        <div class="fundo-mobile">

            {icons.map(obj => ( <ion-icon name={obj.nome}></ion-icon> ))}

        </div>
    )
}

export default Fundo_Mobile;