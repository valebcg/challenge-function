let ele = document.querySelector('#ele1')
ele.style.backgroundColor = 'green'

let paint = function(div, color){
 div.style.backgroundColor = color
 }
ele.addEventListener ('click', () => paint(ele, 'yellow'))





