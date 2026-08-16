
let  timeId;
let intervalId;
function SetTimeAlert()  
{
    timeId = setTimeout( () =>
   {
      alert("Hello, World i are speen 3 secound wait!");
   }, 3000);
}


function clearTimeAlert()
{
   clearTimeout(timeId);
}

function SetIntervalAlert()
{
    intervalId = setInterval( () =>
   {
      alert("Hello, World i are speen 3 secound wait!");
   }, 3000);
}

function SetIntervalCondole()
{
   var count = 0;

   intervalId = setInterval( () =>
   {

       count++;
      console.log("counte :",count,"\n");

      if (count === 10)
      {
         clearInterval(intervalId);
      }

   },1000
   );
  
}

function SetTimeDown()
{
   let timeout = 5;
   var koko = document.getElementById("koko");

   koko.textContent = timeout;

   let countdown = setInterval( () =>
   {
      timeout--;
      koko.textContent = timeout;

      if (timeout === 0)
      {
         clearInterval(countdown);
         koko.textContent = 5;
      }
   
   },1000);

}

function clearIntervalAlert()
{
   clearInterval(intervalId);
}