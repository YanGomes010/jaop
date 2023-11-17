let product_content = document.querySelector("#products-content");

fetch("DB.json")
    .then((resp) => resp.json())
    .then((arrayAlimentos) => {
        let alimentos = arrayAlimentos.alimentos
        for (let i = 0; i < 4; i++) {
            product_content.innerHTML +=
                `<div class='card'>
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
            <button onclick="capturaBTN()" id="btn-card-${i}"class='button-card'><span>+Info</span></button>
        </div>`
        }
    })



