let showButton = document.getElementById('show')
let container = document.getElementById('the-container')

let productsApi = new XMLHttpRequest
productsApi.open(`GET`, `https://dummyjson.com/products`)
productsApi.send()

let allProducts = []
// console.log(products)
productsApi.addEventListener('readystatechange', function(){
    if (productsApi.readyState === 4) {
        allProducts = JSON.parse(productsApi.response).products
        // console.log(allProducts)
        loopData()
    }
})

function loopData() {
    let Data = ``
    for(let i = 0; i < allProducts.length; i++) {
        Data += `

            <div class="product">
                <h3>${allProducts[i].title}</h3>
                <img src="${allProducts[i].thumbnail}" alt="">
            </div>

        `
    } container.innerHTML = Data
}

showButton.addEventListener('click', function(){
    if (container.style.display !== 'none') {
        container.style.display = 'none'
        showButton.innerHTML = 'show items'
    } else {
        container.style.display = 'flex'
        showButton.innerHTML = 'hide items'

    }
})