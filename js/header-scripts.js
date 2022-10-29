const dropDownItem = document.querySelector('#dropdown-item');
const dropdownArrow = document.querySelectorAll('.dropdown-arrow');
const navItemAbout = document.querySelector('#navItemAbout');

const searchBlock = document.querySelector('#search__block');
const searchInp = document.querySelector('#search__inp');
const openSearch = document.querySelector('#open-search');

function hideElem(){
    let i = 20;
    let timerId = setInterval(function(){
        i--;
        if (i == 0){
            this.nextElementSibling.toggle('none');
            clearInterval(timerId);
        }
    },1000);
};

$(document).ready(function () {
    $(".phone").inputmask({"mask": "+7 (999) 999-99-99"});
});

searchBlock.onclick = function(){
    searchBlock.classList.add('search__block--open');
    searchInp.style.width = '158px';
};

navItemAbout.onclick = function() {
    dropDownItem.classList.toggle('none');
    navItemAbout.classList.toggle('rotate');
};

const selectBtn = document.querySelectorAll('.templates-selected__button');

selectBtn.forEach((item)=>{
    item.addEventListener('click', function(){
        for (let elem of selectBtn){
            elem.classList.remove('select-btn');
        };
        
        this.classList.add('select-btn')

    });
})










