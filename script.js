
document.getElementById('pageTitle').innerHTML = "Javascript Digital Clock";
//document.getElementById('alarmInput').style.display= 'none';
//document.getElementById('alarmText').style.display = 'none';
const time= document.createElement('h3');
let alarm = '';
 let twelveHourBoolean= true;


function currentTime(){
    const date = new Date();
    let h= date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m= updateTime(m);
    s= updateTime(s);
    
    document.getElementById('twentyFourHour').addEventListener('click', ()=>{
        twelveHourBoolean = false;
    });

    document.getElementById('twelveHour').addEventListener('click', ()=>{
        twelveHourBoolean = true;
    });
 
    clock.appendChild(time);
    if (twelveHourBoolean === true){
        let q = twelveHourTime(h);
        h = date.getHours()> 12 ? date.getHours()-12: date.getHours();;
        time.innerHTML= ( h + ':' + m + ':' + s + q);
    } else{
        time.innerHTML = (h + ':' + m + ':' + s);
    }
    let t =  setTimeout(() => {
        currentTime();
    }, 1000);
}

function updateTime(k){
    if(k<10){
        k= "0"+ k;
        return k;
    }else{
        return k;
    }
}

function twelveHourTime(w){
    if (w>=12){
        q= "PM";
        return q;
    }else {
        q= "AM";
        return q;
    }
}


currentTime();

document.getElementById('twentyFourHour').addEventListener('click', ()=>{
    twelveHourBoolean = false;
});

document.getElementById('twelveHour').addEventListener('click', ()=>{
    currentTime();
})

// document.getElementById("alarm").addEventListener('click', ()=>{
//     document.getElementById('alarmInput').style.display= 'block';
//     //alarm = document.getElementById('alarmTime').innerHTML;
// })

// document.getElementById("confirmAlarm").addEventListener('click', ()=>{
//     alarm = document.getElementById('alarmTime').value;
//     console.log(alarm);
//     document.getElementById('alarmInput').style.display= 'none';
//     document.getElementById('alarmText').style.display= 'block';
//     document.getElementById('alarmmmm').innerText = alarm;
// })

// if(document.alarm.value = date){
//     alert("Time to get up");
// }
