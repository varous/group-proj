let slideNumber = 1;

const nextSlide = x => {
    renderSlide(slideNumber += x);
}

const thisSlide = x => {
    renderSlide(x);
}
const renderSlide = x => {
    let slideList = document.getElementsByClassName('slides');
    let dotList = document.getElementsByClassName('circle');
    if (x > slideList.length) slideNumber = 1;
    if (x < 1) slideNumber = slideList.length;
    
    for (let i = 0; i < slideList.length; i++) {
        slideList[i].style.display = 'none';
    }
    
    for (let j = 0; j < slideList.length; j++) {
        dotList[j].className = dotList[j].className.replace(' active', '');
    }
    slideList[slideNumber - 1].style.display = 'block';
    dotList[slideNumber - 1].className += ' active';
}


renderSlide(slideNumber);
