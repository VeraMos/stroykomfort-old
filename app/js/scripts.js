$(document).ready(function () {


    $('.main-slider__list').slick({
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        dots: true
    });


   $('.slider-reviews').slick({
   		slidesToShow: 2,
  		slidesToScroll: 1,
        prevArrow: '<button class="prev-left__black"></button>',
        nextArrow: '<button class="prev-right__black"></button>',
        responsive: [
    	{
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      	}
    	}
    	]

       });

     // tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });

   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      //dots: true,
      arrows: true,
      //centerMode: true,
      //focusOnSelect: true,
      prevArrow: '<button class="prev-left__black"></button>',
      nextArrow: '<button class="prev-right__black"></button>',
      infinite: true,
      initialSlide: 1
    });

    $('.main-form__file').styler({
       fileBrowse: 'Прикрепить файл',
       filePlaceholder: 'Перетащите либо прикрепите файл',
        singleSelectzIndex: '999',
        onSelectOpened: function () {
           // к открытому селекту добавляется красная обводка
            //$(this).css('box-shadow: 0px 15px 31px rgba(0, 0, 0, 0.1);');
        }
    });


  });