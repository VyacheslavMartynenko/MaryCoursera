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

var previousLink = null;
$(function () {
    $('.nav-tabs a').click(function (e) {
        if (previousLink != null) {
            previousLink.css("color", "grey");
        }
        var link = $(this);
        link.css("color", "green");
        link.css({ opacity: 0});
        previousLink = link;
        tabContent.css({ opacity: 0 });
        e.preventDefault();
        clearInterval(tabCycle);
        link.tab('show');
        link.animate({ opacity: 1 }, 500);
        tabContent.animate({ opacity: 1 }, 500);
    });

    $('.navbar a').click(function (e) {
        clearInterval(tabCycle);
    });

    $('.links-wrapper a').click(function (e) {
        clearInterval(tabCycle);
    });
});