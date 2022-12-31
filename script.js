function insert(num)   
{  
    document.querySelector('input').value = document.querySelector('input').value + num;  
}

function equal()  
{  
    var exp = document.querySelector('input').value;  
    if(exp)  
    {  
        document.querySelector('input').value = eval(exp)  
    }  
}  

function reset(){
    window.location.reload();
}