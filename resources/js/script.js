var $ = jQuery.noConflict();
$(document).ready(function(){
	$(".button-collapse").sideNav();

    var isMediumAndAbove = Modernizr.mq('(min-width: 900px)')
    if(isMediumAndAbove){
        $('#menu-icon').click(function(){
            if(parseInt($('#nav-mobile').css('left')) !== 0 ){
                $('.page-content').animate({
                    'margin-left' : '240px'
                }, 200);
            }
            else{
                $('.page-content').animate({
                    'margin-left' : '0px'
                }, 200);
            }
        }).click();
    }

  	$(".toggle-wrapper > .col").click(function(){
  		$(this).parent().find(".toggle-section").removeClass("active");
  		$(this).find(".toggle-section").addClass("active");
  	});

    setTimeout(function(){
      $("#slider").dateRangeSlider();
    },200);


    $('.modal-trigger').leanModal();

    $('#nav-mobile .group a:not(.dropdown-button').click(function(e){
      e.stopPropagation();
      e.preventDefault();
      var hash = $(this).attr('href');
      $('#nav-mobile .group').removeClass('active');
      $('.people-collapsed-wrapper h4').removeClass('active');
      $(this).parent().addClass('active');
      $(hash).find('h4').addClass('active');
      var scrollOffset = $('#couple').parent().offset().top + 50;
      $('html,body').animate({
        scrollTop : $(hash).offset().top - scrollOffset
      }, 'slow');
    });

   /*modal scroll*/
    $(".modal-content").slimScroll({
          height: '550px'
    });


    //card.js
    $('.people-collapsed-wrapper .card').click(function(){
        var _this = this;
        if(!$(this).hasClass('expanded')){  
          if($('.people-collapsed-wrapper .expanded .card').length === 1){
              var card = $('.people-collapsed-wrapper .expanded.card');
              $(card).toggleClass('hoverable expanded').parent().toggleClass('expanded');
              var expandedSection = $(card).parent().next();
              expandedSection.removeAttr('style');
              expandedSection.toggleClass('hide');
              $(card).closest('.box').removeAttr('style');
          }
        }
        var expandedSection = $(this).parent().next();
        $(this).toggleClass('hoverable expanded').parent().toggleClass('expanded');
        expandedSection.toggleClass('hide');
        if(!$(this).hasClass('hoverable')){
          expandedSection.css({
            position: 'absolute',
            top: 192,
            zIndex: 100
          });
          $(this).closest('.box').css('margin-bottom', expandedSection.height());
        }
        else{
          expandedSection.removeAttr('style');
          $(this).closest('.box').removeAttr('style');
        }
    });

    $("ul.todo-tabs").tabs();

    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $('.chips-input').autocomplete({source: availableTags}).keypress(function(e){
        if(e.which !== 13) {
            return true;
        }
        var input = $(this).val();
        var chip = '<div class="chip tag-inputs"><i class="material-icons chip-close">close</i>'+input+'</div>';
        $(this).val('').parent().next().append(chip);
    });


    /*tabs scroll*/

    $(".people-scroll").slimScroll({
          height: '250px'
    });

    $(function() {
      $( ".sortable" ).sortable({items: "> .row"});
      $( ".sortable" ).disableSelection();
    });


    $(function () {
      $(".datepicker-box").datepicker({
            autoclose: true,
            todayHighlight: true
      }).datepicker('update', new Date());;
    });

    $('.editable').each(function(){
      this.contentEditable = true;
  });

    $(".dropdown-button").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $('.add-groups-btn').click(function(){
      $(this).closest('li').next().toggleClass('hide');
    });

});