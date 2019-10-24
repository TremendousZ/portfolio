

console.log("When you need more lives you type...");

// Fade in Images

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // halfway of the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // image bottom
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });

}

window.addEventListener('scroll', debounce(checkSlide));

//Computer images 

switchImages();
setInterval(switchImages, 5000);
let count = 0;

function switchImages() {
    let desktop = document.getElementById('site-desktop');
    setTimeout(() => {
        setTimeout(changeImage, 500)
    }, 5000);
}

function changeImage() {

    let desktopImages = [
        './img/assets/hyperion/desktop/hyperion-lp.png',
        './img/assets/hyperion/desktop/hyperion-homepage.png',
        './img/assets/hyperion/desktop/hyperion-story.png',
        './img/assets/hyperion/desktop/hyperion-menu.png',
        './img/assets/hyperion/desktop/hyperion-meals.png',
        './img/assets/hyperion/desktop/hyperion-lunch.png',
        './img/assets/seenfire/desktop/seenfire_home.png',
        './img/assets/seenfire/desktop/seenfire_video.png',
        './img/assets/seenfire/desktop/seenfire_black.png',
        './img/assets/arm/desktop/arm_home.png',
        './img/assets/arm/desktop/arm_boxes.png',
        './img/assets/arm/desktop/arm_section.png'
    ];

    let mobileImages = [
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 3.46.02 PM.png',
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 4.33.26 PM.png',
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 4.34.00 PM.png',
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 4.34.28 PM.png',
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 4.34.48 PM.png',
        './img/assets/hyperion/mobile/Screen Shot 2019-08-01 at 4.35.13 PM.png',
        './img/assets/seenfire/mobile/Screen Shot 2019-08-01 at 4.37.07 PM.png',
        './img/assets/seenfire/mobile/Screen Shot 2019-08-01 at 4.37.50 PM.png',
        './img/assets/seenfire/mobile/Screen Shot 2019-08-01 at 4.38.42 PM.png',
        './img/assets/arm/mobile/Screen Shot 2019-08-01 at 4.39.34 PM.png',
        './img/assets/arm/mobile/Screen Shot 2019-08-01 at 4.39.55 PM.png',
        './img/assets/arm/mobile/Screen Shot 2019-08-01 at 4.40.13 PM.png',
    ];

    if (count >= desktopImages.length) {
        count = 0;
    }

    let desktopImage = document.getElementById('site-desktop');
    desktopImage.src = desktopImages[count];

    let mobileImage = document.getElementById('site-mobile');
    mobileImage.src = mobileImages[count];

    if (count === 0 || count < 6) {

        $('.hyperion').removeClass('hide');
        $('.hyperion').addClass('show');
        $('.arm').addClass('hide');
        $('.arm').removeClass('show');
    } else if (count < 9) {
        $('.hyperion').removeClass('show');
        $('.hyperion').addClass('hide');
        $('.seenfire').removeClass('hide');
        $('.seenfire').addClass('show');
    } else if (count < 12) {
        $('.seenfire').removeClass('show');
        $('.seenfire').addClass('hide');
        $('.arm').removeClass('hide');
        $('.arm').addClass('show');
    }
    count++;
}

// Konami Code 

let success=false;
const pressed = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
window.addEventListener('keyup', (e) => {

    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode) && success === false) {
        success = true;
        console.log("Well its looks like I'm dealing with a pro so let me show you more!");
        let heroImage = document.getElementById('mobile-hero-image');
        heroImage.src = 'img/assets/arcade.jpeg';
        let newHero = document.getElementById('hero-video');
        newHero.style = "display:none;";
        let desktopImage = document.getElementById('desktop-hero-image');
        desktopImage.style = "display:block;"
        desktopImage.classList.add('sub-in');

        let newImage = document.getElementById('self-img');
        newImage.src = "img/assets/jc_jp_ferris_wheel.jpg";

        // replace tech section with hobby icons
        let techSection = $('#technologies');
        techSection.empty();

        $('#resume').hide();
        $('#portfolio').hide();
        let funProfile = "Thank you for playing along! My biggest reason for embarking on my career change is my family. There are three things that programming offers that are immensely attractive to me. First, the opportunity to teach. This is a skill that I can pass on to my children. I cannot wait to start passing on what I have learned to encourage my children to overcome challenges and find the joy of programming. Second, the opportunity to create. Whether it is a chat app to better learn a backend technology or a Megaman match game to practice css animations and PhotoShop, I am now able to create customized applications to streamline day to day activities. Third, is the opportunity to attend. The most important thing for me is to be attend and support my young family. Sales often required work on the weekends and travel, I am now able to be present for all the fun moments.";

        $('.about-me-text').text(funProfile);

        techSection.addClass('hobbies-shown');
        $('.tech-intro').text("My Painting Gallery:");
        let hobbies = [
            "img/assets/my_models/aliens.jpg",
            "img/assets/my_models/AvP_predators.jpg",
            "img/assets/my_models/marines.jpg",
            "img/assets/my_models/calgar.jpg",
            "img/assets/my_models/ultramarin_vets.jpg",
            "img/assets/my_models/ultramine-rhino.jpg",
            "img/assets/my_models/tau_battlesuits.jpg",
            "img/assets/my_models/tau_kroot.jpg",
            "img/assets/my_models/tau_vespid.jpg",
            "img/assets/my_models/titan_got.jpg",
            "img/assets/my_models/harlequins.jpg",
            "img/assets/my_models/tyranid_zoan.jpg",
        ]

        let imageElements = hobbies.map(x => {
            let src = x;
            let container = $("<div>").addClass('hobby-container');
            let image = $('<img>').attr("src", src);
            image.addClass('hobby');
            container.append(image);
            techSection.append(container);
        });

        window.scrollTo('Y', 0);
    }
})
