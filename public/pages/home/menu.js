export default () => {
    const container = document.querySelector('.header')

    const template = `<div class="searchDiv">
        <form class="searchBox">
          <a class="searchBtn" href="#home">
            <img src="imgs/lupa.svg" alt="lupa" width="25px" />
          </a>
          <input
            type="text"
            class="searchText"
            placeholder="Procurar produtos..."
          />
        </form>
      </div>

      <div class="logo">
        <a href="#">
          <img src="imgs/logoLM.png" alt="legends miami" href="index.html" />
        </a>
      </div>

      <div class="menu">
        <div class="tenis" onmouseover="backWhiteIn()" onmouseout="backWhiteOut()">
          <span>
            <a class="menuitem" href="#sneakers">Tênis</a>
          </span>
          <div class="sneakers" onmouseout="backWhiteOut()">
            <div class="primary">
              <ul>
                <li
                  class="pri jP"
                  onclick="visible('.jC', this)"
                  onmouseover="visible('.jC', this)"
                >
                  Air Jordan
                </li>
                <li
                  class="pri nP"
                  onclick="visible('.nC', this)"
                  onmouseover="visible('.nC', this)"
                >
                  Nike
                </li>
                <li
                  class="pri yP"
                  onclick="visible('.yC', this)"
                  onmouseover="visible('.yC', this)"
                >
                  Yeezy
                </li>
                <li
                  class="pri aP"
                  onclick="visible('.aC', this)"
                  onmouseover="visible('.aC', this)"
                >
                  Adidas
                </li>
                <li onmouseover="subClose()">
                  <a class="menuitem">Off-White</a>
                </li>
                <li
                  class="pri nbP"
                  onclick="visible('.nbC', this)"
                  onmouseover="visible('.nbC', this)"
                >
                  New Balance
                </li>
                <li
                  class="pri oP"
                  onclick="visible('.oC', this)"
                  onmouseover="visible('.oC', this)"
                >
                  Outros
                </li>
                <li onmouseover="subClose()">
                  <a class="menuitem">Ofertas</a>
                </li>
                <li onmouseover="subClose()">
                  <a class="menuitem">Feminino</a>
                </li>
                <li onmouseover="subClose()">
                  <a class="menuitem">Maculino</a>
                </li>
                <li onmouseover="subClose()">
                  <a class="menuitem">Infantil</a>
                </li>
              </ul>
            </div>
            <div class="secondary">
              <ul class="sub jC">
                <li>
                  <u><a class="menuitem">Air Jordan</a></u>
                </li>
                <li><a class="menuitem">Air Jordan 1</a></li>
                <li><a class="menuitem">Air Jordan 2</a></li>
                <li><a class="menuitem">Air Jordan 3</a></li>
                <li><a class="menuitem">Air Jordan 4</a></li>
                <li><a class="menuitem">Air Jordan 5</a></li>
                <li><a class="menuitem">Air Jordan 6</a></li>
                <li><a class="menuitem">Air Jordan 7</a></li>
                <li><a class="menuitem">Air Jordan 8</a></li>
                <li><a class="menuitem">Air Jordan 9</a></li>
                <li><a class="menuitem">Air Jordan 10</a></li>
                <li><a class="menuitem">Air Jordan 11</a></li>
                <li><a class="menuitem">Air Jordan 12</a></li>
                <li><a class="menuitem">Air Jordan 13</a></li>
                <li><a class="menuitem">Air Jordan 14</a></li>
                <li><a class="menuitem">Lançamentos</a></li>
              </ul>
              <ul class="sub nC">
                <li>
                  <u><a class="menuitem">Nike</a></u>
                </li>
                <li><a class="menuitem">Off-White</a></li>
                <li><a class="menuitem">Dunk</a></li>
                <li><a class="menuitem">Air Max</a></li>
                <li><a class="menuitem">Air Force 1</a></li>
                <li><a class="menuitem">Blazer</a></li>
                <li><a class="menuitem">Foamposite</a></li>
                <li><a class="menuitem">Vapormax</a></li>
                <li><a class="menuitem">Kobe</a></li>
                <li><a class="menuitem">LeBron</a></li>
                <li><a class="menuitem">Lançamentos</a></li>
              </ul>
              <ul class="sub yC">
                <li>
                  <u><a class="menuitem">Yeezy</a></u>
                </li>
                <li><a class="menuitem">Yeezy Boost 350</a></li>
                <li><a class="menuitem">Yeezy Boost 380</a></li>
                <li><a class="menuitem">Yeezy Boost 500</a></li>
                <li><a class="menuitem">Yeezy Boost 700</a></li>
                <li><a class="menuitem">Yeezy Boost 750</a></li>
                <li><a class="menuitem">Adidas Yeezy</a></li>
                <li><a class="menuitem">Nike Yeezy</a></li>
                <li><a class="menuitem">Yeezy Slides</a></li>
                <li><a class="menuitem">Yeezy Foam Runner</a></li>
              </ul>
              <ul class="sub aC">
                <li>
                  <u><a class="menuitem">Adidas</a></u>
                </li>
                <li><a class="menuitem">Yeezy</a></li>
                <li><a class="menuitem">Pharrell</a></li>
                <li><a class="menuitem">NMD</a></li>
                <li><a class="menuitem">Ultra Boost</a></li>
                <li><a class="menuitem">Lançamentos</a></li>
              </ul>
              <ul class="sub nbC">
                <li>
                  <u><a class="menuitem">New Balance</a></u>
                </li>
                <li><a class="menuitem">New Balance 327</a></li>
                <li><a class="menuitem">New Balance 550</a></li>
                <li><a class="menuitem">New Balance 990</a></li>
              </ul>
              <ul class="sub oC">
                <li>
                  <u><a class="menuitem">Outros</a></u>
                </li>
                <li><a class="menuitem">Asics</a></li>
                <li><a class="menuitem">Bape</a></li>
                <li><a class="menuitem">Converse</a></li>
                <li><a class="menuitem">Puma</a></li>
                <li><a class="menuitem">Reebok</a></li>
                <li><a class="menuitem">Vans</a></li>
              </ul>
            </div>
          </div>
        </div>
        <a class="menuitem" href="apparel.html">Vestuário</a>
        <a class="menuitem" href="">Outros</a>
        <div class="account">
          <span>
            <a id="account" class="menuitem" onclick="account()">Conta</a>
          </span>
          <div class="account2">
            <a class="menuitem" href="">Minha conta</a>
            <a class="menuitem" href="">Meu carrinho</a>
            <a class="menuitem" href="">Suporte</a>
            <a class="menuitem" href="signup.html">Entrar</a>
          </div>
        </div>
      </div>`

    container.innerHTML = template
    return container
}