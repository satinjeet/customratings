(function($) {
    window.ratingObj = {
        ":D":  7,
        ":)":  6,
        ":|":  5,
        ":/":  4,
        ':(':  3,
        ":'(":  2,
        ":@":  1,
        "x_x":  0
    }
    var mainEle = ".ratings";

    $.fn.rating = function(options) {

        /** create Rating ul list **/
        ul = document.createElement("ul");
        for (var symbol in ratingObj) {
            li = document.createElement("li");
            li.innerHTML = symbol;
            ul.appendChild(li);
        }
        this.html(ul);

        /** add mouse listeners **/
        this.mouseenter(bigger);
        this.mouseleave(small);
        this.on("click", rateIt);
        this.on("close", small)

        /** Handlers **/

    }

    var rateIt = function(e) {
        if (e.target.nodeName.toLowerCase() === "li") {
            li = $(e.target);
            $(e.currentTarget).find("ul").animate({
                "margin-top": -li.position().top
            }, 500);
            $(this).trigger("close");
        }
    }

    var bigger = function() {
        ul = $(this).find("ul");
        $(this).stop();
        ul.animate({
            "margin-top": 0
        }, 500);
        $(this).animate({
            height: ul.height()
        }, 500)
    }

    var small = function() {
        li = $(this).find("ul").find("li");
        $(this).stop();
        $(this).animate({
            height: li[0].clientHeight
        }, 500);
    }


})(jQuery);