        /* 메인슬라이드 */
const mainSlide = $('.main-slide')
const slideList = $('.main-slide li')
const mainNext = $('.btnSlideNext')
const mainPrev = $('.btnSlidePrev')
const btnSlideOff = $('.btnSlidepp')
const counter = document.querySelector('.counter')
let num =1 
function mainRightSlide(){
    mainSlide.animate({left:-420},100,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left: 0})	
        })
}
function plusCount(){
    if(num < slideList.length){
        num++
        counter.textContent = num;
    }else{ 
        num = 1
        counter.textContent = num;
    }
}
function minusCount(){
    if(num > 1){
        num--
        counter.textContent = num;
    }else{
        num = slideList.length 
        counter.textContent = num;
    }		
}
function mainSlideBox(){ 
    mainNext.click(()=>{
        mainRightSlide()
        plusCount()
    });
    mainPrev.click(()=>{
        mainSlide.children('li:last').insertBefore(mainSlide.children('li:first')) 
        mainSlide.css({left: -420})
        mainSlide.animate({left:0}, 200)
        minusCount()
    })
    mainInterval 
}
let mainInterval = setInterval(timeSlide, 3000)
function timeSlide(){
    mainRightSlide(),plusCount()
}
let autoCount = 0; 
btnSlideOff.click(()=>{
    autoCount++
    if(autoCount % 2 == 1){//홀수번호일때 실행
        clearInterval(mainInterval)
        /* console.log(autoCount) */
    }else if(autoCount % 2 == 0){//짝수번호일때 실행
        mainInterval = setInterval(timeSlide ,3000)
        /* console.log(autoCount) */
    }
    })
mainSlideBox()



/* 파트1 */

const part1BtnPrev = $('.part1-btn-prev')
const part1BtnNext = $('.part1-btn-next')
const part1slide = $('.part1-slide-box')

function part1right(){
    part1slide.animate({left:-421},200,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left: 0})
        
    });
}

part1box()
function part1box(){
    part1BtnNext.click(function(){
    part1right()
    clearInterval(part1Interval)
}) 
}
part1BtnPrev.click(function(){
    part1slide.children('li:last').insertBefore(part1slide.children('li:first'))
    part1slide.css({left: -421})
    part1slide.animate({left:0}, 200)
    clearInterval(part1Interval)
}) 


function part1TimeSlide(){ 
    part1right() 
}

let part1Interval = setInterval(part1TimeSlide, 3000) 




/* 파트2 */
const part2Slide = $('.part2-slide-list')
const part2Next = $('.part2-slide-next')
const part2Prev = $('.part2-slide-prev')
const part2BtnSlideStop = $('.part2-slide-on')

function part2SlideNext(){
    part2Slide.animate({left:-200},200,function(){
        $(this).children('div:first').insertAfter($(this).children('div:last'))
        $(this).css({left: 0})	
        })
}
part2SlideNext()
part2Next.click(function(){
    part2SlideNext()
    
})
part2Prev.click(function(){
    part2Slide.children('div:last').insertBefore(part2Slide.children('div:first'))
    part2Slide.css({left: -200})
    part2Slide.animate({left:0}, 200)
    clearInterval(part1Interval)
}) 
let part2Interval = setInterval(part2TimeSlide, 3000) 
function part2TimeSlide(){
    part2SlideNext()
}
let part2Count = 0; 
part2BtnSlideStop.click(()=>{
    part2Count++
    if(part2Count % 2 == 1){
        clearInterval(part2Interval)
        
    }else if(part2Count % 2 == 0){
        part2Interval = setInterval(part2TimeSlide ,3000)
        
    }
    })

/* 파트3 */
const part3Slide = $('.part3-slide>ul')
const part3SlideList = $('.part3-slide>ul>li')
const part3Next = $('.part3-slide-next')
const part3Prev = $('.part3-slide-prev')
const part3BtnSlideOff = $('.part3-slide-on')
const part3counter = document.querySelector('.partCount')
let num3 =1 

