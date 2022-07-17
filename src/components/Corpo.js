import Posts from "./Posts";
import Side_Bar from "./Side_Bar";
import Stories from "./Stories";




function Corpo(){
    return (
        <div class = "corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            
            <div class= "sidebar">
                <Side_Bar />
            </div>
            
        </div>
    );
}

export default Corpo;