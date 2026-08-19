(function ()
{
    console.log("App Loaded");
}) ();

(function arg(n1)
{
    let double = n1 * 2;

    console.log(`result is ${double}`);

}) (12);

let counter = (function () 
{
  let count = 0;

  return function () 
  {
    count++;
    console.log("Counter:", count);
  };

})();

counter();

counter();

counter();