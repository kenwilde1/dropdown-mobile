const loadMoreNavigation = () => {

    const navContent = document.querySelector('.more-nav');
    navContent.classList.toggle('hide');

};

const initializeListeners = ( () => {

    const moreNavItem = document.querySelector('.btn-more')
    moreNavItem.addEventListener('click', () => loadMoreNavigation());

})();