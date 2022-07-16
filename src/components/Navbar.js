import Container from "./Container";
import Corpo from "./Corpo";


function Navbar() {
    return (
        <div>
            <div class="navbar">
                <Container/>
            </div>
            <div class="corpo">
                <Corpo/>
            </div>
        </div>
    );
}

export default Navbar;