function findScrollDirection(elem, lastScrollTop) {
    var curScrollTop = elem.scrollTop(),
        direction = (curScrollTop > lastScrollTop) ? 'down' : 'up';

        lastScrollTop = curScrollTop;
        return direction;
}

function hideNavbarCtrl(navElem) {

    const doc = $('document'),
          jsClass = 'js-hide-nav';

    var lastScrollTop = 0,

        hideNavbarOnScroll = function(elem, jsClass) {

            //return direction up or down
            var direction = findScrollDirection(doc, lastScrollTop);

            return (direction === down) ?
            elem.addClass(jsClass) :
            elem.removeClass(jsClass);
        };

    doc.on('scroll', hideNavbarOnScroll(navElem, jsClass));

}