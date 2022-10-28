const showArticleBtn = document.getElementById('show__article__btn');
const showArticleBtnSearch = document.getElementById('show__article__btn__search');

const articleCards = document.querySelectorAll('.article__card');
const articleCardSearch = document.querySelectorAll('.article__card__search');

let flag = true;
let numCards = articleCards.length;

if (numCards > 9){
    for (let i = 0; i <= 9; i++){
        articleCards[i].classList.add('active-article');
    };
    showArticleBtn.addEventListener('click', handlerButton)
}else if (numCards < 9) {
    for (let i = 0; i <= 3; i++){
        articleCardSearch[i].classList.add('active-article');
    };
    showArticleBtnSearch.addEventListener('click', handlerButtonSearch);
};

function handlerButton(){

    let numCards = articleCards.length - 1;
    const messageHide = 'Скрыть статьи';
    const messageShow = 'Показать больше статей';

    if (flag){
        flag = false;
        articleCards.forEach((item) => {
            item.classList.add('active-article');
        });
        showArticleBtn.textContent = messageHide;
    } else {
        flag = true;
        for (let i = numCards; i >= 10; i--){
            articleCards[i].classList.remove('active-article');
        };
        showArticleBtn.textContent = messageShow;
    };
};


function handlerButtonSearch(){

    let numCards = articleCardSearch.length - 1;
    const messageHide = 'Скрыть статьи';
    const messageShow = 'Показать больше статей';

    if (flag){
        flag = false;
        articleCardSearch.forEach((item) => {
            item.classList.add('active-article');
        });
        showArticleBtnSearch.textContent = messageHide;
    } else {
        flag = true;
        for (let i = numCards; i >= 4; i--){
            articleCards[i].classList.remove('active-article');
        };
        showArticleBtnSearch.textContent = messageShow;
    };
};