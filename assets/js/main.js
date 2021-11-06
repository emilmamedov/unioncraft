$(function() {
    // гамбургер меню
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let searchForm = $('.search_form');
    let contactUs = $('.contact_us');
    let filter = $('aside');
    let itemPrice = $('.price');
    let productImg = $('.product_content-left');
    let protuctText = $('.product_content-right .content_subtitle');
    let calc = $('.product_calc');

    if ($(window).width() < 1155) {
        mobile = true;
        $('header .menu').append(searchForm);
        $('header .container').before(contactUs);
        $('.filter_mob').append(filter);
        $('.mob_price-content').each(function() {
            let itemPriceMob = $(this).closest('.item').find(itemPrice)
            $(this).append(itemPriceMob)
        });
        $('.product_content-right .content_title').after(productImg);
        $('.product_content-right .item_bottom-btns').after(protuctText);
        $('.product_content-right .product_price').append(calc);
    }

    $(window).on('resize', function() {
        if ($(window).width() < 1155 && !mobile) {
            mobile = true;
            $('header .menu').append(searchForm);
            $('header .container').before(contactUs);
            $('.filter_mob').append(filter);
            $('.mob_price-content').each(function() {
                let itemPriceMob = $(this).closest('.item').find(itemPrice)
                $(this).append(itemPriceMob)
            });
            $('.product_content-right .content_title').after(productImg);
            $('.product_content-right .item_bottom-btns').after(protuctText);
            $('.product_content-right .product_price').append(calc);

        }

        if ($(window).width() >= 1155 && mobile) {
            mobile = false;
            $('header .logo').after(searchForm);
            $('header .basket').before(contactUs);
            $('.main .container').prepend(filter);
            $('.item_bottom').each(function() {
                let itemPriceMob = $(this).closest('.item').find(itemPrice)
                $(this).append(itemPriceMob)
            });
            $('.product_content-about').prepend(productImg);
            $('.product_content-right .content_title').after(protuctText);
            $('.product_content-right .product_subtitle').after(calc);

        }
    });


    // АККАРДИОН КАТАЛОГ
    $('.filter_wrapper').on('click', function() {
        $(this).toggleClass('active');
        let orderContent = $(this).closest('.filter').find('.inner');
        orderContent.slideToggle();
    });

    // СОРТИРОВКА
    $('.select .visual_part').on('click', function() {
        $('.select .list').slideToggle();
    });

    $('.select .list a').on('click', function(e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
        $(this).parents('.list').slideToggle();
    });

    // scrollto ПЛАВНЫЕ ЯКОРИ
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.goToTop_btn').fadeIn();
        } else {
            $('.goToTop_btn').fadeOut();
        }
    });

    $('.goToTop_btn').click(function() {
        scrollto(0, 1000);
    });

    window.scrollto = function(destination, speed) {
        if (typeof speed == 'undefined') {
            speed = 800;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination - 60
        }, speed);
    };

    $("a.scrollto").click(function() {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset();
        scrollto(destination);
        return false;
    });


    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {
        item.addEventListener('click', function() {
            document.body.style.overflow = "hidden";
            let dataValue = this.getAttribute("data-btn");
            let modal = document.querySelector('.' + dataValue)
            modal.style.display = 'flex';
        });
    });

    document.querySelectorAll('.modal').forEach(function(item) {
        item.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('close')) {
                document.body.style.overflow = "visible";
                this.style.display = "none";
            }
        });
    });

});