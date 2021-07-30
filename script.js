
const sh=document.getElementById('hr');
const sm=document.getElementById('min');
const ss=document.getElementById('sec');

// console.log(th,":",tm,":",ts);

setInterval(()=>{
    let d= new Date();


    let th=d.getHours();;
    let tm=d.getMinutes();
    let ts=d.getSeconds();
    let tms=d.getMilliseconds();

    ts+=tms/1000;
    tm+=ts/60;
    th+=tm/60;
    
    let tth=(th%12)*30;
    let ttm=(tm%60)*6;
    let tts=(ts%60)*6;
    console.log(th,tm,ts);
    sh.style.transform=`rotate(${tth}deg)`
    sm.style.transform=`rotate(${ttm}deg)`
    ss.style.transform=`rotate(${tts}deg)`
},1)
