      $(function(){

      $('a[href*=#]').click(function() {

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {

      var $target = $(this.hash);

      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {

      var targetOffset = $target.offset().top;
	  var $tempo=$('a[vel=]');
	  if ($tempo==0) {$tempo==36000;}

      $('html,body').animate({scrollTop: targetOffset}, $tempo);
       
      return false;
       
      }
       
      }
       
      });
       
      });