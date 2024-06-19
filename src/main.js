// Analog Cloack
const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hr = document.getElementById('hr');

// Digital Cloack
const hrs = document.querySelector('#hrs');
const mts = document.querySelector('#mts');
const secs = document.querySelector('#secs');
const pms = document.querySelector('#pms');

setInterval(() =>{

    // Analog Watch
    const day = new Date();
    let hh1 = (day.getHours()-12) *30;
    let mm2 = day.getMinutes() * 6;
    let ss3 = (day.getSeconds() * 6);
    let ms = day.getMilliseconds();
    
    hr.style.rotate  =  `${hh1+(mm2/12)}deg`;
    min.style.rotate =  `${mm2+(ss3/60)}deg`;
    sec.style.rotate =  `${ss3+(ms/166.666666666666666)}deg`;

    // Digital Watch
    let dh = day.getHours()-12;
    let dm = day.getMinutes();
    let ds = day.getSeconds();

    // Appendind 0 to single digits
    dh = dh <10 ? "0"+dh : dh;
    dm = dm <10 ? "0"+dm : dm;
    ds = ds <10 ? "0"+ds : ds;

    if(day.getHours() > 12){
         pms.textContent = `PM`;
    }
    else{
        pms.textContent = `AM`; 
    }

    hrs.textContent = `${dh}`;
    mts.textContent = `${dm}`;
    secs.textContent = `${ds}`;
   
    });


    