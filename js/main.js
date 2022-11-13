jQuery(document).ready(function(){

	var servicesList = {
		press: {
			title: 'Прессотерапия + <b>лазерный липолиз</b> <span>в подарок</span>',
			deskTopimg: 'img/services/1.png',
			mobileImg: 'img/services/mobile/11.png',
			price: '2500 ₽',
			content: `
			<p>Прессотерапия – это компрессионный или лимфодренажный массаж. Процедура проводится механически, при помощи специального костюма и присоединяющегося к нему аппарата. 
			Принято считать, что эффективность от прессотерапии равноценна нескольким сеансам антицеллюлитного массажа. 
			Процедура может проводиться как мужчинам, так и женщинам.</p>
			<p>Под воздействием попеременно нагнетаемого в специальный костюм воздуха происходит выведение из организма избыточной жидкости, 
			происходит раздражение мелких рецепторов, что приводит к усилению метаболизма и расщеплению жировых отложений.</p>
			<p>Показания к процедуре:</p>
			<ul>
			   <li>целлюлит;
				</li><li>избыточная масса тела в сочетании с очаговыми отложениями жира;</li>
				<li>мышечное напряжение;</li>
				<li>спайки брюшной полости и запоры;</li>
				<li>подагра и другие заболевания опорно-двигательного аппарата;</li>
				<li>синдром хронической усталости и стрессы различной природы;</li>
				<li>как профилактика вышеперечисленного </li>
			</ul>
			<p>Для получения желаемого и стойкого эффекта данную манипуляцию следует проводить не меньше 10 раз и повторять 2-3 раза в неделю. 
			Благодаря нескольким сеансам отмечается выраженный косметический эффект, кожа становится более упругой и подтянутой, уменьшается количество сосудистых звездочек, 
			ощущается легкость в ногах, сглаживается живот, уменьшаются признаки целлюлита.</p>`
		},
		rf: {
			title: 'RF-лифтинг Scarlet',
			deskTopimg: 'img/services/2.png',
			price: 'от 9000 ₽',
			mobileImg: 'img/services/mobile/3.png',
			content: `<p>МИКРОИГОЛЬЧАТЫЙ RF-ЛИФТИНГ SCARLET - это инновационный способ для преображения вашей кожи!</p>
			<p>Scarlet RF запускает процессы ремоделирования кожи с помощью изолированных микроигл посредством проводимой через них радиочастотной энергии.
			Процедура даёт мгновенный лифтинг-эффект, результат которого усиливается в течение месяца</p>
			<p>Кроме того запускаются процессы обновления кожи, за счёт выработки собственного коллагена и эластина, а так же усиления микроциркуляции крови.
			Процедуру рекомендовано проводить курсом 2-3 процедуры 1 раз в месяц.</p>
			<p>Но уже после первой вы заметите результат: подтянется овал лица, уйдут мелкие морщинки, улучшится цвет кожи!</p>`
		},
		carbon: {
			title: 'Карбоновый пилинг',
			deskTopimg: 'img/services/3.png',
			mobileImg: 'img/services/mobile/9.png',
			price: 'от 1500 ₽',
			content: `<p>КАРБОНОВЫЙ ПИЛИНГ - процедура очищения кожи от ороговевших клеток и кожного сала.</br>
			На лицо наносят специальный гель на основе карбона, который под действием лазера сгорает вместе с старыми клеточками кожи, остатками косметики и другими загрязнениями.</p>
			<p>Карбоновый пилинг это:</p>
			<ul>
				<li>глубокое очищение пор</li>
				<li>борьба с пигментацией</li>
				<li>регуляция работы сальных желёз</li>
				<li>лифтинг-эффект</li>
			</ul>
			</p>Кроме того, процедура всесезонная и не требует времени на восстановление!</p>
			<p>
			Можно совмещать с другими косметологическими процедурами⠀
			Длительность процедуры 30-40 минут</p>`
		},
		chemistry: {
			title: 'Химический пилинг',
			deskTopimg: 'img/services/12.png',
			mobileImg: 'img/services/mobile/10.png',
			price: 'от 600 ₽',
			content: `<p><b>Химический пилинг</b> - это косметологическая процедура, которая убирает верхний ороговевший слой клеток кожи.</br>
			В результате процедуры:</p>
			<ul>
				<li>улучшается цвет лица</li>
				<li>повышается проницаемость кожи</li>
				<li>активизируются внутренние процессы</li>
			</ul>
			<p>Мы предлагаем различные виды пилингов:</p>
			<ul>
				<li>GreenPeel</li>
				<li>Салициловой 15-25%</li>
				<li>Джесснера</li>
				<li>Ретиноевый(желтый)</li>
				<li>Миндальный</li>
			</ul>
			<p>Процедуру выполняет косметолог с большим опытом работы на качественных сертифицированных препаратах.
			На бесплатной консультации мы поможем подобрать для вас наиболее действенный пилинг.</p>`
		},
		ultra: {
			title: 'Ультразвуковая кавитация',
			deskTopimg: 'img/services/11.png',
			mobileImg: 'img/services/mobile/1.png',
			price: '1500-5000 ₽',
			content: `<p><b>Ультразвуковая кавитация</b> - эффективная процедура для устранения «жировых ловушек»</p>
			<p>Ультразвуковые волны воздействуют на жировую ткань низкими частотами. В результате возникает так называемый кавитационный эффект,
			который и является катализатором для расщепления жировых клеток.</p>
			<p>Проходя через ткани, УЗ-волны превращают клеточную жидкость в газообразную субстанцию. Когда пузырьки лопаются, происходит расщепление
			жировых клеток, а продукты распада выводятся самим организмом 👍</p>
			<p>❗Кавитация – абсолютно безопасная методика, воздействующая исключительно на подкожно-жировую клетчатку. Низкочастотные волны не наносят повреждений
			наружным и глубинным структурам кожных покровов, стенкам сосудов, мышцам и другим «хорошим» клеткам, так как все они отличаются более высокой эластичностью.</p>
			<ul>
				<li>Процедура безболезненна!</li>
				<li>Видимый результат уже после нескольких сеансов </li>
				<li>Кожа в местах обработки становится более эластичной</li>
				<li>Нет восстановительного периода!</li>
				<li>Можно совмещать с другими процедурами по телу для большей эффективности</li>
			</ul>`
		},
		tranzion: {
			title: 'Транзион',
			deskTopimg: 'img/services/5.png',
			mobileImg: 'img/services/mobile/12.png',
			price: '1500-7000 ₽',
			content: `<p>ТРАНЗИОН - физиопроцедура, заставляющая «работать» мышцы, пока вы удобно лежите на кушетке.</br>
			Согласитесь, заманчиво… вы отдыхаете, а мышцы тренируются</p>  
			<p>Действительно, это очень эффективная процедура, которая даёт видимый эффект уже после 1-2 сеансов.</p>
			<p>Она помогает:</p>
			<ul>
				<li>улучшить рельеф</li>
				<li>подтянуть фигуру</li>
				<li>добавить объём, там где это необходимо (например, в зоне ягодиц)</li>
				<li>вывести излишки воды (дренажный эффект)</li>
			</ul>
			<p>25 минут процедуры = 2,5 часа тренировок в спортзале</p>`
		},
		uvt: {
			title: 'Ударно-волновая терапия УВТ',
			deskTopimg: 'img/services/19.png',
			mobileImg: 'img/services/mobile/4.png',
			price: '1500-8500 ₽',
			content: `<p>Ударно-волновая терапия или УВТ - это физиопроцедура во время которой мы воздействуем на кожу и подкожные
			слои с помощью волн, создаваемых специальным оборудованием.</p>
			<p>Создаваемый импульс сначала моментально сжимает клетки под высоким давлением, а потом они (клетки) разжимаются под действием
			вакуума. Ощущается такое воздействие как массаж.</p>
			<p>Процедура стимулирует естественные физиологические процессы:</p>
			<ul> 
				<li>усиливает кровоток и лимфоток, </li>
				<li>ускоряет обмен веществ, </li>
				<li>способствует выводу продуктов распада из клеток, </li>
				<li>эффективно расщепляет жировую ткань</li>
			</ul>
			<p>В результате курса УВТ:</p>
			<ul>
				<li>уменьшаются объёмы </li>
				<li>уходит целлюлит</li>
				<li>кожа становится более гладкой и подтянутой</li>
			</ul>`
		},
		massage: {
			title: 'Массаж лица ручной',
			deskTopimg: 'img/services/6.png',
			mobileImg: 'img/services/mobile/6.png',
			price: '1500-10000 ₽',
			content: `<p>РУЧНОЙ МАССАЖ ЛИЦА - это целое искусство которым в совершенстве владеют наши специалисты</br>
			Курс массажа поможет:</p>
			<ul>
				<li>смоделировать овал лица</li>
				<li>убрать мелкие морщинки</li>
				<li>запустит процессы регенерации кожи</li>
				<li>дренировать ткани</li>
			</ul>
			<p>И это невероятно расслабляет!</p>`
		},
		laser: {
			title: 'Лазерная эпиляция',
			deskTopimg: 'img/services/17.png',
			mobileImg: 'img/services/mobile/8.png',
			price: '500-2500 ₽',
			content: `<p>ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - это эффективный способ избавиться от нежелательных волос.  Мы проводим процедуру на диодном лазере Magic</p>
			<p>Курс составляет 8-12 процедур. </br> 
			За месяц до начала и в течение всего курса потребуется брить зону удаления (никакого шугаринга и воска!). Это необходимо, чтобы волоски были в активной фазе роста и удаление проходило эффективно.</br>
			Процедура безболезненна! Вы почувствуете лишь легкое покалывание.</p>
			<img src="img/laser-group.png" alt="" class="laser-desktop" style="max-width:95%;">
			<img src="img/laser-group-mobile.png" class="laser-mobile" alt="" style="max-width:95%;">`
		},
		crio: {
			title: 'Криолиполиз PROSHOCK ICE',
			deskTopimg: 'img/services/14.png',
			mobileImg: 'img/services/mobile/14.png',
			price: '500 ₽',
			content: `<p><b>Криолиполиз PROSHOCK ICE</b> - это двойной удар по «лишним сантиметрам»!</p>
			<p>Процедура проводится в два этапа: криолиполиз + ударно-волновое воздействие</p>
			<p>ЭТАП 1 Криолиполиз - контролируемое воздействие холодом для достижения сокращения подкожного жирового слоя без нанесения повреждений другим тканям. 
			Жировые клетки, являются намного более чувствительными к запрограммированной программе гибели клеток с индукцией холода, чем остальные анатомические структуры, 
			такие как кожа, сосуды, нервные окончания, мышцы – они остаются незатронутыми.</p>
			<p>ЭТАП 2 Ударно-волновая терапия дробит жировые отложения на более мелкие части, чтобы ускорить и облегчить их выведение из организма.</p>
			<p>Процедура на аппарате PROSHOCK ICE позволяет уменьшить объёмы на отдельных участках тела, таких как живот, бёдра, ягодицы, руки и др.</p>
			<ul>
				<li>Сокращаются жировые отложения</li>
				<li>Уходит целлюлит</li>
				<li>Кожа становится гладкой и эластичной</li>
			</ul>
			`
		},
		greenPeel: {
			title: 'Химический пилинг Green Peel',
			deskTopimg: 'img/services/13.png',
			mobileImg: 'img/services/mobile/13.png',
			price: '2900 ₽',
			content: `<p>GREENPEEL - это процедура очищения и ухода для кожи лица и шеи.</p>
			<p>Мягкое отшелушивающее воздействие совмещено с питанием. И всё это исключительно на натуральных компонентах!</p>
			<p>Уже после первой процедуры вы почувствуете гладкость и мягкость обновлённой кожи, повысится её проницаемость для ежедневных уходовых средств</p>
			<p>Процедуру можно проводить в любое время года! Удобно, правда?</p>
			<p>Процедуру проводит косметолог с большим опытом работы, приятным бонусом будет бесплатная консультация о домашнем уходе </p>`
		},
		correction: {
			title: 'Курс коррекции фигуры пакет 1',
			deskTopimg: 'img/services/25.jpg',
			mobileImg: 'img/services/mobile/26.jpg',
			price: 'от 5000 ₽',
			content: `<p>В курс входит:</p>
			<ul>
				<li>10 процедур миостимуляции</li>
				<li>10 процедур прессотерапии</li>
				<li>10 процедур лазерного липолиза</li>
				<li>Каждая процедура длится около 30 минут. За одно посещение проходите 3 процедуры.</li>
			</ul>
			<p>По времени это занимает около 1ч 15 минут.</p>
			<p>Комплекс процедур направлен на укрепление мышц, выведение излишней воды (лимфодренаж) и уменьшение локальных жировых отложений.</p>
			<p>За курс уходит до 7 см!</p>`
		},
		mio: {
			title: 'Миостимуляция',
			deskTopimg: 'img/services/22.jpg',
			mobileImg: 'img/services/mobile/23.jpg',
			price: '2000 ₽',
			content: `<p>Миостимуляция мышц тела - это физиотерапевтическая процедура, которая направлена на коррекцию фигуры за счет нагрузки на определенные группы мышц электрическим током.</p>
			<p>Методика была создана, чтобы предотвратить атрофию мышц у ослабленных, неспособных двигаться пациентов. 
			Далее технология нашла применение у космонавтов, чьи мышцы теряют свои свойства за время нахождения в невесомости. 
			А сегодня процедура востребована и очень популярна в салонах индустрии красоты.</p>
			<p>Миостимуляция мышц проводится при помощи прибора, вырабатывающего электрические импульсы определенной силы и подающего их на специальные электроды. 
			Их нужно правильно разместить на теле, чтобы воздействовать на определенную мышцу либо их группу. 
			Под влиянием тока мышца сокращается, причем сила сокращения зависит от выбранной силы разряда. 
			Вы почувствуете как ваши мышцы «работают» без ваших усилий. Ощущения интересные, но абсолютно безболезненные.</p>
			<p>Для видимого эффекта рекомендовано пройти курс из 10 процедур. Миостимуляцию можно совмещать с другими аппаратными процедурами. </p>`
		},
		piercing: {
			title: 'Прокол мочки уха STUDEX',
			deskTopimg: 'img/services/20.jpg',
			mobileImg: 'img/services/mobile/21.jpg',
			price: '1900 ₽',
			content: `<p>Прокол мочек уха системой без щелчка STUDEX.</p>
			<p>Без боли и щелчка с моментальной установкой серьги. Идеально подходит как детям так и взрослым.</p>
			<p>В стоимость входит прокол обоих мочек и 2 серьги.</p>
			<p>У нас большой выбор украшений из медицинской стали. </p>`
		},

	}


	$('.info__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows:true, 
		appendArrows: $(".info__slider-navi"),
		autoplay: true, 
		autoplaySpeed: 3000,
		lazyLoad: 'ondemand'
	});	


	$('.specials__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows:true,
		responsive: [
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				appendArrows: $('.specials__slider-navi')
			}
			}
		],
		centerMode:true,
		centerPadding: '20px',
		lazyLoad: 'ondemand'
		/* autoplay: true, 
		autoplaySpeed: 3000,*/
	});	


	$('.services__list-left .item a').on('click', function(e) {
		
		e.preventDefault();

		let attr = $(this).attr('id');
		let id = '';

		if (typeof attr !== 'undefined' && attr !== false) {
			id = $(this).attr('id');
		} else {
			id = $(this).closest('.item').attr('id');
		}

		
		
		$('.services__list-left .item').removeClass('active');
		$(this).closest('.item').addClass('active');

		$('.services__list-left .item a').removeClass('chosen');
		$(this).addClass('chosen');
		
		$('.services__list-right h3').html( servicesList[id].title );
		$('.services__list-right-text').html( servicesList[id].content );
		$('.services__list-right-photo img').attr( 'src', servicesList[id].deskTopimg );
		$('.services__list-right-line-price .price').text( servicesList[id].price );

	})


	$('.reviews__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows:true,
		appendArrows: $(".reviews__slider-navi"),
		responsive: [
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
			}
		],
		centerMode:true,
		centerPadding: '0px',
		lazyLoad: 'ondemand'
		/* autoplay: true, 
		autoplaySpeed: 3000,*/
	});	




	$('.doctors__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows:true,
		appendArrows: $(".doctors__slider-navi"),
		lazyLoad: 'ondemand',
		responsive: [
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
			}
		],
		/* autoplay: true, 
		autoplaySpeed: 3000,*/
	});	


	$('.licenses__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows:true,
		lazyLoad: 'ondemand',
		variableWidth: true,
		appendArrows: $(".licenses__slider-navi"),
		responsive: [
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
			}
		],
		/* autoplay: true, 
		autoplaySpeed: 3000,*/
	});



	$('.chooseProcedureBox').on('click', function(){
		$(this).find('.chooseProcedureSubBox').toggle();
		$(this).addClass('toggle_borderRadius');
	});

	$('.chooseProcedureSubBox span').on('click', function(e){
		e.stopPropagation();
		$(this).parent().hide();
		$(this).parent().parent().parent().find('.input_procedure').val($(this).text());
		$(this).parent().parent().find('.chosen_span').text($(this).text());
		$(this).parent().parent().removeClass('toggle_borderRadius');
	});



	$('form').on('submit', function(e){
		
		e.preventDefault();

		let that = $(this);
		let phone = that.find('.input_phone').val();
		let procedure = that.find('.input_procedure').val();

		

		$.ajax({
            url: "send.php",
            method: 'post',
            data: {
				procedure: procedure,
				phone: phone
            },
            
			success: function (response) {		

				//console.log('phone', phone);
				//console.log('procedure', procedure);
				console.log(response);

				that.parent().find('p,h2').remove();
				that.html('<h2 style="font-weight:500;text-align: center;font-size:32px;margin: 0 auto;">Спасибо за заявку! <text style="display:block;font-size:19px">Мы скоро свяжемся с Вами</text></h2>');

			}
        }); 

	})



	$('.openModal').on('click', function(){
			
		let target = $(this).data('target');
		$('.mbox#' + target).addClass('flex');	
	});

	
	$(document).on('click', function(e) {

		let $tgt = $(e.target);
		if (!$tgt.closest('.mbox .recall-child').length && $tgt.closest('.mbox').length) {
			$('.mbox').removeClass('flex');
		}   
	
	});



	$('.top__right-menu a, footer .menu a').on('click', function(event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 53}, 500);
	});

	
	$('.menu-icon').on('click', function(event) {
		$('#menu-mobile').toggle();
	});
	
	$('#menu-mobile .menu-list a').on('click', function(event) {
		$('#menu-mobile').hide();
	});


	$('#service-mobile .close').on('click', function(event) {
		$('#service-mobile').removeClass('flex');
	});

	$('.plus-mobile').on('click', function(event) {

		$('#service-mobile .img img').attr( 'src', '' );
		
		let id = $(this).parent().attr('id');

		$('#services .services__list-left .item').removeClass('active');
		$('#services .services__list-left a').removeClass('chosen');
		$(this).parent().addClass('active');

		$('#service-mobile .title p').html( servicesList[id].title );
		$('#service-mobile .text').html( servicesList[id].content );
		$('#service-mobile .img img').attr( 'src', servicesList[id].mobileImg );

		$('#service-mobile').addClass('flex');
	
	
	});


	$(".input_phone").mask("+7 (999) 999-9999");


})






