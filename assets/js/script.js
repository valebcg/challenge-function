let ele = document.querySelector('#ele1')
ele.style.backgroundColor = 'green'


 let paint = function(element, color){
 element.style.backgroundColor = color
}
ele.addEventListener ('click', () => paint(ele, 'yellow'))
    




