let header = () => {
    let dropdown = document.getElementsByClassName('header__dropdown')[0];
    let mobileMenu = document.getElementsByClassName('header__menu--mobile')[0];
    let mobileList = document.getElementsByClassName('header__menu--mobile')[0].getElementsByClassName('menu__list')[0];

    if (dropdown) {
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

    if (section) {
        for(let i = 0;i < section.length;i++) {
            next[i].onclick = () => {
                if (i < section.length-1) {
                    section[i+1].style.display = 'block'; 
                    section[i].style.display = 'none';
                } else if (counter == 7) {
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
        for(let i = 0;i < casual.length;i++) {
            casual[i].getElementsByClassName('test__item')[0].onclick = () => {
                casual[i].classList.add('test--correct');
                casual[i].getElementsByClassName('test__item')[0].classList.add('test__item--correct');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block';   
                text[i].classList.add('test__text--center');
                counter++;
            }
            casual[i].getElementsByClassName('test__item')[1].onclick = () => {
                casual[i].classList.add('test--incorrect');
                casual[i].getElementsByClassName('test__item')[1].classList.add('test__item--incorrect');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                text[i].classList.remove('test__text--center');
            }
            casual[i].getElementsByClassName('test__item')[2].onclick = () => {
                casual[i].classList.add('test--incorrect');
                casual[i].getElementsByClassName('test__item')[2].classList.add('test__item--incorrect');
                casual[i].getElementsByClassName('test__image')[0] = 'url(static/img/test-1.jpg)';
                casual[i].getElementsByClassName('test__list--disabled')[0].style.display = 'block'; 
                text[i].classList.remove('test__text--center');
            }
        }
        for(let i = 0;i < country.length;i++) {
            country[i].onclick = () => {  
                if (country[i].getAttribute('aria-label') == 'Kazakhstan  ') {
                    counter++;
                    let event = new Event("click");
                    next[1].dispatchEvent(event);
                } else {
                    let event = new Event("click");
                    next[1].dispatchEvent(event);
                }
            }
        }
        for(let i = 0;i < flag.length;i++) {
            flag[i].onclick = () => {  
                if (i == 3) {
                    counter++;
                    let event = new Event("click");
                    next[2].dispatchEvent(event);
                } else {
                    let event = new Event("click");
                    next[2].dispatchEvent(event);
                }
            }
        }
    }
}
test();

let firework = () => {
    const TWO_PI = Math.PI * 2;
    const HALF_PI = Math.PI * 0.5;
    var viewWidth = 512,
        viewHeight = 512,
        drawingCanvas = document.getElementById("drawing_canvas"),
        ctx,
        timeStep = (1/60);

    if(drawingCanvas) {
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
            for (var i = 0; i < 128; i++) {
                var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
                var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
                var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
                var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);
                particles.push(new Particle(p0, p1, p2, p3));
            }
        }
        function update() {
            switch (phase) {
                case 0:
                    loader.progress += (1/45);
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
        window.onload = function() {
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
            else if (phase === 2 && checkParticlesComplete()) {
                phase = 0;
                loader.reset();
                exploader.reset();
                particles.length = 0;
                createParticles();
            }
            requestAnimationFrame(loop);
        }
        function checkParticlesComplete() {
            for (var i = 0; i < particles.length; i++) {
                if (particles[i].complete === false) return false;
            }
            return true;
        }
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
    }
}
firework();

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
            if (!textarea.value) {
                error[4].style.display = 'block';
                textarea.classList.add('feedback--error');
            } else {
                error[4].style.display = 'none';
                textarea.classList.remove('feedback--error');
            }
            for (let i = 0;i < input.length;i++) {
                if (!input[i].value) {
                    error[i].style.display = 'block';
                    input[i].classList.add('feedback--error');
                } else {
                    error[i].style.display = 'none';
                    input[i].classList.remove('feedback--error');
                }
            }
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
                    input[i].classList.add('success--error');
                } else {
                    error[i].style.display = 'none';
                    input[i].classList.remove('success--error');
                }
            }
        }
        button.onclick = () => {
            validate();
        }
    }
}
testFeedback();

// $(document).bind( 'mousewheel', function (e) { 
//     var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
//     e.preventDefault(); 
//     e.stopPropagation(); 
//     $(document.body).stop().animate( { 
//          scrollTop : nt 
//      } , 500 , 'easeInOutCubic' );  
// } );
// window.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
// $(function() {
//     $.scrollify({
//         section : ".scroll-slide",
//     });
//     });
$(document).ready(function() {

    $('body').smoothScroll({
      delegateSelector: 'ul.mainnav a'
    });

    $('p.subnav a').click(function(event) {
      event.preventDefault();
      var link = this;
      $.smoothScroll({
        scrollTarget: link.hash
      });
    });

    $('#change-speed').bind('click', function() {
      var $p1 = $('ul.mainnav a').first();
      var p1Opts = $p1.smoothScroll('options') || {};

      p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
      $p1.smoothScroll('options', p1Opts);
    });

    $('button.scrollsomething').bind('click', function(event) {
      event.preventDefault();
      $.smoothScroll({
        scrollElement: $('div.scrollme'),
        scrollTarget: '#findme'
      });
    });
    $('button.scrollhorz').bind('click', function(event) {
      event.preventDefault();
      $.smoothScroll({
        direction: 'left',
        scrollElement: $('div.scrollme'),
        scrollTarget: '.horiz'
      });

    });

    $('#scroll-relative-plus').on('click', function() {
      var wHeight = $(window).height();
      $.smoothScroll('+=100px');
    });
    $('#scroll-relative-minus').on('click', function() {
      $.smoothScroll('-=100px');
    });
    $('.header--top').on('click', function() {
      var wHeight = $(window).height();
      var wWidth = $(window).width();
      var rel = $(this).hasClass('down') ? '+=' : '-=';

      if (wWidth <= 560) {
        wHeight -= 130;
      }

      $.smoothScroll(rel + wHeight);
    });
  });