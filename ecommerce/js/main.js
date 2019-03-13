var myForm = document.getElementById('searchbar'),
    oldSearchAttribute = myForm.search.getAttribute('placeholder');
myForm.search.onfocus = function (){
    myForm.search.setAttribute('placeholder', '');
};
myForm.search.onblur = function (){
    myForm.search.setAttribute('placeholder', oldSearchAttribute);
};

var filterBar = document.getElementById('filterbar'),
    oldFilterAttribute = filterBar.getAttribute('placeholder');
filterBar.onfocus = function (){
    filterBar.setAttribute('placeholder', '');
};
filterBar.onblur = function (){
    filterBar.setAttribute('placeholder', oldFilterAttribute);
};