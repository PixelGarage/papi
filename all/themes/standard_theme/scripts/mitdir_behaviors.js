/**
 * Created with JetBrains PhpStorm.
 * User: ralph
 * Date: 25.10.13
 * Time: 18:34
 *
 * This file contains all Drupal behaviours of the Grezan theme.
 *
 *
 */
(function ($) {

    /**
     * This behavior adds shadow to header on scroll.
     *
     */
    Drupal.behaviors.addHeaderShadow = {
        attach: function (context) {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 10) {
                    $("#header").css( "box-shadow", "0 4px 3px -4px gray");
                } else {
                    $("#header").css( "box-shadow", "none");
                }
            });
        }
    };

    /**
     * Adapts the columns top margin if the body contains a system message
     */
    Drupal.behaviors.messageMarginCorrection = {
        attach: function(context) {
            if ($("#messages").length > 0) {
                // a system message is contained in the body, reduce margin for columns
                $("#columns").css("margin-top", "20px");
            } else {
                $("#columns").css("margin-top", "210px");
            }
        }
    };

    /**
     * This behavior resizes the quote text according to its length.
     *
     */
    Drupal.behaviors.resizeQuote = {
        attach: function (context) {
            $(".node-ohne-dich.node-teaser div.field-name-field-quote", context).once("qoute-resize", function () {
                var len = $(this).text().length;
                if (len < 20) {
                    $(this).css("font-size", "1.3em");
                    $(this).css("top", "15em");
                }else if (len > 45 && len < 60) {
                    $(this).css("font-size", "0.8em");
                    $(this).css("top", "24.75em");
                } else if (len > 60) {
                    $(this).css("font-size", "0.7em");
                    $(this).css("top", "28em");
                };
            });
        }
    };

    Drupal.behaviors.resizeFullQuote = {
        attach: function (context) {
            var quote_resize = function() {
                $(".node-ohne-dich.node-full div.field-name-field-quote", context).each(function () {
                    var len = $(this).text().length;
                    if (len < 20) {
                        $(this).css("font-size", "2.3vw");
                    } else if (len >= 20 && len < 45) {
                        $(this).css("font-size", "1.5vw");
                    } else if (len >= 45 && len < 60) {
                        $(this).css("font-size", "1.4vw");
                    } else if (len >= 60) {
                        $(this).css("font-size", "1.2vw");
                    };
                    if ($(window).width() > 1280) {
                        if (len >= 60) {
                            $(this).css("font-size", "1.1em");
                        } else {
                            $(this).css("font-size", "1.2em");
                        }
                    } else if ($(window).width() <= 768) {
                        if (len >= 60) {
                            $(this).css("font-size", "2.5vw");
                        } else {
                            $(this).css("font-size", "3vw");
                        }
                    }
                });
            };

            $(window)
                .load(quote_resize)
                .resize(quote_resize);
        }
    }

})(jQuery);