const dropDownItem = document.querySelector('#dropdown-item');
const navItemAbout = document.querySelector('#navItemAbout');

const searchBlock = document.querySelector('#search__block');
const searchInp = document.querySelector('#search__inp');

$(document).ready(function () {
    $(".phone").inputmask({"mask": "+7 (999) 999-99-99"});
});

searchBlock.onclick = function(){
    searchBlock.classList.add('search__block--open');
    searchInp.style.width = '158px';
};

navItemAbout.addEventListener('mouseover', function(){
    dropDownItem.classList.toggle('none');
    navItemAbout.classList.toggle('rotate');
})


const selectBtn = document.querySelectorAll('.templates-selected__button');

selectBtn.forEach((item)=>{
    item.addEventListener('click', function(){
        for (let elem of selectBtn){
            elem.classList.remove('select-btn');
        };
        
        this.classList.add('select-btn')

    });
})










