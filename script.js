function programção(elemento){
  const textArrray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textArrray.forEach((letra,i) => {
    setTimeout(()=> elemento.innerHTML += letra,90*i)
    
  });
}
programção(document.querySelector('.titulo'))
programção(document.querySelector('.box_main p'))
const ulSquares = document.querySelector("ul.squares")


for ( let i = 0; i < 31; i++) {
    
    const random= (min,max) => Math.random() * (max-min)+min
    const li = document.createElement("li")

    const size = Math.floor(random(10,130))

    const position = random(1,99);
    
    const delay = random(5,0.1)

    li.style.width =`${size}px`
    li.style.height =`${size}px`
    li.style.bottom =`-${size}px`

    li.style.left =`${position}%`
    li.style.animationDelay =`${delay}s`

    ulSquares.appendChild(li)
}