const contactsBtns = document.querySelectorAll('.contacts-btn-form');
const contactsMessage= document.querySelectorAll('.dropdown-form__btn');

let hideTime = 0;

contactsBtns.forEach((contactBtn) => {
    contactBtn.addEventListener('click', function(){
        const form = document.getElementById(contactBtn.dataset.formId);
        this.classList.toggle('rotate')
        form.classList.toggle('none');


        contactsMessage.forEach((messageBtn) => {
            messageBtn.addEventListener('click', function(){
                const messageForm = document.getElementById(messageBtn.dataset.messageId);
                form.classList.toggle('none');
                // contactBtn.classList.toggle('rotate')
                messageForm.classList.remove('none');
                let timerlId = setInterval(function(){
                    hideTime++;
                    if (hideTime == 10){
                        messageForm.classList.add('none');
                        clearInterval(timerlId);
                    }
                }, 1000)
            })
        })
    })
});





