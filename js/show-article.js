const showArticleBtn = document.getElementById('show__article__btn');
const articleCards = document.querySelectorAll('.article__card');
let flag = true;

for (let i = 0; i <= 9; i++){
    articleCards[i].classList.add('active-article');
};

showArticleBtn.addEventListener('click', handlerButton)

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