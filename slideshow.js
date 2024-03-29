function toggleSlide() {
    const switchElement = document.getElementById('toggleSwitch');
    const slide1 = document.querySelector('.slide1');
    const slide2 = document.querySelector('.slide2');
    
    if (switchElement.checked) {
        slide1.style.display = 'none';
        slide2.style.display = 'block';
    } else {
        slide1.style.display = 'block';
        slide2.style.display = 'none';
    }
}
