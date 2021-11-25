window.addEventListener('load', function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 50) {
			$('.s-header').addClass('s-header_scrolled');
		} else {
			$('.s-header').removeClass('s-header_scrolled');
		}
	});

	let menuToggleBtn = document.querySelector('.b-burger');
	let menu = document.querySelector('.b-menu');
	let menuCloseBtn = document.querySelector('.b-menu-close');

	const menuOpen = () => {
		menu.classList.add('b-menu_visible');
	};
	const menuClose = () => {
		menu.classList.remove('b-menu_visible');
	};
	const menuToggle = () => {
		menu.classList.toggle('b-menu_visible');
	};

	menuToggleBtn.addEventListener('click', function() {
		menuToggle();
	});

	menuCloseBtn.addEventListener('click', function() {
		menuClose();
	});

	let searchInput = document.querySelector('.b-search');

	searchInput.addEventListener('click', function() {
		this.classList.add('b-search_focused');
	});

	document.addEventListener('click', function(e) {
		let target = e.target;
		let its_searchInput = target == searchInput || searchInput.contains(target);
		let its_menu = target == menu || menu.contains(target);
		let its_burger = target == menuToggleBtn || menuToggleBtn.contains(target);
		let menu_is_active = menu.classList.contains('b-menu_visible');
		if (!its_searchInput){
			searchInput.classList.remove('b-search_focused');
		}
		if (!its_menu && !its_burger && menu_is_active){
			menuClose();
		}
	});

	const rightButtons = Array.from(document.getElementsByClassName('b-ribbon-btn_right'));
	const leftButtons = Array.from(document.getElementsByClassName('b-ribbon-btn_left'));
	const containers = Array.from(document.getElementsByClassName('b-ribbon__row'));

	let index = 0;
	for (const rightButton of rightButtons) {
		const container = containers[index];
		rightButton.addEventListener("click", function () {
			container.scrollLeft += 300; 
			
		});
		index++;
	}

	index = 0;
	for (const leftButton of leftButtons) {
		const container = containers[index];
		leftButton.addEventListener("click", function () {
			container.scrollLeft -= 300;
			
		});
		index++;
	}

	const cardSliders = Array.from(document.getElementsByClassName('b-card-slider'));

	for (const cardSlider of cardSliders) {		
		var slider = tns({
			container: cardSlider,
			items: 1,
			
		});
	}

	let headerSearchBtn = document.querySelector('.l-search');
	let header = document.querySelector('.s-header');
	let headerSearchForm = document.querySelector('.s-header__search');
	let headSearchClose = document.querySelector('.b-search__close');
	headerSearchBtn.addEventListener('click', function(e) {
		e.preventDefault();
		header.classList.add('s-header_search');
		headerSearchForm.classList.add('s-header__search_smvisible');

	});

	headSearchClose.addEventListener('click', function(e) {
		e.stopPropagation();
		header.classList.remove('s-header_search');
		headerSearchForm.classList.remove('s-header__search_smvisible');
	});

	let accordeonItems = Array.from(document.getElementsByClassName('b-product-descr__head'));
	
	for (const accordeonItem of accordeonItems) {		
		accordeonItem.addEventListener('click', function() {
			let parent = this.closest('.b-product-descr');
			console.log(parent);
			parent.classList.toggle('b-product-descr_opened');
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

	

	$('.b-input-box__select').selectize({
		scrollDuration: 60,
	});

	$('.b-card-button').on('click', function(e) {
		e.preventDefault();
		let cardPopup = $(this).parent('.b-card-info').find('.b-card-popup');
		cardPopup.fadeToggle();
	});
	
	

});
