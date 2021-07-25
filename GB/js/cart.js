class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
            {
                total: 0
            }
        ];
    }


render() {
    let listHtml = '';
    this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();  
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
}

calculateTotalPrice(total, price) {
    this.price = price
    this.total = total
    total = this.goods.reduce((acc, price) => { 
    let sum = price.price;
    acc + sum
    , 0})
    console.log(sum) 
}
};

const products = [{
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
];

const renderProduct = (item, img = 'https://via.placeholder.com/200x150') =>
    `<div class="product-item" data-id="${this.id}">
                <img src="${img}" alt="Some img">
                <div class="desc">
                    <h3>${item.title}</h3>
                    <p>${item.price} </p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;

const renderProducts = list => document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));

renderProducts(products);
const list = new GoodsList();
list.fetchGoods();
list.render();
list.calculateTotalPrice();