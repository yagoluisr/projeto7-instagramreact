import Copyright from "./Copyright";
import Links from "./Links";
import Titulo_SideBar from "./Titulo_SideBar";
import Usuario from "./Usuario";


function ArraySugestoes() {
    return ([
        {
        img: "assets/img/bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razao: "Segue você",
        seguir: "Seguir"
        },
        {
            img: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você",
            seguir: "Seguir"
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram",
            seguir: "Seguir"
        },
        {
            img: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você",
            seguir: "Seguir"
        },
        {
            img: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você",
            seguir: "Seguir"
        }
    ])
}

function TemplateSugestoes(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">{props.seguir}</div>
        </div>
    )
}


function Side_Bar() {
    const infoSugestoes = ArraySugestoes();

    return (
    <div class="sidebar">
        <Usuario />

        <div class="sugestoes">
            
          <Titulo_SideBar />

            {infoSugestoes.map(obj => (
                <TemplateSugestoes img={obj.img} nome={obj.nome} razao={obj.razao} seguir={obj.seguir} />
            ))}

        </div>

        <Links />
        <Copyright />

      </div>
    )
}

export default Side_Bar;