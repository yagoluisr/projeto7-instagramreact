import React from 'react';


function Acoes() {
    const [curtir, setCurtir] = React.useState('-outline');

    return (
        <div class="acoes">
            <div>
                <ion-icon name={'heart' + curtir} onClick={() => (curtir === '-outline') ? setCurtir('') : setCurtir('-outline') }></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

export default Acoes;