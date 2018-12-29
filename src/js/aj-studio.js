$(function() {
  $(document).scroll(function() {
    var $nav = $(".ajs__navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 550);
  });

  var preview = $(".ajs__preview");
  preview
    .on("mouseover", function() {
      $(".ajs__poftfolio__button").fadeIn(300);
    })
    .on("mouseleave", function() {
      $(".ajs__poftfolio__button").fadeOut(300);
    });

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoWidth: false,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1366: {
        items: 4,
      },
      1600: {
        items: 6,
      },
      1900: {
        items: 8,
      }
    },
    onTranslate: function (event) {
      console.log(event);
    }
  });
  $(".ajs__poftfolio__button--next").click(function() {
    owl.trigger("next.owl.carousel");
  });

  $(".ajs__poftfolio__button--prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });

  /**
   * Smooth scrolling
   * https://css-tricks.com/snippets/jquery/smooth-scrolling/
   */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            500,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
