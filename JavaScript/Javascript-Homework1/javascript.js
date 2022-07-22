
let fullName = prompt("Please Give Us FullName: ")

let fullNameDOM = document.querySelector("#myName");
fullNameDOM.innerHTML = `${fullName}`;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showTime() {
  let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    let day = days[date.getDay()];
    
    if(h == 12){
        h = 0;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session + " " + day;

    document.querySelector("#myClock").innerHTML = time;
    document.querySelector("#myClock").textContent = time;

    setTimeout(showTime, 1000);
    
}
showTime();