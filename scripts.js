var ul = document.querySelectorAll('[data-listindex="0"]')[0];
var liSelected;
var index = -1;

document.addEventListener('keydown', function (event) {
    var len = ul.getElementsByTagName('li').length - 1;
    if (event.which === 39) {
        arrowRight(ul, len);
    }
    if (event.which === 37) {
        arrowLeft(ul, len);
    }
    if (event.which === 40) {
        ul = document.querySelectorAll('[data-listindex="1"]')[0];
        var len = ul.getElementsByTagName('li').length - 1;
        arrowLeft(ul, len);
    }
    if (event.which === 38) {
        ul = document.querySelectorAll('[data-listindex="0"]')[0];
        var len = ul.getElementsByTagName('li').length - 1;
        arrowRight(ul, len);
        arrowLeft(ul, len);
    }
}, false);


function arrowRight(ul, len) {
    index++;
    if (liSelected) {
        removeClass(liSelected, 'selected');
        next = ul.getElementsByTagName('li')[index];
        if (typeof next !== undefined && index <= len) {
            liSelected = next;
        } else {
            index = 0;
            liSelected = ul.getElementsByTagName('li')[0];
        }
        addClass(liSelected, 'selected');
        console.log(index);
    }
    else {
        index = 0;

        liSelected = ul.getElementsByTagName('li')[0];
        addClass(liSelected, 'selected');
    }
};

function arrowLeft(ul, len) {
    if (liSelected) {
        removeClass(liSelected, 'selected');
        index--;
        console.log(index);
        next = ul.getElementsByTagName('li')[index];
        if (typeof next !== undefined && index >= 0) {
            liSelected = next;
        } else {
            index = len;
            liSelected = ul.getElementsByTagName('li')[len];
        }
        addClass(liSelected, 'selected');
    }
    else {
        index = 0;
        liSelected = ul.getElementsByTagName('li')[len];
        addClass(liSelected, 'selected');
    }
};

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};