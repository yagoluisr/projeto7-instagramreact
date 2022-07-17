function ArrayPosts() {
    return ([
        {
            title: "meowed",
            img: "assets/img/meowed.svg",
            conteudo: "assets/img/gato-telefone.svg",
            imgCanal: "assets/img/respondeai.svg",
            VistoCanal: "respondeai",
            VistoPessoas: "101.523"
        },
        {
            title: "barked",
            img: "assets/img/barked.svg",
            conteudo: "assets/img/dog.svg",
            imgCanal: "assets/img/adorable_animals.svg",
            VistoCanal: "adorable_animals",
            VistoPessoas: "99.159"
        }
    ])
}


function Topo(props) {

    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.img} />
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props){

    return (
        <div class="conteudo">
            <img src={props.img} />
        </div>
    )
}



function Acoes() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.imgCanal} />
            <div class="texto">
            Curtido por <strong>{props.VistoCanal}</strong> e <strong>outras {props.VistoPessoas} pessoas</strong>
            </div>
        </div>
    )
}


function Posts(){
    const array = ArrayPosts();

    return(
        <div class="posts">
            {array.map(objeto => (
                <div class="post">
                    
                    <Topo img={objeto.img} nome={objeto.title}/>
                    <Conteudo img={objeto.conteudo}/>

                    <div class="fundo">
                        <Acoes />
                        <Curtidas imgCanal={objeto.imgCanal} VistoCanal={objeto.VistoCanal} VistoPessoas={objeto.VistoPessoas} />
                    </div>
                    
                </div>
            ))}
        </div>
    );
}

export default Posts;