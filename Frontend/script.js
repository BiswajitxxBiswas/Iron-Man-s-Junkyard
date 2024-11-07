const container = document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');
const btnL=document.querySelector('.btnLogin-popup');


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
})
loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})

btnL.addEventListener('click',()=>{
    container.classList.remove('active');
})
function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}
