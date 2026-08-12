
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

function clearIntervalAlert()
{
   clearInterval(intervalId);
}