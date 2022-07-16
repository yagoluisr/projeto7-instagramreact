function Icones(){
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div class="icones">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

export default Icones;