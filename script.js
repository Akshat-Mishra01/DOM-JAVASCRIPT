 let element = document.getElementById('text');
 console.log(element.innerText);

   
let heading = document.getElementsByTagName('h1')
 console.log( heading);



 let classStore= document.getElementsByClassName('box');
 console.log(classStore[0].innerText);
 console.log(classStore);


addEventListener('click')
function changeText(){
     let text = document.querySelector('h2');
     text.innerText='Hello World'
}



 function change()
 {
  document.getElementById('text1').innerHTML = "Welcome to Elevation academy"
 }

 

  

function direction (){
   let changeDimension = document.getElementsByClassName("changeDimension")
    changeDimension[0].style.flexDirection='column'    
}



function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('sessions');
   
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);


