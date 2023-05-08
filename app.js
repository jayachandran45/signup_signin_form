$(document).ready(function(){
    $(".sign-up").click(function(){
        $(".form-component").load("./components/signup_component.html");
    });
});
$(document).ready(function(){
    $(".sign-in").click(function(){
        $(".form-component").load("./components/signin_component.html");
    });
});

const formEle = document.querySelector('.form-component')
const btnEle = document.querySelectorAll('button')
btnEle.forEach(e => {
    e.addEventListener('click',()=>{
        formEle.style.display = "visible";
    })    
});
