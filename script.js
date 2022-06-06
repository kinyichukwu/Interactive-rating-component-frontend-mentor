const number_elements = document.querySelectorAll('.number_elements')
const Submit = document.querySelector('.button')
const main_element = document.querySelector('.main_element')
const one = document.getElementById('one')
const two = document.getElementById('two')
const spanBlock = document.querySelector('.block')
const array = []


number_elements.forEach( (x, idx) => {
    x.addEventListener('click', () => {
        removeActiveClass()
        x.classList.add('active')
        
    })
   
})

function removeActiveClass() {
    number_elements.forEach( y => {
        y.classList.remove('active')
    })
}

Submit.addEventListener('click', () => ratingSubmited())

function ratingSubmited() {
    number_elements.forEach((x, idx) =>{
        if(x.classList.contains('active')){
         array.push(idx + 1)
        } 
     })

    one.classList.add('display-hidden')
    two.classList.remove('display-hidden')
    spanBlock.innerHTML = `You selected ${array[0]} out of 5`
}



