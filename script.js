/**
 * Dynamically add and remove the animated classes to the blockquotes.
 *
 * Make sure the timing of this interval is identical to to the animation
 * duration in the CSS progress bar.
 */
setInterval(function() {
  
  var $quotes = $('blockquote'),
      $quoteIn = $('blockquote.fade-in'),
      $quoteOut = $quoteIn.next();
  
  // If we've reached the end of all out quotes, default back
  // to the first one.
  $quoteOut = $quoteOut.length > 0 ? $quoteOut : $quotes.eq(0);
  
  // Switch animation classes on the quotes.
  $quoteIn.removeClass('fade-in').addClass('fade-out');
  $quoteOut.removeClass('fade-out').addClass('fade-in');
  
  
}, 9000);

// Show the first quote, or you could add the class in the mark-up
// by default.
$('blockquote').eq(0).addClass('fade-in');