function part3Plus(){
    if(num3 < part3SlideList.length){
        num3++
        part3counter.innerHTML = num3
    }else{
        num3 = 1;
        part3counter.innerHTML = num3
    }
}
function part3Minus(){
    if(num3 > 1){
        num3--
        part3counter.innerHTML = num3
    }else{
        num3 = part3SlideList.length
        part3counter.innerHTML = num3
    }
}
function part3RightSlide(){
    part3Slide.animate({left:-384},100,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left: 0})	
        })
}
function part3SlideBox(){
    part3Next.click(function(){
        part3RightSlide()
        part3Plus()
    })
    part3Prev.click(function(){
        part3Slide.children('li:last').insertBefore(part3Slide.children('li:first'))
        part3Slide.css({left: -384})
        part3Slide.animate({left:0}, 200)
        part3Minus()
})  
}

let part3Interval = setInterval(part3TimeSlide, 3000);
function part3TimeSlide(){
    part3RightSlide()
    part3Plus()
}
let autoCount1 = 0;
part3BtnSlideOff.click(()=>{
    
    autoCount1++
    if(autoCount1 % 2 ==1){
        clearInterval(part3Interval)
        console.log(autoCount1)
    }
    else if(autoCount1 % 2 ==0){
        part3Interval = setInterval(part3TimeSlide, 3000)
    }
})

part3SlideBox()



/* 다른 사이트 베너 슬라이드 */
const $right = $('.friends-btn-next');
const $on = $('.friends-btn-on')
const $left = $('.friends-btn-prev');
const $moving = $('.main-friends-slide');

function rightSlide(){
    $moving.stop().animate({left:'-183'},300,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left: 0})
    });
} 

$right.click(()=>{
    rightSlide()
})

$left.click(()=>{
    $moving.children('li:last').insertBefore($moving.children('li:first'))
    $moving.css({left: -183})
    $moving.animate({left:0}, 300)
})
//자동 슬라이드
friendsAuto()
function friendsAuto(){
    let timerCount = 1;
    let timer =	setInterval(()=>{
        rightSlide()
    }, 3000);
    $on.click(()=>{
        timerCount++
        if(timerCount % 2==0){				
            clearInterval(timer)
            console.log(timerCount)			
        }else if(timerCount % 2==1){
            console.log(timerCount)
            timer=setInterval(rightSlide, 3000)
        }
    })
} 




    //자바스크립트 

    /* //슬라이드
const slide = document.querySelector('.main-friends-slide')


//버튼 엘리먼트 선택
const prevBtn = document.querySelector('.friends-btn-prev')
const nextBtn = document.querySelector('.friends-btn-next')
const onBtn = document.querySelector('.friends-btn-on')
//슬라이드 리스트
const slideItem = document.querySelectorAll('.main-friends-slide li')


let index = 0;
let a = 1



time()

function time(){
    let intervar = setInterval(()=>{ 
        index++
        slide.style.transition='.3s'
        slide.style.transform = `translate3d(-${183 * index}px, 0, 0)`;
    }, 2000)
onBtn.addEventListener('click', ()=>{
    a++
    if(a % 2==0){
        clearInterval(intervar)
        
    }else if(a % 2==1){
        intervar()
    }
    })
}
    
    
    
    
prevBtn.addEventListener('click', ()=>{
    if(index ===0) return; 
    index -= 1;
    slide.style.transition='.3s'
    slide.style.transform = `translate3d(-${183 * index}px, 0, 0)`;
});

nextBtn.addEventListener('click', ()=>{
    if(index === 5) return;
    index += 1;
    {
    slide.style.transition='.3s'
    slide.style.transform = `translate3d(-${183 * index}px, 0, 0)`;
    }

}
);
*/
//메인 슬라이드
/* const mainSlide = document.querySelector('.main-slide');
const mainslideList = document.querySelector('.main-slide li');

const mainNext =document.querySelector('.btnSlideNext')
const mainPrev = document.querySelector('.btnSlidePrev')

let main=0;


mainNext.addEventListener('click', ()=>{
    if(main ===3) return;
    console.log(mainNext)
    main += 1;
    mainSlide.style.transition='.3s'
    mainSlide.style.transform = `translate3d(-${430 * main}px, 0, 0)`;
});

mainPrev.addEventListener('click', ()=>{
    if(main ===0) return
    main -= 1;
    mainSlide.style.transition='.3s'
    mainSlide.style.transform = `translate3d(-${430 * main}px, 0, 0)`;
}); */

        /* 모달창 */
const model = $('.sign-up-show')
const signUp = $('#sign-Up')


signUp.click(()=>{
    $('.main-black-bg').addClass('sign-up-show')
})
$('.modal-close').click(()=>{
    $('.main-black-bg').removeClass('sign-up-show')
})


		/* 회원가입 */
