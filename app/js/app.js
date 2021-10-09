$(document).ready(function () {
  $('.slick-slider').slick({

  });
});


function changeItem1() {
  document.getElementById('price_elem1').classList.add('button-hover');
  document.getElementById('price_button1').classList.add('button-hover');
}

function rechangeItem1(t) {
  document.getElementById('price_elem1').classList.remove('button-hover');
  document.getElementById('price_button1').classList.remove('button-hover');
}
function changeItem2() {
  document.getElementById('price_elem2').classList.add('button-hover');
  document.getElementById('price_button2').classList.add('button-hover');
}

function rechangeItem2() {
  document.getElementById('price_elem2').classList.remove('button-hover');
  document.getElementById('price_button2').classList.remove('button-hover');
}
function changeItem3() {
  document.getElementById('price_elem3').classList.add('button-hover');
  document.getElementById('price_button3').classList.add('button-hover');
}

function rechangeItem3() {
  document.getElementById('price_elem3').classList.remove('button-hover');
  document.getElementById('price_button3').classList.remove('button-hover');
}



$(function() {
	var $menu_popup = $('.menu-popup');
 
	$(".menu-yoga-mob").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu-popup').length){
			$('body').removeClass('body_pointer');
			$menu_popup.animate(
				{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
				300, 
				function(){
					$menu_popup.hide(0);
				}
			);
		}
	});
});

