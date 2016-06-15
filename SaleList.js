var SaleList ={
    products:[],
    
    getList: function() {
        SaleList.loadProducts();
        return SaleList.products;
        
    },
    addName: function (name) {
        SaleList.names.push(name);
        SaleList.savedNames();
    },
    
    addPrice: function (price) {
        SaleList.prices.push(price);
        SaleList.savedPrices();
        
    },
    
    loadProducts: function(){
        var namesJsonText= window.localStorage.getItem('formAddProduct');
        if(namesJsonText){
            SaleList.names = Json.parse(namesJsonText)
        }
    },
    
    saveProducts: function(){
        var namesJsonText = Json.stringify(SaleList.names);
        window.localStorage.setItem('list-products',namesJsonText);
    }
};