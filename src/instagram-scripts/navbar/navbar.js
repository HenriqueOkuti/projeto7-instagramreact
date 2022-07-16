const icons = {
    logo: 'logo-instagram',
    compass: 'compass-outline',
    plane: 'paper-plane-outline',
    heart: 'heart-outline',
    person: 'person-outline'
  }

function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name={icons.logo}></ion-icon>
                    <div class="separador"></div>
                    <img src="../assets/img/logo.png" alt="" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name={icons.logo}></ion-icon>
                </div>

                <div class="instagram-mobile">
                    {/* <img src="../assets/img/logo.png" /> */}
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ion-icon name={icons.plane}></ion-icon>
                    <ion-icon name={icons.compass}></ion-icon>
                    <ion-icon name={icons.heart}></ion-icon>
                    <ion-icon name={icons.person}></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name={icons.plane}></ion-icon>
                </div>
            </div>
        </div>
    );
}

export default Navbar;