const submit=document.getElementById('submit')
const id1=document.getElementById('id1');



let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let name1=document.getElementById('name1');
let email1=document.getElementById('email1');
let tel1=document.getElementById('tel1');
let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');
let gender1Msg=document.getElementById('gender1Msg');

let regId=/^[A-Z][a-zA-Z0-9]{4,}$/; 
let regPw1=/^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
let regName1=/[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{3,}/
let regEmail1=/^[a-zA-Z0-9]([-_.]?[0-9a-zA-Z])*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]*.[a-zA-Z]{2,3})$/g
let regPhone1=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/g;

id1.addEventListener("blur",function(){
    
    if(!regId.test(id1.value)){
        id1Msg.style.color="red";
        id1Msg.innerHTML="아이디는 5글자 이상 첫글자가 대문자이고 영문자, 숫자만 가능"
    }else{
        id1Msg.style.color="green";
        id1Msg.innerHTML="사용가능한 ID입니다."
    }
});

pw1.addEventListener("blur",function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color="red";
        pw1Msg.innerHTML="특수문자,문자,숫자 포함하고 8~16이내의 값만 가능" 
    }else{
        pw1Msg.style.color="green";
        pw1Msg.innerHTML="사용가능한 비밀번호입니다."
    }
})

pw2.addEventListener("focus",function(){
    if(document.getElementById('pw1').value==""){
        alert("패스워드를 입력하세요");
        document.getElementById("pw1").focus();
    }
});
pw2.addEventListener("blur",function(){
    if(pw1.value !=pw2.value){
        pw2Msg.style.color="red"
        pw2Msg.innerHTML="비밀번호가 일치하지않습니다."
        return false;
    }else{
        if((pw1.value=='')&&(pw2.value=='')){
            pw2Msg.innerHTML="" 
        }else{
            pw2Msg.style.color="green";
            pw2Msg.innerHTML="비밀번호가 일치합니다."
        }
       
    }
});
name1.addEventListener("blur",function(){
    if(!regName1.test(name1.value)){
        name1Msg.style.color="red";
        name1Msg.innerHTML="제대로 입력하세요"
    }else{
        name1Msg.style.color="green";
        name1Msg.innerHTML="확인"
    }
});

email1.addEventListener("blur",function(){
    if(!regEmail1.test(email1.value)){
        email1Msg.style.color="red";
        email1Msg.innerHTML="제대로 입력하세요"
    }else{
        email1Msg.style.color="green";
        email1Msg.innerHTML="확인"
    }
});
tel1.addEventListener("blur",function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color="red";
        tel1Msg.innerHTML="제대로 입력하세요"
    }else{
        tel1Msg.style.color="green";
        tel1Msg.innerHTML="확인"
    }
});


document.getElementById('submit').addEventListener("click",function(){
    if(id1.value==""){
        alert("아이디를 입력하세요");
        
        return false;
    }else{
        if(!regPw1.test(pw1.value)){
            alert("특수문자, 문자, 숫자 포함하고 8~16 이내의 값만 가능")
            pw1.value=""
            return false;
        }
    }
    if(document.querySelector('[name=gender]:checked')==null){
        gender1Msg.style.color="red";
        gender1Msg.innerHTML="성별을 체크해주세요";
        document.getElementById("m").focus();
    }else{
        location.href = "result.html"
    }
})
    /* 회원가입 이용약관 */
let scroll1 = document.querySelector('.agree-info')
const signUpSlide = $('.sign-up-slide')
const signUpNext = $('#agree-submit')

function scrollCkd(){
    scroll1.addEventListener('scroll',()=>{
        let scrollTop1 = scroll1.scrollTop
        let scrollTop2 = scroll1.scrollHeight
        let scrollTop3 = scroll1.clientHeight
        if(scrollTop1 + scrollTop3>scrollTop2 -5 ){
            alert('ㅇㅋ')
            $('.agree-chk').css('display','block')
            $('.agree-submit').css('display','block')
            
            signUpNext.click(()=>{
                if($('#agreeOk').is(":checked")){
                    signUpSlide.animate({left:-820},300,function(){
                    });
                }else{
                    alert('동의를 눌러주세요')
                    return false;
                }
                return false;
            }
                    
            )
        
            
        }
    })
}
scrollCkd()







