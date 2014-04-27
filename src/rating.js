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
    var currentRate = null;

    $.fn.rating = function(options) {

        if (options === undefined) {
            options = {};
        }
        /** create Rating ul list **/
        ul = document.createElement("ul");
        if (options.direction === "h") {
            ul.className = "horizontal";            
        }
        for (var symbol in ratingObj) {
            li = document.createElement("li");
            li.innerHTML = symbol;
            ul.appendChild(li);
        }
        this.find("div").html(ul);

        /** add mouse listeners **/
        this.mouseenter(options, bigger);
        this.mouseleave(options, small);
        this.on("click", options, rateIt);
        this.on("close", options, small);
        this.mouseenter(options, biggerH);
        this.mouseleave(options, smallH);
        this.on("click", options, rateItH);
        this.on("close", options, smallH);

        /** Handlers **/

    }

    var rateIt = function(e) {
        if (e.data.direction == 'h') {
            return;
        }
        $(this).stop();
        if (e.target.nodeName.toLowerCase() === "li") {
            li = $(e.target);
            currentRate = li;
            $(this).trigger("close");
            $(window).trigger("rated", [{"points": ratingObj[li.html()]}]);
        }
    }

    var bigger = function(e, options) {
        if (e.data.direction == 'h') {
            return;
        }
        ul = $(this).find("ul");
        $(this).stop();
        ul.animate({
            "margin-top": 0
        }, 500);
        $(this).animate({
            height: ul.height()
        }, 500)
    }

    var small = function(e) {
        if (e.data.direction == 'h') {
            return;
        }
        if (currentRate !== null) {
            $(e.currentTarget).find("ul").animate({
                    "margin-top": -currentRate.position().top
            }, 500);
        }        
        $(this).stop();
        li = $(this).find("ul").find("li");
        $(this).animate({
            height: li[0].clientHeight
        }, 500);
    }

    var rateItH = function(e) {
        if (e.data.direction != 'h') {
            return;
        }
        $(this).stop();
        if (e.target.nodeName.toLowerCase() === "li") {
            li = $(e.target);
            currentRate = li;
            $(this).trigger("close");
            $(window).trigger("rated", [{"points": ratingObj[li.html()]}]);
        }
    }

    var biggerH = function(e, options) {
        if (e.data.direction != 'h') {
            return;
        }
        $(this).stop();
        ul = $(this).find("ul");
        li = $("li").last();

        ul.animate({
            "margin-left": 0
        }, 500);
        $(this).animate({
            width: li.position().left + 50
        }, 500)
    }

    var smallH = function(e) {
        if (e.data.direction != 'h') {
            return;
        }
        $(this).stop();
        if (currentRate !== null) {
            $(e.currentTarget).find("ul").animate({
                "margin-left": -currentRate.position().left
            }, 500);
        }
        li = $(this).find("ul").find("li");
        $(this).animate({
            width: 50
        }, 500);
    }


})(jQuery);