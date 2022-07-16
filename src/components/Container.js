import Icones from "./Icones";
import Icones_Mobile from "./Icones_Mobile";
import Instagram_Mobile from "./Instagram_Mobile";
import Logo from "./Logo";
import Logo_Mobile from "./Logo_Mobile";
import Pesquisa from "./Pesquisa";


function Container (){
    return (
        <div class="container">
            <Logo/>
            <Logo_Mobile/>
            <Instagram_Mobile/>
            <Pesquisa/>
            <Icones/>
            <Icones_Mobile/>
        </div>
    );
}

export default Container;