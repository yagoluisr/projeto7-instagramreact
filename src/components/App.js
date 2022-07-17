import Corpo from "./Corpo";
import Fundo_Mobile from "./Fundo_Mobile";
import Navbar from "./Navbar";


function App(){
    return (
        <div>
            <Navbar />

            <div class ="corpo">
                <Corpo />
            </div>

            <Fundo_Mobile />

        </div>
    )
}

export default App;