let header = () => {
    let dropdown = document.getElementsByClassName('header__dropdown')[0];
    let item = document.getElementsByClassName('menu__item');
    let mobileMenu = document.getElementsByClassName('header__menu--mobile')[0];

    if (dropdown) {
        let mobileList = document.getElementsByClassName('header__menu--mobile')[0].getElementsByClassName('menu__list')[0];
        let toggleDropdown = () => {
            if (mobileMenu.style.display == "block") {
                mobileMenu.style.display = "none";
                dropdown.classList.remove('header__dropdown--opened');
            } else {
                mobileMenu.style.display = "block";
                dropdown.classList.add('header__dropdown--opened');
            }
        }
        dropdown.onclick = () => {
            toggleDropdown();
        }
        mobileMenu.onclick = () => {
            mobileList.onclick = (e) => {
              e.stopPropagation();
            }
            toggleDropdown();
        }
    }
}
header();

let cookies = () => {
    let close = document.getElementsByClassName('cookies__close')[0];
    let closeButton = document.getElementsByClassName('cookies__button')[0];
    let cookies = document.getElementsByClassName('cookies')[0];

    if (cookies) {
        let closeCookies = () => {
            cookies.style.display = 'none';
        }
        close.onclick = () => {
            closeCookies();
        }
        closeButton.onclick = () => {
            closeCookies();
        }
    }
}
cookies();

