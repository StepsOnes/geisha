const dropDownItem = document.getElementById('dropdown-item');
const navItemAbout = document.getElementById('navItemAbout');

const dropdownBtnMobile = document.getElementById('dropdown-btn__mobile');

// header search element
const searchBlock = document.getElementById('search__block');
const searchInp = document.getElementById('search__inp');

// libraries inputmask
$(document).ready(function () {
    $(".phone").inputmask({"mask": "+7 (999) 999-99-99"});
});


// header search script
searchBlock.onclick = function(){
    searchBlock.classList.add('search__block--open');
    searchInp.style.width = '158px';
};

// handler dropdownBtn mobile
dropdownBtnMobile.addEventListener('click', function () {
    document.getElementById('dropdown-box__mobile').classList.toggle('none');

})

navItemAbout.addEventListener('mouseover', function(){
    dropDownItem.classList.toggle('none');
    navItemAbout.classList.toggle('rotate');
})













