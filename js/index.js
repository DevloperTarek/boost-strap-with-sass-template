const full_body = document.querySelector('.theme_bg');
document.querySelector('#single_btn_wrap').addEventListener('click',function(e){
     e.preventDefault();
     full_body.classList.toggle('active');
})