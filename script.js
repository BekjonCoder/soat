const red=document.getElementById('red')
const blue=document.getElementById('blue')
const green=document.getElementById('green')
const section=document.getElementsByTagName('section')
red.addEventListener('click',()=>{
    section.style.background='red'
})
blue.addEventListener('click',()=>{
    section.style.background="blue"
})
green.addEventListener('click',()=>{
    section.style.background='green'
})