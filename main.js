const monthly = document.querySelectorAll(".price-monthly");
const annually = document.querySelectorAll(".price-annually");
const checkBox = document.querySelector("#toggle");

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
        annually.forEach(price => price.style.display="none");
        monthly.forEach(price => price.style.display="flex");
    }else{
        annually.forEach(price => price.style.display="flex");
        monthly.forEach(price => price.style.display="none");
    }   
});

    

