let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a, button, img');

document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    
    outline.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;
    cursor.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;  
    
});

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
        outline.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        outline.classList.remove('hover');
    });
});