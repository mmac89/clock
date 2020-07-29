
document.getElementById('pageTitle').innerHTML = "Javascript Digital Clock";
const time= document.createElement('h3');
 let twelveHourBoolean= true;


function twelveHourFormat(){
   // const clockDiv = document.getElementById('clock');
    const date = new Date();
    let h= date.getHours();
    let q = twelveHourTime(h);
    h = date.getHours()> 12 ? date.getHours()-12: date.getHours();;
    let m = date.getMinutes();
    let s = date.getSeconds();
    m= updateTime(m);
    s= updateTime(s);
    
    
    clock.appendChild(time);
    time.innerHTML= ( h + ':' + m + ':' + s + q);
 
    //document.body.appendChild(clock);
    let t =  setTimeout(() => {
        twelveHourFormat();
    }, 1000);
}

function twentyFourTime(){
    const date = new Date();
    let h= date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m= updateTime(m);
    s= updateTime(s);
    
    
    clock.appendChild(time);
    time.innerHTML= ( h + ':' + m + ':' + s );
 
    //document.body.appendChild(clock);
    let t =  setTimeout(() => {
        twentyFourTime();
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


twelveHourFormat();

document.getElementById('twentyFourHour').addEventListener('click', ()=>{
    twentyFourTime();
    
});

document.getElementById('twelveHour').addEventListener('click', ()=>{
    twelveHourFormat();
})
