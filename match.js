const products = [
    
       {id: 1, name: 'walton phone', price: 12000},
        {id: 2, name: 'lenovo', price: 92000},
        {id: 3, name: 'dell', price: 89000},
        {id: 4, name: 'samsung phone', price: 42000}
    
];

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
             matched.push(product);
        }
       
    }
    return matched;
}
const result = matchProducts(products, 'phone');
console.log(result);