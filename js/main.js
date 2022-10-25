var elLoginPage = document.querySelector('.login_page')
var elLoginPage2 = document.querySelector('.login2_page')
var elIcon1 = document.querySelector('.icon1')
var elIcon2 = document.querySelector('.icon2')
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var elInp3 = document.querySelector('.inp3')
var elInp4 = document.querySelector('.inp4')
var elBtn1 = document.querySelector('.sign')

var elH1 = document.querySelector('.welcome')
var elP = document.querySelector('.lorem')

var elNextPage = document.querySelector('.next_page')

var elSuccess1 = document.querySelector('.success1')
var elSuccess2 = document.querySelector('.success2')
var elSuccess3 = document.querySelector('.success3')
var elSuccess4 = document.querySelector('.success4')

var elFirstPage = document.querySelector('.first_page-btn')

elIcon1.addEventListener('click', (e)=>{
    elLoginPage.style.backgroundColor = 'black'
    elIcon1.style.display = 'none'
    elIcon2.style.display = 'block'
    elH1.classList.add('h1')
    elP.classList.add('p')
})
elIcon2.addEventListener('click', ()=>{
    elLoginPage.style.backgroundColor = '#EEEEEE'
    elIcon2.style.display = 'none'
    elIcon1.style.display = 'block'
    elH1.classList.toggle('h1')
    elP.classList.toggle('p')
})

elInp1.addEventListener('keyup', (e)=>{
    if(e.target.value.length == ''){
        elInp1.classList.remove('kam')
    }else if(e.target.value.length >= 5 && e.target.value.length <= 12){
        elInp1.classList.add('yetarli')
        elInp1.classList.remove('kam')
    }else if(e.target.value === Number){
        elInp1.classList.remove('kam')
        elInp1.classList.add('yetarli')
    }else{
        elInp1.classList.add('kam')
        elInp1.classList.remove('yetarli')
    }
})


elInp2.addEventListener('keyup', (e)=>{
    if(e.target.value.length == 3){
        elInp2.classList.add('yetarli')
        elInp2.classList.remove('kam')
    }else if(e.target.value.length == ''){
        elInp2.classList.remove('kam')
    }
    else{
        elInp2.classList.remove('yetarli')
        elInp2.classList.add('kam')
    }
})
elInp3.addEventListener('keyup', (e)=>{
    if(e.target.value.length == ''){
        elInp3.classList.remove('kam')
    }else if(e.target.value.length >= 8 && e.target.value.length <= 11){
        elInp3.classList.add('yetarli')
        elInp3.classList.remove('kam')
    }else{
        elInp3.classList.add('kam')
        elInp3.classList.remove('yetarli')
    }
})

elInp4.addEventListener('keyup', (e)=>{
    if(e.target.value.length == ''){
        elInp4.classList.remove('kam')
    }else if(e.target.value.length === elInp3.value.length){
        elInp4.classList.add('yetarli')
        elInp4.classList.remove('kam')
    }else{
        elInp4.classList.add('kam')
        elInp4.classList.remove('yetarli')
    }
})


elBtn1.addEventListener('click', ()=>{
    elLoginPage.style.display = 'none'
    elNextPage.style.display = 'block'
    
    elIcon1.addEventListener('click', (e)=>{
        elNextPage.style.backgroundColor = 'black'
        elIcon1.style.display = 'none'
        elIcon2.style.display = 'block'    
    })
    elIcon2.addEventListener('click', ()=>{
        elNextPage.style.backgroundColor = '#EEEEEE'
        elIcon2.style.display = 'none'
        elIcon1.style.display = 'block'
    })
    if(elInp1.value == ''){
        elSuccess1.textContent = 'Siz isim kiritmadingiz' + '✖️'
        elSuccess1.style.color = 'red'

    }else if(elInp1.value.length >= 5 && elInp1.value.length <= 11){
        elSuccess1.textContent = 'Sizning ismingiz' + " " +  elInp1.value + '✅'
        elSuccess1.style.color = 'green'
    }else{
        elSuccess1.textContent = 'Ismingiz xato kiritildi' + '✖️'
        elSuccess1.style.color = 'red'
    }
    if(elInp2.value == ''){
        elSuccess2.textContent = 'Siz mashina raqam kiritmadingiz' + '✖️'
        elSuccess2.style.color = 'red'
    }else if(elInp2.value.length == 3){
        elSuccess2.textContent = 'Sizning mashina raqamingiz' + " " +  elInp2.value + '✅'
        elSuccess2.style.color = 'green'
    }else{
        elSuccess2.textContent = 'Mashina raqamingiz xato kiritildi' + '✖️'
        elSuccess2.style.color = 'red'
    }
    if(elInp3.value.length == ''){
        elSuccess3.textContent = 'Siz parol kiritmadingiz' + '✖️'
        elSuccess3.style.color = 'red'
    }else if(elInp3.value.length >= 8 && elInp3.value.length <= 11){
        elSuccess3.textContent = 'Sizning parolingiz ' + elInp3.value + '✅'
        elSuccess3.style.color = 'green'
    }else{
        elSuccess3.textContent = 'Parolni xato kiritdingiz' + '✖️'
        elSuccess3.style.color = 'red'
    }   
    if(elInp4.value != elInp3.value){
        elSuccess4.textContent = 'Parol bir xil emas' + '✖️'
        elSuccess4.style.color = 'red'
    }else if(elInp4.value.length == ''){
        elSuccess4.textContent = 'Parolni qayta kiritmadingiz' + '✖️'
        elSuccess4.style.color = 'red' 

    }else if(elInp4.value.length === elInp3.value.length){
        elSuccess4.textContent = 'Parolingiz blan bir xil' + '✅'
        elSuccess4.style.color = 'green'
        
    }else if(elInp3.value == ''){
        elSuccess4.textContent = ''
    }
    else{
        elInp4.classList.add('kam')
        elInp4.classList.remove('yetarli')
    }


})

elFirstPage.addEventListener('click', ()=>{
    elNextPage.style.display = 'none'
    elLoginPage.style.display = 'flex'
})
