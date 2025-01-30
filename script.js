function Lightbox() {
    var b=document.body
    b.classList.toggle('bg-light');
    var nav=document.getElementsByTagName('nav')[0];
    nav[0].classList.toggle('bg-light');
}