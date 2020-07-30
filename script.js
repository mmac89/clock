
document.getElementById('pageTitle').innerHTML = "Javascript Digital Clock";
const time= document.createElement('h3');
 let twelveHourBoolean= true;


function currentTime(){
   // const clockDiv = document.getElementById('clock');
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

// function twentyFourTime(){
//     const date = new Date();
//     let h= date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     m= updateTime(m);
//     s= updateTime(s);
    
    
//     clock.appendChild(time);
//     time.innerHTML= ( h + ':' + m + ':' + s );
 
//     //document.body.appendChild(clock);
//     let t =  setTimeout(() => {
//         twentyFourTime();
//     }, 1000);
// }

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
