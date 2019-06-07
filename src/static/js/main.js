let header = () => {
    let dropdown = document.getElementsByClassName('header__dropdown')[0];
    let mobileMenu = document.getElementsByClassName('header__menu--mobile')[0];
    let mobileList = document.getElementsByClassName('header__menu--mobile')[0].getElementsByClassName('menu__list')[0];

    if (dropdown) {
        let toggleDropdown = () => {
            if (mobileMenu.style.display == "block") {
                mobileMenu.style.display = "none";
                dropdown.classList.remove('header__dropdown--opened');
            } else {
                mobileMenu.style.display = "block";
                dropdown.classList.add('header__dropdown--opened');
            }
        }
        dropdown.onclick = () => {
            toggleDropdown();
        }
        mobileMenu.onclick = () => {
            mobileList.onclick = (e) => {
              e.stopPropagation();
            }
            toggleDropdown();
        }
    }
}
header();

let cookies = () => {
    let close = document.getElementsByClassName('cookies__close')[0];
    let closeButton = document.getElementsByClassName('cookies__button')[0];
    let cookies = document.getElementsByClassName('cookies')[0];

    if (cookies) {
        let closeCookies = () => {
            cookies.style.display = 'none';
        }
        close.onclick = () => {
            closeCookies();
        }
        closeButton.onclick = () => {
            closeCookies();
        }
    }
}
cookies();

let test = () => {
    let section = document.getElementsByClassName('test');
    let casual = document.getElementsByClassName('test__casual');
    let next = document.getElementsByClassName('test__next');
    let country = document.getElementsByTagName('path');
    let flag = document.getElementsByClassName('test__flag');
    let text = document.getElementsByClassName('test__text');
    let result = document.getElementsByClassName('test__result')[0];
    let number = document.getElementsByClassName('result__number')[0];
    let successBlock = document.getElementsByClassName('result__success--block')[0];
    let failureBlock = document.getElementsByClassName('result__failure--block')[0];
    let counter = 0;

    if (section) {
        for(let i = 0;i < section.length;i++) {
            next[i].onclick = () => {
                if (i < section.length-1) {
                    section[i+1].style.display = 'block'; 
                    section[i].style.display = 'none';
                } else if (counter == 7) {
                    result.style.display = 'flex';
                    section[i].style.display = 'none';
                    number.innerHTML = '7/7';
                    successBlock.style.display = 'block';

                }  else {
                    result.style.display = 'flex';
                    section[i].style.display = 'none';
                    number.innerHTML = counter+'/7';
                    failureBlock.style.display = 'block';
                }
            }
        }
        for(let i = 0;i < casual.length;i++) {
            casual[i].getElementsByClassName('test__item')[0].onclick = () => {
                casual[i].classList.add('test--correct');
                casual[i].getElementsByClassName('test__item')[0].classList.add('test__item--correct');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block';   
                text[i].classList.add('test__text--center');
                counter++;
            }
            casual[i].getElementsByClassName('test__item')[1].onclick = () => {
                casual[i].classList.add('test--incorrect');
                casual[i].getElementsByClassName('test__item')[1].classList.add('test__item--incorrect');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                text[i].classList.remove('test__text--center');
            }
            casual[i].getElementsByClassName('test__item')[2].onclick = () => {
                casual[i].classList.add('test--incorrect');
                casual[i].getElementsByClassName('test__item')[2].classList.add('test__item--incorrect');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                text[i].classList.remove('test__text--center');
            }
        }
        for(let i = 0;i < country.length;i++) {
            country[i].onclick = () => {  
                if (country[i].getAttribute('aria-label') == 'Kazakhstan  ') {
                    counter++;
                    let event = new Event("click");
                    next[1].dispatchEvent(event);
                } else {
                    let event = new Event("click");
                    next[1].dispatchEvent(event);
                }
            }
        }
        for(let i = 0;i < flag.length;i++) {
            flag[i].onclick = () => {  
                if (i == 3) {
                    counter++;
                    let event = new Event("click");
                    next[2].dispatchEvent(event);
                } else {
                    let event = new Event("click");
                    next[2].dispatchEvent(event);
                }
            }
        }
    }
}
test();

let feedback = () => {
    let form  = document.getElementsByClassName('feedback__form')[0];
    let block = document.getElementsByClassName('feedback__block');
    let input = document.getElementsByClassName('feedback__input');
    let textarea = document.getElementsByClassName('feedback__textarea')[0];
    let error = document.getElementsByClassName('feedback__error');
    let button  = document.getElementsByClassName('feedback__button')[0];
    let realButton  = document.getElementsByClassName('feedback__real-button')[0];

    if (form) {
        let validate = () => {
            if (!textarea.value) {
                error[4].style.display = 'block';
                textarea.classList.add('feedback--error');
            } else {
                error[4].style.display = 'none';
                textarea.classList.remove('feedback--error');
            }
            for (let i = 0;i < input.length;i++) {
                if (!input[i].value) {
                    error[i].style.display = 'block';
                    input[i].classList.add('feedback--error');
                } else {
                    error[i].style.display = 'none';
                    input[i].classList.remove('feedback--error');
                }
            }
        }
        button.onclick = () => {
            validate();
        }
    }
}
feedback();