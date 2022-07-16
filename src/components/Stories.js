import Setinha from "./Setinha";


function Stories (){
    const storiesArray = [
        {title: "9gag", img: "assets/img/9gag.svg"},
        {title: "meowed", img: "assets/img/meowed.svg"},
        {title: "barked", img: "assets/img/barked.svg"},
        {title: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
        {title: "wawawicomics", img: "assets/img/wawawicomics.svg"},
        {title: "respondeai", img: "assets/img/respondeai.svg"},
        {title: "filomoderna", img: "assets/img/filomoderna.svg"},
        {title: "memeriagourmet", img: "assets/img/memeriagourmet.svg"}
    ];
    
    return (
        <div class="stories">
            
            {storiesArray.map(objeto => (
                <div class="story">
                    <div class="imagem">
                        <img src={objeto.img} />
                    </div>
                    <div class="usuario">
                        {objeto.title}
                    </div>
            </div>
            ))}

        <Setinha />
        
    </div>
    );
}

export default Stories;