var position = 1;
var tabsWrapper = $('#myTab');
var tabContent = $('.tab-content');

var tabChange = function () {
    var tab = tabsWrapper.find('> li:nth-child(' + position + ')');
    var link = tab.find('a');
    tabContent.css({ opacity: 0 });
    link.css({ opacity: 0 });
    link.tab('show');
    if (position < tabsWrapper.find('> li').length) {
        position++;
    } else {
        position = 1;
    }
    link.animate({ opacity: 1 }, 500);
    tabContent.animate({ opacity: 1 }, 500);
};

tabChange();
var tabCycle = setInterval(tabChange, 5000);

$(function () {
    $('.nav-tabs a').click(function (e) {
        var link = $(this);
        link.css({ opacity: 0 });
        tabContent.css({ opacity: 0 });
        e.preventDefault();
        clearInterval(tabCycle);
        link.tab('show');
        link.animate({ opacity: 1 }, 500);
        tabContent.animate({ opacity: 1 }, 500);
    });

    $(document).click(function (e) {
        e.preventDefault();
        clearInterval(tabCycle);
    });
});