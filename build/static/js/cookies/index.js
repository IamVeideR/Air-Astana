export let cookies = () => {
    let close = document.getElementsByClassName('cookies__close')[0];
    let closeButton = document.getElementsByClassName('cookies__button')[0];
    let cookies = document.getElementsByClassName('cookies')[0];

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