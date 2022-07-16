const icons = ['home', 'search-outline', 'add-circle-outline', 'heart-outline', 'person-outline' ]

function FundoMobile() {
  return (
    <div class="fundo-mobile">
      {renderIcons}
    </div>
  );
}

const renderIcons = icons.map((e) => <ion-icon name={e}></ion-icon>)

export default FundoMobile;