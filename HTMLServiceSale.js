var HTMLServiceSale = {
    
    displayAddedName: function (name) {
        var listItem = HTMLServiceSale.createListItem(name);
        HTMLServiceSale.addToList(listItem);
    },
    
    displayAddedPrice: function (Price) {
        var listItem = HTMLServiceSale.createListItem(price);
        HTMLServiceSale.addToList(listItem);
    },
    
    createListItem : function(text){
        var listItem = document.createElement('li');
        listItem.innerHTML ="text";
        return listItem;
    },
    
    addToList: function(listItem){
        var unOrderedList = document.getElementById('list-products');
        unOrderedList.appendChild(listItem);
    }
    
    
}