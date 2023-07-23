const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
        if (triggerSelector !== '') {
            const trigger = document.querySelectorAll(triggerSelector)
            trigger.forEach((item) => {
                item.addEventListener('click', (e) => {
                    let typeForm = item.dataset.form
                    let title = item.dataset.title
                    // let formTitle = modal.querySelectorAll('.title-selector')
                    // let tagForm = modal.querySelector('form');
                    // let tagButton = modal.querySelector('button');
                    // let yandexId = item.dataset.yaid
                    // let yandexType = item.dataset.yaid
                    // let manyCharacters = item.dataset.characters
                    //
                    // if (item.classList.contains('advantage__cards-button')) {
                    //     tagForm.setAttribute('data-case', title)
                    // } else if (tagForm !== null) {
                    //     console.log(tagForm)
                    //     tagForm.removeAttribute('data-case')
                    // }
                    // if (manyCharacters !== undefined) {
                    //     formTitle.forEach(item => item.classList.add('modal__title-price'))
                    // } else formTitle.forEach(item => item.classList.remove('modal__title-price'))
                    // if (yandexId !== undefined && yandexType !== undefined) {
                    //     tagButton.setAttribute('onclick', `ym(${yandexId},'reachGoal','${yandexType}'); return true;`)
                    // }
                    //
                    // if (tagForm !== null) {
                    //     tagForm.setAttribute('data-name', typeForm)
                    // }


                    // formTitle.forEach(item => item.innerHTML = title)

                    if (e.target) {
                        e.preventDefault()
                    }
                    modal.style.display = 'block'
                    document.body.style.overflow = 'hidden'

                });
            })
        }


        if (modal !== null) {
            close.addEventListener('click', () => {
                modal.style.display = 'none'
                document.body.style.overflow = ''

            });


            modal.addEventListener('click', function (e) {

                if (e.target == modal) {
                    modal.style.display = 'none'
                    document.body.style.overflow = ''

                }
            })
        }


    }


    bindModal('.calc-btn', '.modal__calculator', '.modal__calculator .close-btn');



    // bindModal('', '.modal-calc', '.calculator__prev-steep');
    // bindModal('', '.modal-feedback', '.modal-feedback .modal__btn-close');
    // bindModal('', '.modal-review', '.modal-review .modal__btn-close');


};
modals();