let test = () => {
    let test = document.getElementsByClassName('test')[0];
    let section = document.getElementsByClassName('test');
    let casual = document.getElementsByClassName('test__casual');
    let next = document.getElementsByClassName('test__next');
    let country = document.getElementsByTagName('path');
    let flag = document.getElementsByClassName('test__flag');
    let text = document.getElementsByClassName('test__text');
    let result = document.getElementsByClassName('test__result')[0];
    let number = document.getElementsByClassName('result__number')[0];
    let successBlock = document.getElementsByClassName('result__success--block')[0];
    let failureBlock = document.getElementsByClassName('result__failure--block')[0];
    let success = document.getElementsByClassName('result__success')[0];
    let failure = document.getElementsByClassName('result__failure')[0];
    let counter = 0;

    if (test) {
        for(let i = 0;i < section.length;i++) {
            next[i].onclick = () => {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                if (i < section.length-1) {
                    section[i+1].style.display = 'block'; 
                    section[i].style.display = 'none';
                } else if (counter == 7) {
                    if(screen.width<768) {
                        firework(1000);
                    } else {
                        firework(760);
                    }
                    result.style.display = 'flex';
                    section[i].style.display = 'none';
                    number.innerHTML = '7/7';
                    successBlock.style.display = 'block';
                    success.style.display = 'block';

                }  else {
                    result.style.display = 'flex';
                    section[i].style.display = 'none';
                    number.innerHTML = counter+'/7';
                    failureBlock.style.display = 'block';
                    failure.style.display = 'flex';
                }
            }
        }
        let answers = (i,correct, incorrect, incorrect2) => {
            casual[i-1].getElementsByClassName('test__item')[correct-1].onclick = () => {
                casual[i-1].classList.add('test--correct');
                casual[i-1].getElementsByClassName('test__item')[correct-1].classList.add('test__item--correct');
                casual[i-1].getElementsByClassName('test__image')[0].style.backgroundImage = `url(static/img/test-${i}-${correct}.jpg)`;
                casual[i-1].getElementsByClassName('test__list--disabled')[0].style.display = 'block';   
                casual[i-1].getElementsByClassName('test__text')[0].classList.add('test__text--center');
                counter++;
            }
            casual[i-1].getElementsByClassName('test__item')[incorrect-1].onclick = () => {
                casual[i-1].classList.add('test--incorrect');
                casual[i-1].getElementsByClassName('test__item')[incorrect-1].classList.add('test__item--incorrect');
                casual[i-1].getElementsByClassName('test__image')[0].style.backgroundImage = `url(static/img/test-${i}-${incorrect}.jpg)`;
                casual[i-1].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                casual[i-1].getElementsByClassName('test__text')[0].classList.remove('test__text--center');
            }
            casual[i-1].getElementsByClassName('test__item')[incorrect2-1].onclick = () => {
                casual[i-1].classList.add('test--incorrect');
                casual[i-1].getElementsByClassName('test__item')[incorrect2-1].classList.add('test__item--incorrect');
                casual[i-1].getElementsByClassName('test__image')[0].style.backgroundImage = `url(static/img/test-${i}-${incorrect2}.jpg)`;
                casual[i-1].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                casual[i-1].getElementsByClassName('test__text')[0].classList.remove('test__text--center');
            }
        }
        answers(1,1,2,3);
        answers(2,1,2,3);
        answers(3,1,2,3);
        answers(4,1,2,3);
        answers(5,1,2,3);
        for(let i = 0;i < country.length;i++) {
            country[i].onclick = () => {  
                if (country[i].getAttribute('aria-label') == 'Kazakhstan  ') {
                    counter++;
                    country[i].style.fill = '#006351';
                    section[1].classList.add('test--correct');
                    section[1].getElementsByClassName('test__list--disabled')[0].style.display = 'block';
                    section[1].getElementsByClassName('test__text')[0].style.display = 'flex';
                    section[1].getElementsByClassName('test__text')[0].classList.add('test__text--center');
                    section[1].getElementsByClassName('test__another-text')[0].innerHTML = 'Поздравляем, у вас блестящие познания в географии!';
                } else {
                    country[i].style.fill = '#910316';
                    section[1].classList.add('test--incorrect');
                    section[1].getElementsByClassName('test__list--disabled')[0].style.display = 'block';
                    section[1].getElementsByClassName('test__text')[0].style.display = 'flex';
                    section[1].getElementsByClassName('test__text')[0].classList.remove('test__text--center');
                    section[1].getElementsByClassName('test__another-text')[0].innerHTML = 'Ой, а мы не здесь.';
                }
            }
        }
        for(let i = 0;i < flag.length;i++) {
            flag[i].onclick = () => {  
                if (i == 3) {
                    counter++;
                    section[2].classList.add('test--correct');
                    section[2].getElementsByClassName('test__list--disabled')[0].style.display = 'block';
                    section[2].getElementsByClassName('test__text')[0].style.display = 'flex';
                    section[2].getElementsByClassName('test__text')[0].classList.add('test__text--center');
                    section[2].getElementsByClassName('test__another-text')[0].innerHTML = 'Правда, красиво?';
                } else {
                    section[2].classList.add('test--incorrect');
                    section[2].getElementsByClassName('test__list--disabled')[0].style.display = 'block';
                    section[2].getElementsByClassName('test__text')[0].style.display = 'flex';
                    section[2].getElementsByClassName('test__text')[0].classList.remove('test__text--center');
                    if (i==0) {
                        section[2].getElementsByClassName('test__another-text')[0].innerHTML = 'Нет, это же флаг Вьетнама. А мы любим небо и орлов.'
                    }
                    if (i==2) {
                        section[2].getElementsByClassName('test__another-text')[0].innerHTML = 'Нет, это же флаг Габона. А мы любим небо и орлов.'
                    }
                    if (i==1) {
                        section[2].getElementsByClassName('test__another-text')[0].innerHTML = 'А это флаг Казахского ханства 1465–1847 гг. Сейчас мы любим небо и орлов.'
                    }
                }
            }
        }
    }
}
test();
 let firework = (amount) => { 
    const TWO_PI = Math.PI * 2;
    const HALF_PI = Math.PI * 0.5;

    // canvas settings
    var viewWidth = 800,
        viewHeight = amount,
        drawingCanvas = document.getElementById("drawing_canvas"),
        ctx,
        timeStep = (1/65);

    Point = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };

    Particle = function(p0, p1, p2, p3) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;

        this.time = 0;
        this.duration = 3 + Math.random() * 2;
        this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

        this.w = 8;
        this.h = 6;

        this.complete = false;
    };

    Particle.prototype = {
        update:function() {
            this.time = Math.min(this.duration, this.time + timeStep);

            var f = Ease.outCubic(this.time, 0, 1, this.duration);
            var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

            var dx = p.x - this.x;
            var dy = p.y - this.y;

            this.r =  Math.atan2(dy, dx) + HALF_PI;
            this.sy = Math.sin(Math.PI * f * 10);
            this.x = p.x;
            this.y = p.y;

            this.complete = this.time === this.duration;
        },
        draw:function() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.r);
            ctx.scale(1, this.sy);

            ctx.fillStyle = this.color;
            ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

            ctx.restore();
        }
    };

    Loader = function(x, y) {
        this.x = x;
        this.y = y;

        this.r = 24;
        this._progress = 0;

        this.complete = false;
    };

    Loader.prototype = {
        reset:function() {
            this._progress = 0;
            this.complete = false;
        },
        set progress(p) {
            this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

            this.complete = this._progress === 1;
        },
        get progress() {
            return this._progress;
        },
        draw:function() {
            ctx.fillStyle = 'transparent';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.fill();
        }
    };

    // pun intended
    Exploader = function(x, y) {
        this.x = x;
        this.y = y;

        this.startRadius = 24;

        this.time = 0;
        this.duration = 0.4;
        this.progress = 0;

        this.complete = false;
    };

    Exploader.prototype = {
        reset:function() {
            this.time = 0;
            this.progress = 0;
            this.complete = false;
        },
        update:function() {
            this.time = Math.min(this.duration, this.time + timeStep);
            this.progress = Ease.inBack(this.time, 0, 1, this.duration);

            this.complete = this.time === this.duration;
        },
        draw:function() {
            ctx.fillStyle = 'transparent';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
            ctx.fill();
        }
    };

    var particles = [],
        loader,
        exploader,
        phase = 0;

    function initDrawingCanvas() {
        drawingCanvas.width = viewWidth;
        drawingCanvas.height = viewHeight;
        ctx = drawingCanvas.getContext('2d');

        createLoader();
        createExploader();
        createParticles();
    }

    function createLoader() {
        loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
    }

    function createExploader() {
        exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
    }

    function createParticles() {
        for (var i = 0; i < 900; i++) {
            var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
            var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
            var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
            var p3 = new Point(Math.random() * viewWidth, viewHeight +64  );

            particles.push(new Particle(p0, p1, p2, p3));
        }
    }

    function update() {

        switch (phase) {
            case 0:
                loader.progress += (10);
                break;
            case 1:
                exploader.update();
                break;
            case 2:
                particles.forEach(function(p) {
                    p.update();
                });
                break;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, viewWidth, viewHeight);

        switch (phase) {
            case 0:
                loader.draw();
                break;
            case 1:
                exploader.draw();
                break;
            case 2:
                particles.forEach(function(p) {
                    p.draw();
                });
            break;
        }
    }
    let initCanvas = () => {
        initDrawingCanvas();
        requestAnimationFrame(loop);
    };

    function loop() {
        update();
        draw();

        if (phase === 0 && loader.complete) {
            phase = 1;
        }
        else if (phase === 1 && exploader.complete) {
            phase = 2;
        }
        // else if (phase === 2 && checkParticlesComplete()) {
        //     // reset
        //     phase = 0;
        //     loader.reset();
        //     exploader.reset();
        //     particles.length = 0;
        //     createParticles();
        // }

        requestAnimationFrame(loop);
    }

    function checkParticlesComplete() {
        for (var i = 0; i < particles.length; i++) {
            if (particles[i].complete === false) return false;
        }
        return true;
    }

    // math and stuff

    /**
     * easing equations from http://gizma.com/easing/
     * t = current time
     * b = start value
     * c = delta value
     * d = duration
     */
    var Ease = {
        inCubic:function (t, b, c, d) {
            t /= d;
            return c*t*t*t + b;
        },
        outCubic:function(t, b, c, d) {
            t /= d;
            t--;
            return c*(t*t*t + 1) + b;
        },
        inOutCubic:function(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
        },
        inBack: function (t, b, c, d, s) {
            s = s || 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        }
    };

    function cubeBezier(p0, c0, c1, p1, t) {
        var p = new Point();
        var nt = (1 - t);

        p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
        p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

        return p;
    }
    initCanvas();
}

