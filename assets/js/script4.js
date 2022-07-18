let element1= document.querySelector ("#div1")
let element2= document.querySelector ("#div2")
let element3= document.querySelector ("#div3")
let element4= document.querySelector ("#div4")

element1.setAttribute('style', 'width: 200px; height: 200px; background-color: red;')
element2.setAttribute('style', 'width: 200px; height: 200px; background-color: green;')
element3.setAttribute('style', 'width: 200px; height: 200px; background-color: yellow;')
element4.setAttribute('style', 'width: 200px; height: 200px; background-color: blue;')
let color= 'aqua'

document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
     color= 'orange'
    } else if (event.key === 's') { 
      color= 'blue'
    } else if (event.key === 'd'){
        color= 'yellow'
    } else if (event.key  === 'f'){
        color = 'pink'
    }
 })

   let setColor = (element) => {
  element.addEventListener('click', () => {
    element.style.backgroundColor = color
  })
}
setColor(element1),setColor(element2),setColor(element3),setColor(element4)

