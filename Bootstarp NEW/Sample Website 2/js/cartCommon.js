window.addEventListener("load",()=>{
    const params = (new URL(document.location)).searchParams;
    const cartButton = params.get('cartButton');
    var CartoutputCartPage = document.getElementById("CartoutputCartPage");
    

    
    CartoutputCartPage.innerText = cartButton.value;
    
    



})