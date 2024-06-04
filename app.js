const container = document.getElementById('container')
const imageOnClick = document.querySelector('.clickable-image')
const newBox = document.querySelector('.newBox')
const close = document.querySelector('.close')


imageOnClick.addEventListener('click', function(e) {
    const tgt = e.target;
    tgt.classList.add('zoomed')
    newBox.classList.remove('hidden')
    newBox.appendChild(imageOnClick)
  })

  close.addEventListener('click', function() {
    newBox.classList.add('hidden');
    imageOnClick.classList.remove('hidden');
    imageOnClick.classList.remove('zoomed')
    container.appendChild(imageOnClick);
});

imageOnClick.addEventListener('mouseenter',function(e){
  this.style.backgroundSize = "250%";
})
