function showArguments()
{
  console.log(arguments);
  // arguments.map(...) ❌ does not work
}

// Using rest parameters
function showRest(...args) 
{
  console.log(args);
  console.log(args.map(x => x * 2));
}

showArguments(1, 2, 3);
showRest(1, 2, 3);

  