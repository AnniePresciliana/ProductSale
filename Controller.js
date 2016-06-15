var Controller = {
    
    init: function (params) {
        Controller.setForm();
        Controller.displayProducts();
    },
    
    setForm: function () {
        var form = document.getElementById('formAddProduct');
        form.addEventListener('submit',Controller.eventSubmitHandler);
        
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault();
        var inputName = document.getElementById('name');
        Controller.addName(inputName.value);
        inputName.value = "";
        
        var inputName = document.getElementById('price');
        Controller.addPrice(inputPrice.value);
        inputPrice.value= "";
        
    },
    
    addName:function(name){
        SaleList.addName(name);
        HTMLServiceSale.displayAddedName(name);
                      },
    addPrice: function (price){
        SaleList.addPrice(price);
        HTMLServiceSale.displayAddedPrice(price);
        
    },
    
    displayProducts : function (){
        var names = SaleList.getList();
        names.forEach(HTMLServiceSale.displayAddedProducts);
        
        var prices = 
        SaleList.getList();
        prices.forEach(HTMLServiceSale.displayAddedPrice);
        
    }


};

Controller.init();