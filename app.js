const container = document.getElementById('container')
const imageOnClick = document.querySelector('.clickable-image')
const newBox = document.querySelector('.newBox')
const closeButton = document.querySelector('.close')
let isZoomed = false;


imageOnClick.addEventListener('click', function(e) {
    const tgt = e.target;
    tgt.classList.add('zoomed')
    newBox.classList.remove('hidden')
    newBox.appendChild(imageOnClick)
    isZoomed = true;
  })

  closeButton.addEventListener('click', function() {
    newBox.classList.add('hidden');
    imageOnClick.classList.remove('hidden');
    imageOnClick.classList.remove('zoomed')
    container.appendChild(imageOnClick);
    isZoomed=false;
});

imageOnClick.addEventListener('mousemove', function(e) {
  if (!isZoomed) return;
  // Calculate the position of the cursor inside the element (in pixels).
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  console.log(x,y)
 
  imageOnClick.style.transformOrigin = `${x}px ${y}px`;
  imageOnClick.style.transform = "scale(3)"
})
imageOnClick.addEventListener('mouseleave', function() {
  if (!isZoomed) return;
  imageOnClick.style.transformOrigin = "center";
  imageOnClick.style.transform = "scale(1)"
 });