let random = () => {
    let button = document.getElementsByClassName('random__button')[0];
    let random = document.getElementsByClassName('random')[0];
    let randomResult = document.getElementsByClassName('random--result')[0];
    let randomNumber = document.getElementsByClassName('random__number');
    let randomName = document.getElementsByClassName('random__name');
    let resultNumber = document.getElementsByClassName('random--result__number')[0];
    let resultName = document.getElementsByClassName('random--result__name')[0];
    
    if (random) {
        button.onclick = () => {
            firework(640);
            random.style.display = 'none';
            randomResult.style.display = 'block';
            let rand = Math.round(Math.random()*(randomName.length));
            resultNumber.innerHTML = randomNumber[rand].innerHTML;
            resultName.innerHTML = randomName[rand].innerHTML;
        }
    }
}
random();

let feedback = () => {
    let form  = document.getElementsByClassName('feedback__form')[0];
    let block = document.getElementsByClassName('feedback__block');
    let input = document.getElementsByClassName('feedback__input');
    let textarea = document.getElementsByClassName('feedback__textarea')[0];
    let error = document.getElementsByClassName('feedback__error');
    let button  = document.getElementsByClassName('feedback__button')[0];
    let realButton  = document.getElementsByClassName('feedback__real-button')[0];

    if (form) {
        let validate = () => {
            for (let i = 0;i < input.length;i++) {
                if (!input[i].value) {
                    error[i].style.display = 'block';
                    error[i].innerHTML = 'Поле не заполнено'
                    input[i].classList.add('feedback--error');
                } else {
                    error[i].style.display = 'none';
                    input[i].classList.remove('feedback--error');
                }
            }
            if (!textarea.value) {
                error[4].style.display = 'block';
                error[i].innerHTML = 'Поле не заполнено'
                textarea.classList.add('feedback--error');
            } else {
                error[4].style.display = 'none';
                textarea.classList.remove('feedback--error');
            }
            let validation = (valid,number) => {
                if(!(valid.test(input[number].value))) {
                    error[number].style.display = 'block';
                    error[number].innerHTML = 'Заполните поле в правильном формате'
                    input[number].classList.add('feedback--error');
                }
            }
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,0);
            validation(/[A-Za-zА-Яа-яЁё0-9_-]+@[A-Za-zА-Яа-яЁё0-9_-]+\.[a-z]{2,6}/,1);
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,2);
            validation(/[0-9+]{9,13}/,3);
        }
        button.onclick = () => {
            validate();
        }
    }
}
feedback();

