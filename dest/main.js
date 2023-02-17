/* LANG */

function lang(){
    let lang = document.querySelector('.header__lang');
lang.addEventListener('click',function(e){
    this.classList.toggle('active');
    e.stopPropagation();
});
/************************************************************/
let langCurrent = document.querySelector('.header__lang-current .text');
let langSelect = document.querySelectorAll('.header__lang-select .item');

langSelect.forEach(function(item){
    item.addEventListener('click',function(){
        let langText = this.textContent
        console.log(langText)
        /* gán tạm */
        let langCurrentSpan = langCurrent.textContent
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan
    })
})
document.addEventListener('click',function(){
    lang.classList.remove('active');
})
}lang()

/* HEADER */
function header(){
/************************************************************/
/* let header = document.querySelector('.header')
window.addEventListener('scroll',function(){
    let scrollY = this.window.pageYOffset;
    if(scrollY > 200){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}) */
/************************************************************/
let backToTop = document.querySelector('.header .container-fluid .header__totop')
let getHeightWindow = window.innerHeight;
window.addEventListener('scroll',function(){
    let scrollY = this.window.pageYOffset;
    if(scrollY > getHeightWindow){
        backToTop.classList.add('active')
    }else{
        backToTop.classList.remove('active')
    }
})
backToTop.addEventListener('click',function(){
    window.scrollTo({
            top:0,
            behavior:'smooth'
        })
})
/**************/
backToTop.addEventListener('click',function(){
    lang.classList.toggle('active');
})

}
header()
/*******NAV*******/
function menuMobile(){
    const btnMenu = document.querySelector('.header .container-fluid .right .btnmenu'),
         nav = document.querySelector('.nav');

    btnMenu.addEventListener('click',function(){
        this.classList.toggle('active')
        nav.classList.toggle('active')
    })
    //hide NAV
    function hideNav(){
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
    }
    //resize window
    window.addEventListener('resize',function(){
        let wWindow = window.innerWidth;
        if(wWindow > 992){
            hideNav()
        }
    })
}
menuMobile()

/*******3 VIDEOS*******/
function videos(){
let imgVideos = document.querySelectorAll('.videos__list-item .video'),
    modalVideo = document.querySelector('.popupvideo'),
    iframe = document.querySelector('.popupvideo__inner-iframe iframe'),
    btnClose = document.querySelector('.popupvideo__inner .close');

   imgVideos.forEach(function(video){
    video.addEventListener('click',function(){
        //hiện modal video
        modalVideo.classList.add('active')
        //lấy ID video
        let dataID = video.getAttribute('data-video-src')
        // set ID iframe 
        iframe.setAttribute('src', 'http://www.youtube.com/embed/'+dataID+'?autoplay=1')
    })
   })

   function closeModal(){
        //hide Modal
        modalVideo.classList.remove('active')
        // Gỡ iframe
        iframe.setAttribute('src', '')
   }
   btnClose.addEventListener('click',function(){
    closeModal()
   })
   modalVideo.addEventListener('click',function(){
    closeModal()
   })
}
videos()

/*******NEWS*******/
function news(){
    let tabs = document.querySelectorAll('.news__tab-item'),
        listNews = document.querySelectorAll('.news__list');
    tabs.forEach(function(tab){
        tab.addEventListener('click',function(){
            tabs.forEach(function(tab){
                tab.classList.remove('active')
            })
            tab.classList.add('active')

            //HIDE ALL NEWS LIST
            listNews.forEach(function(lists){
                lists.classList.remove('active')
            })
            let id = this.dataset.tab
            //ADD LIST
            document.querySelector('.news__list-'+id).classList.add('active')
        })
    })
}
news()

/*******MENU*******/
function menuScroll(){

    function removeActiveMenu(){
        menu.forEach(function(menu_element, menu_index){
            menu_element.classList.remove('active')
            })
    }

    let menu = document.querySelectorAll('.header .container-fluid .header__menu a');
    let heightHeader = document.querySelector('header').offsetHeight;
    let sections = [];
    menu.forEach(function(element, index){
        let className = element.getAttribute('href').replace('#','')
        let section = document.querySelector('.'+className)
        sections.push(section);
        window.addEventListener('scroll',function(e){
        let positionScroll = this.window.pageYOffset;
        //kiem tra vi tri scroll
        sections.forEach(function(section, index){
            if(positionScroll > section.offsetTop - heightHeader && positionScroll < section.offsetTop + section.offsetHeight){
                removeActiveMenu();
                menu[index].classList.add('active')
            }else{
                menu[index].classList.remove('active')
            }
        })
        })
    })
}menuScroll()

function menuClick(){
    function removeActiveMenu(){
        menu.forEach(function(menu_element, menu_index){
            menu_element.classList.remove('active')
            })
    }

    let menu = document.querySelectorAll('.header .container-fluid .header__menu a');
    let heightHeader = document.querySelector('header').offsetHeight;
    let sections = [];
    menu.forEach(function(element, index){
        let className = element.getAttribute('href').replace('#','')
        let section = document.querySelector('.'+className)
        sections.push(section);
        element.addEventListener('click',function(e){
            e.preventDefault();
            let positionSection = section.offsetTop;
            sections.push(section);
            window.scrollTo({
                top : positionSection - heightHeader + 1,
                behavior : 'smooth'
            })
            removeActiveMenu();
            element.classList.add('active');
        })
    })
}menuClick()
/*******SLIDER*******/
function handleSliderHero(){
    //KHỞI TẠO
    var slider = document.querySelector('.slider__list');
    var flktySlider = new Flickity( slider, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    fade: true,
    //NUMBER
    on: {
        ready: function() {
        console.log('Flickity is ready');
        hanleDotSlider();
        },
        change: function( index ) {
        console.log( 'Slide changed to' + index );
        handlePaggingSlider(index)
        }
    },
    });

    //CONTROL
    let btnPrev = document.querySelector('.slider__bottom-controls .--prev');
    let btnNext = document.querySelector('.slider__bottom-controls .--next');

    btnPrev.addEventListener('click',function(){
        flktySlider.previous(true)
    })
    btnNext.addEventListener('click',function(){
        flktySlider.next(true)
    })

    //DOTS
    function hanleDotSlider(){
    let dotsFake = document.querySelector('.flickity-page-dots');
    let dots = document.querySelector('.slider__bottom-paging');
    dots.appendChild(dotsFake)
    }

    //NUMBER
    function handlePaggingSlider(index){
        let number = document.querySelector('.slider__bottom-paging .number');
        number.innerHTML = (index + 1).toString().padStart(2,'0');
    }
}handleSliderHero()

/*******Gallery*******/

function hanhleGallery(){
    Fancybox.bind('[data-fancybox]', {
    infinite : true,
    keyboard:{
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    },
    caption: function (fancybox, carousel, slide) {
        return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
        );
    },
    });
}hanhleGallery()

/*******Image END*******/

function hanhleImageEnd(){
    var imageEnd = document.querySelector('.image');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    freeScroll : true,
    lazyLoad : 3,
    });

    var progressBar = document.querySelector('.progress-bar')
    flktyImageEnd.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
    });
}hanhleImageEnd()