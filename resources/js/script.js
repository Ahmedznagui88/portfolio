let outline = document.querySelector('.outline');
let links = document.querySelectorAll('link, a, div');
document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    outline.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;

    
});
links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        outline.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        outline.classList.remove('hover');
    });
});