let testFeedback = () => {
    let form  = document.getElementsByClassName('success__form')[0];
    let block = document.getElementsByClassName('success__block');
    let input = document.getElementsByClassName('success__input');
    let error = document.getElementsByClassName('success__error');
    let button  = document.getElementsByClassName('success__button')[0];

    if (form) {
        let validate = () => {
            for (let i = 0;i < input.length;i++) {
                if (!input[i].value) {
                    error[i].style.display = 'block';
                    error[i].innerHTML = 'Поле не заполнено';
                    input[i].classList.add('success--error');
                } else {
                    error[i].style.display = 'none';
                    input[i].classList.remove('success--error');
                }
            }
            let validation = (valid,number) => {
                if(!(valid.test(input[number].value))) {
                    error[number].style.display = 'block';
                    error[number].innerHTML = 'Заполните поле в правильном формате'
                    input[number].classList.add('success--error');
                }
            }
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,0);
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,1);
            validation(/[0-9]{2}[A-Za-zА-Яа-яЁё0-9\s-\.]{2,15}[0-9]{2,4}/,2);
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,3);
            validation(/[A-Za-zА-Яа-яЁё-\s]{2,30}/,4);
            validation(/[A-Za-zА-Яа-яЁё0-9-\s-]{2,50}/,5);
            validation(/[0-9+]{9,13}/,6);
            validation(/[A-Za-zА-Яа-яЁё0-9_-]+@[A-Za-zА-Яа-яЁё0-9_-]+\.[a-z]{2,6}/,7);
        }
        button.onclick = () => {
            validate();
        }
    }
}
testFeedback();

