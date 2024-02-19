$( document ).ready(function() {
    // 디데이-3
    function dayCount() {
    const remainDate = document.querySelectorAll(".value_day"); 
    const remainHour = document.querySelectorAll(".value_hour"); 
    const remainMinute = document.querySelectorAll(".value_min"); 
    const remainSecond = document.querySelectorAll(".value_sec"); 

    //:11:00:00+0900
    const today = new Date(); 
    const dday = new Date("2024-6-08");
    const timeGap = dday.getTime() - today.getTime();

    // 남은 일수 카운트
    const remainTime = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

    // 남은 시간 카운트
    const seconds = String(Math.floor(timeGap / 1000) % 60).padStart(2,'0'); // 초 단위 변환
    const minutes = String(Math.floor(timeGap / (1000 * 60)) % 60).padStart(2,'0'); // 분 단위 변환
    const hours = String(Math.floor(timeGap / (1000 * 60 * 60)) % 24).padStart(2,'0'); // 시 단위 변환

    if (timeGap <= 0) {
        clearInterval(countdownInterval);
    }
    
    remainDate.forEach(ele => ele.innerText = remainTime);
    remainHour.forEach(ele => ele.innerText = hours);
    remainMinute.forEach(ele => ele.innerText = minutes);
    remainSecond.forEach(ele => ele.innerText = seconds);
    }

    // 1초마다 업데이트
    let countdownInterval = setInterval(dayCount, 1000);


    // 디데이2
    const DDay = document.querySelector("#DDay");
    function find_day(){
    const christmas = new Date("2024-06-08");  //디데이 설정
    const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000
    
    day_gap = christmas - today;  //크리스마스까지 남은 밀리세컨드 초 값
    
    const day = Math.floor(day_gap / (1000*60*60*24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
    const hour = Math.floor(day_gap / (1000*60*60) % 24);
    const min = Math.floor(day_gap / (1000*60) % 60);
    const sec = Math.floor(day_gap / 1000%60);
    
    DDay.innerText = `${day}일 `;
    //   ${hour}시간 ${min}분 ${sec}초
    }
    find_day();
    setInterval(find_day, 1000);  //초마다 디데이 기능 실행   

   // 복사기능
   function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    }
    $('#fa_btn').click(function() {
    copyToClipboard('1234561234567');
    alert('계좌번호를 복사하였습니다');
    });
    $('#son_btn').click(function() {
    copyToClipboard('85720100043507');
    alert('계좌번호를 복사하였습니다');
    });

    // 계좌박스 클릭 버튼
    $(".bank_box .title").click(function(){
        $(this).toggleClass("on");
        if ($(this).hasClass("on")){
            $(this).next(".bank_cont").slideDown();
        }else{
            $(this).next(".bank_cont").slideUp();
        }
    });
     
});