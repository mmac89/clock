let header = document.createElement('h1');
header.innerHTML = "Javascript Digital Clock";
document.body.appendChild(header);
const time= document.createElement('h3');


function currentTime(){
    const clockDiv = document.getElementById('clock');
    const date = new Date();
    let h= date.getHours();
    let q = twelveHourTime(h);
    h = date.getHours()>= 12 ? date.getHours()-12: date.getHours();;
    let m = date.getMinutes();
    let s = date.getSeconds();
    m= updateTime(m);
    s= updateTime(s);
    
    
    clock.appendChild(time);
    time.innerHTML= ( h + ':' + m + ':' + s + q);

    document.body.appendChild(clock);
    let t =  setTimeout(() => {
        currentTime();
    }, 1000);
};

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

