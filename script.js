(function ($) {
  "use strict";

  //Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }


  //About page

  $(".about-text").on('click', function () {
    $("body").addClass("about-on");
  });
  $(".about-close").on('click', function () {
    $("body").removeClass("about-on");
  });


  //Contact page

  $(".contact-text").on('click', function () {
    $("body").addClass("contact-on");
  });
  $(".contact-close").on('click', function () {
    $("body").removeClass("contact-on");
  });


  //Travel portfolio page

  $(".travel").on('click', function () {
    $("body").addClass("travel-on");
  });
  $(".travel-close").on('click', function () {
    $("body").removeClass("travel-on");
  });


  //Wildlife portfolio page

  $(".wildlife").on('click', function () {
    $("body").addClass("wildlife-on");
  });
  $(".wildlife-close").on('click', function () {
    $("body").removeClass("wildlife-on");
  });


  //Nature portfolio page

  $(".nature").on('click', function () {
    $("body").addClass("nature-on");
  });
  $(".nature-close").on('click', function () {
    $("body").removeClass("nature-on");
  });


})(jQuery); 

(function ($) {
    "use strict";
  
    // Create lightbox elements and append to body
    function createLightbox() {
      const lightbox = `
        <div id="image-lightbox" class="image-lightbox">
          <div class="lightbox-content">
            <img id="lightbox-image" src="" alt="Full Resolution Image">
            <span class="lightbox-close hover-target">&times;</span>
          </div>
        </div>
      `;
      
      $('body').append(lightbox);
      
      // Add event listeners
      $('.lightbox-close').on('click', function() {
        closeLightbox();
      });
      
      // Close on clicking outside the image
      $('#image-lightbox').on('click', function(e) {
        if ($(e.target).is('#image-lightbox')) {
          closeLightbox();
        }
      });
      
      // Close on ESC key
      $(document).keydown(function(e) {
        if (e.key === "Escape") {
          closeLightbox();
        }
      });
    }
    
    // Open lightbox with full resolution image
    function openLightbox(imgSrc) {
      // Get the original image src (without any resizing parameters if any)
      const originalSrc = imgSrc;
      
      // Set the image source
      $('#lightbox-image').attr('src', originalSrc);
      
      // Show the lightbox with a fade-in effect
      $('#image-lightbox').fadeIn(300);
      $('body').addClass('lightbox-open');
    }
    
    // Close lightbox
    function closeLightbox() {
      $('#image-lightbox').fadeOut(300);
      $('body').removeClass('lightbox-open');
    }
    
    // Initialize lightbox functionality
    function initLightbox() {
      createLightbox();
      
      // Add click events to all gallery images
      $('.travel-section img, .wildlife-section img, .nature-section img').on('click', function() {
        openLightbox($(this).attr('src'));
      });
    }
    
    // Initialize when document is ready
    $(document).ready(function() {
      initLightbox();
    });
    
  })(jQuery);


  (function ($) {
    "use strict";
    
    // Loading effect
    $(window).on('load', function() {
      // Simulate loading time if the page loads too quickly
      setTimeout(function() {
        // Hide loading overlay
        $('.loading-overlay').addClass('loaded');
        
        // Show content with animation
        $('body').addClass('page-loaded');
        
        // Enable scrolling after loading
       
      }, 1500); // Adjust time as needed (1.5 seconds)
    });
    
    // Add class to body to prevent scrolling during loading
    $('body').css('overflow', 'hidden');
    
    // Wrap all main content for animation purposes
    let mainContent = $('body > *:not(.loading-overlay)').wrapAll('<div class="page-content"></div>');
    
    // Fallback in case window load event doesn't fire
    setTimeout(function() {
      if (!$('body').hasClass('page-loaded')) {
        $('.loading-overlay').addClass('loaded');
        $('body').addClass('page-loaded');
        $('body').css('overflow', 'auto');
      }
    }, 3500); // Fallback timeout (3.5 seconds)
    
  })(jQuery);