let video = () => {
    let main = document.getElementsByClassName('main-page')[0];
    let video = document.getElementsByClassName('middle-1__video')[0];
    let close = document.getElementsByClassName('middle-1__close')[0];
    let open = document.getElementsByClassName('middle-1')[0];
    let frame = document.createElement('iframe');

    if(main) {
        open.onclick = () => {
            video.style.display = 'block';
            let src = document.createAttribute('src');
            src.value = 'https://www.youtube.com/embed/yBVptjY8G5A?&rel=0&showinfo=0';
            frame.setAttributeNode(src);
            video.appendChild(frame);

        }
        document.onkeydown = (e) => {
            if (e.keyCode === 27) {
                video.style.display = 'none';
                frame.parentNode.removeChild(frame); 
            }
        }
        close.onclick = () => {
            frame.parentNode.removeChild(frame); 
            video.style.display = 'none';
            

        }        
    }        
}
video();

$(document).ready(function(){
    $('.middle-1__container').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        fade: true,
        zIndex: 10,
        speed: 600,
        infinite: false,
    }).on("afterChange", function(e, slick, cur) {
        if( cur === slick.$slides.length-1 ) {
            slick.setOption("autoplay", false, true);
        }
    }); 
});

$(document).ready(function(){
    $('.bottom__slides').slick({
        autoplay: false,
        arrows: false,
        draggable: true,
        speed: 600,
        zIndex: 10,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
    }).on("afterChange", function(e, slick, cur) {
        if( cur === slick.$slides.length-1 ) {
            slick.setOption("autoplay", false, true);
        }
    }); 
});

window.addEventListener("scroll", function() {
    let item = document.getElementsByClassName('menu__item');
    let block = document.getElementsByClassName('bottom__slides')[0];
    if (( window.pageYOffset > (document.body.scrollHeight-500)/3)&&(window.pageYOffset < (document.body.scrollHeight-500)/1.5)) {
        $('.middle-1__container').slick('slickPlay');
        for(let j = 0;j <= 2;j++) {
            item[j].classList.remove('page-active');
            item[j+3].classList.remove('page-active');
        }
        item[0].classList.add('page-active');
        item[3].classList.add('page-active');
    } else if ( window.pageYOffset > (document.body.scrollHeight-500)/1.5) {
        for(let j = 0;j <= 2;j++) {
            item[j].classList.remove('page-active');
            item[j+3].classList.remove('page-active');
        }
        window.onscroll = () => {
            $('.bottom__slides').slick('slickNext');
        }  
        window.onkeydown = () => {
            if(event.keyCode==40) {
                $('.bottom__slides').slick('slickNext');
            }
        }
        item[1].classList.add('page-active');
        item[4].classList.add('page-active');
    } else if ( window.pageYOffset < (document.body.scrollHeight-500)/3) {
            for(let j = 0;j <= 2;j++) {
                item[j].classList.remove('page-active');
                item[j+3].classList.remove('page-active');
            }
        }
}, false);

let scroll = () => {
    let  $fullpage = $('.main-page');
    if($fullpage[0]){
        $fullpage.fullpage({
            anchors:['firstPage', 'secondPage', 'thirdPage'],
            autoScrolling: true,
            navigation: false,
            css3: true,
            scrollingSpeed: 1000,
            scrollBar: true,
        });
    }   
}
scroll();