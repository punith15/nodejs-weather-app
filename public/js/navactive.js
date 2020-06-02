
let atag = document.getElementsByClassName('navItem');

for(let i=0;i<atag.length;i++){
    //console.log(atag[i].classList[0] === 'navItem')
    atag[i].addEventListener('click',function(e){
        e.preventDefault();
        var current = document.getElementsByClassName("active");
        current[0].className=current[0].className.replace(" active","")
        atag[i].className += ' active';
    })
}



