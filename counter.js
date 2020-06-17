const counters = document.querySelectorAll('.counter');
const speed = 500; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = Math.floor(target / speed);
        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

jQuery(function ($) {
  $(document).ready(function () {
    var tabnum = location.href.split("#").slice(-1)[0];
    if (window.location.href.indexOf("#") > -1) {
      x_scroll_to_tab($, $(".x-accordion ." + tabnum + ">div>a"));
    }
  });
});

function x_scroll_to_tab($, tab_nav) {
  $(tab_nav).click();
  $("html,body").animate(
    { scrollTop: $(tab_nav).offset().top - ($(".x-navbar").height() + 100) },
    700,
    "swing"
  );
}