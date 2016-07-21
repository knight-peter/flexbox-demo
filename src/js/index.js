var bar = document.querySelector('#menu-bar');

bar.onclick = function(){
    document.querySelector('.menu').className += ' menushow';
    document.querySelector('.menu-bg').style.display = 'block';
    
};

document.querySelector('.menu-bg').onclick = document.querySelector('.menu').onclick = function(ev){
    document.querySelector('.menu').className = 'menu';
    document.querySelector('.menu-bg').style.display = 'none';
    ev.preventDefault();
    ev.stopPropagation();
}
