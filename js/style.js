
// navlink
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.pathname.split("/").pop(); // Get current page filename

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active"); // Add 'active' class to matching link
        }
    });
});



///////////////////////////////////////////////////////////

// occasion filter

document.addEventListener("DOMContentLoaded", function () {
    // Select the checkbox for "Birthday's" and set it to checked
    document.getElementById("occasion2").checked = true;
});

///////////////////////////////////////////////////////////



//  filter slider range 


$(document).ready(function () {
     console.log("Script loaded successfully!");
 
     $("#slider-range").slider({
         range: true,
         min: 299,
         max: 10000,
         values: [299, 2500],
         slide: function (event, ui) {
             $("#amount").val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
             $("#min-price").val(ui.values[0]);
             $("#max-price").val(ui.values[1]);
         }
     });
 
     $("#amount").val("₹" + $("#slider-range").slider("values", 0) + " - ₹" + $("#slider-range").slider("values", 1));
 
     $("#min-price, #max-price").on("change", function () {
         var minPrice = parseInt($("#min-price").val());
         var maxPrice = parseInt($("#max-price").val());
 
         if (minPrice >= 299 && maxPrice <= 10000 && minPrice <= maxPrice) {
             $("#slider-range").slider("values", [minPrice, maxPrice]);
             $("#amount").val("₹" + minPrice + " - ₹" + maxPrice);
         } else {
             alert("Please enter a valid price range (₹299 - ₹10,000)");
         }
     });
 });


///////////////////////////////////////////////////////////////////

// search


	document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".header-form-search");
    const searchInput = document.querySelector(".formControl");

    searchForm.addEventListener("submit", function (event) {
        if (searchInput.value.trim() === "") {
            event.preventDefault();
            alert("Please enter a search term.");
        }
    });
});



///////////////////////////////////////////////////////////////////






// wishlist popover 


$(document).ready(function() {
   console.log("wishlist loaded successfully!");

    $("body").append('<div id="wishlist-popover" class="custom-popover"></div>'); // Create a global popover
    let popover = $("#wishlist-popover");

    $(".icon-wishlist").click(function(event) {
       let button = $(this);
       let offset = button.offset(); // Get button position

       if (button.hasClass("in-wishlist")) {
          button.removeClass("in-wishlist");
          popover.text("Removed from wishlist");
       } else {
          button.addClass("in-wishlist");
          popover.text("Added to wishlist");
       }

       // Position popover near clicked button
       popover.css({
          top: offset.top - 40, // Adjust position above button
          left: offset.left - (popover.outerWidth() / 2) + (button.outerWidth() / 2)
       });

       popover.stop(true, true).fadeIn(300).delay(1500).fadeOut(500);
    });
});




 ///////////////////////////////////////////////////////////////////



//  carousel 

	$(document).ready(function () {
	    $("#flow-carousel").owlCarousel({
		   loop: true,
		   margin: 12,
		   nav:false,
		   dots: true,
		   autoplay: true,
		   smartSpeed: 2000,
		   autoplayTimeout: 2000,
		   autoplayHoverPause: true,
		   nav: false,
		   responsive: {
			  0: { items: 1 },
			  600: { items: 2 },
			  1000: { items: 4 }
		   },
		   onInitialized: function () {
			  console.log("flow carousel initialized.");
		   }
	    });
	});



	$(document).ready(function () {
	    $("#flow1-carousel").owlCarousel({
		   loop: true,
		   margin: 12,
		   nav:false,
		   dots: true,
		   autoplay: true,
		   smartSpeed: 1000,
		   autoplayTimeout: 2000,
		   autoplayHoverPause: true,
		   nav: false,
		   responsive: {
			  0: { items: 1 },
			  600: { items: 2 },
			  1000: { items: 4 }
		   },
		   onInitialized: function () {
			  console.log("flow1 carousel initialized.");
		   }
	    });
	});




	$(document).ready(function () {
	    $("#flow2-carousel").owlCarousel({
		   loop: true,
		   margin: 12,
		   nav:false,
		   dots: true,
		   autoplay: true,
		   smartSpeed: 1000,
		   autoplayTimeout: 2000,
		   autoplayHoverPause: true,
		   nav: false,
		   responsive: {
			  0: { items: 1 },
			  600: { items: 2 },
			  1000: { items: 2 }
		   },
		   onInitialized: function () {
			  console.log("flow2 carousel initialized.");
		   }
	    });
	});