export let header = () => {
    let dropdown = document.getElementsByClassName('header__dropdown')[0];
    let mobileMenu = document.getElementsByClassName('header__menu--mobile')[0];
    let mobileList = document.getElementsByClassName('header__menu--mobile')[0].getElementsByClassName('menu__list')[0];

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