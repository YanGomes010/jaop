let product_content = document.querySelector("#products-content");
let array_buttons = [];
let array_inputs = [];
let show_info_foods = document.querySelector("#show-info-foods");
let menu_bar_items = document.querySelector("#menu-bar-items");
let store_buy = [];
let menu_bar = document.querySelector("#menu-bar")
let btn_close_menu_bar = document.querySelector("#menu-bar-button-close")
let store_active_menu = document.querySelector("#store-active-menu")


//REQUISIÇÃO DE ITENS PARA CRIAÇÃO DO CARDAPIO
fetch("DB.json")
  .then((resp) => resp.json())
  .then((arrayAlimentos) => {
    let alimentos = arrayAlimentos.alimentos;
    for (let i = 0; i < 4; i++) {
      product_content.innerHTML += `<div class='card'>
            <div class='img-card'>
                <img src='${alimentos[i].url}' alt=''>
            </div>
            <div class='value-size-card'>
                <div class='value-size-info'>
                    <span>VALOR</span>
                    <span>TAMANHO</span>
                </div>
                <div class='value-size-content'>
                    <div class='value-box'>
                        <span class='value-real'>${alimentos[i].promocao}</span>
                        <span class='value-promotion'>${alimentos[i].valor}</span>
                    </div>
                    <div class='size-box'>
                        <span class='size'>${alimentos[i].tamanho}</span>
                    </div>
                </div>
            </div>
            <div class='span-info-card'>
            <span class='info-product-card'>${alimentos[i].infos}</span>
        </div>
            <button key="${alimentos[i].id}" id="${i}"class='button-card'>Pedir</button>
        </div>`;
      array_buttons.push([i]);
    }


    //CAPTURAR ELEMENTO CLICADO PARA ADICIONAR AO CARRINHO
    function capturaBTN(e) {

      let id_element = e.target.id;

      for (let i = 0; i < array_buttons.length; i++) {
        if (array_buttons[i] == id_element) {
          createCar(i);
        }
      }

    }

    //CRIAÇÃO DO CARRINHO
    function createCar(i) {

      store_buy.push({
        id: i+1,
      tipo: alimentos[i].tipo,
      valor:alimentos[i].valor,
      promocao:alimentos[i].promocao,
      tamanho: alimentos[i].tamanho,
      infos: alimentos[i].infos,
      url: alimentos[i].url,
      qtdServ: alimentos[i].qtdServ,
      unidades: 1
      })

      menu_bar_items.innerHTML += `
  <div  class="box-food-menu-bar">
                <div class="box-food-square-one">
                    <span class="square-one-qtd">${alimentos[i].qtdServ}</span>
                    <article>
                        <span class="square-one-price">${alimentos[i].promocao}</span>
                        <span class="square-one-size">${alimentos[i].tamanho}</span>
                    </article>
                    <div class="square-one-input-box">
                        <button class="square-one-button square-one-button-less">-</button>
                        <input class="square-one-input" value="${alimentos[i].unidades}"  min="1" max="100" type="number">
                        <button class="square-one-button square-one-button-plus">+</button>
                    </div>
                </div>
                <div class="box-food-square-two">
                    <img class="square-two-img" src="${alimentos[i].url}" alt="">
                </div>
            </div>
  `;


    }
    //EVENTOS 



    let buttons = document.querySelectorAll("button");
    buttons.forEach(function (element) {
      element.addEventListener("click", capturaBTN);
    });
  });

btn_close_menu_bar.addEventListener('click', () => {
  menu_bar.style.display = 'none';
})

store_active_menu.addEventListener('click', () => {
  menu_bar.style.display = "block"
})

