import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__nav">
          <img
            className="header__logo"
            width={40}
            height={40}
            src="/img/logo.svg"
            alt="logo"
          />

          <div className="header__info">
            <h3 className="header__title">R Sneakers</h3>

            <p className="header__subtitle">Нормальный магазин кроссовок</p>
          </div>
        </div>

        <ul className="header__list">
          <li className="header__list-item">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />

            <span>1205 руб.</span>
          </li>

          <li className="header__list-item">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h2 className="content__title">Все кроссовки</h2>

        <div className="card">
          <img src="/img/sneakers/1.jpg" alt="sneaker" />
          <p></p>
          <div>
            <span>Цена:</span>
            <b>12 999 р.</b>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
