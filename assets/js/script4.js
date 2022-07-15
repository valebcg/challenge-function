let element1= document.querySelector ("#div1")
let element2= document.querySelector ("#div2")
let element3= document.querySelector ("#div3")
let element4= document.querySelector ("#div4")
let color= 'aqua'
element1.setAttribute('style', 'width: 200px; height: 200px; background-color: red;')
element2.setAttribute('style', 'width: 200px; height: 200px; background-color: green;')
element3.setAttribute('style', 'width: 200px; height: 200px; background-color: yellow;')
element4.setAttribute('style', 'width: 200px; height: 200px; background-color: blue;')

document.addEventListener('keydown', function (e) { 
    if (e.key.toLowerCase() === 'a') {
     color= 'orange'
    } else if (e.key.toLowerCase() === 's') { 
      color= 'blue'
    } else if (e.key.toLowerCase() === 'd'){
        color= 'yellow'
    } else if (e.key.toLowerCase() === 'f'){
        color = 'pink'
    }
 
})

    element1.addEventListener ('click', () => element1.style.backgroundColor= color)
    element2.addEventListener ('click', () => element2.style.backgroundColor= color)
    element3.addEventListener ('click', () => element3.style.backgroundColor= color)
    element4.addEventListener ('click', () => element4.style.backgroundColor= color)

