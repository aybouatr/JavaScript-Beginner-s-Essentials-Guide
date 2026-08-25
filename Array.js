console.log(Math.ceil(23.4));
console.log(Math.abs(-23.6));

// function rett()
// {
//   let n = 1212;
//   let n2 = 1212;
//   let n3 = 1212;
//   let n4 = 1212;

//   return (n,n2,n3,n4);
// }


// let [a,b,c,d] = rett();

// console.log(
//   a,b,c,d
// );


function rett()
{
  let n = 1212;
  let n2 = 1212;
  let n3 = 1212;
  let n4 = 1212;

  return {n,n2,n3,n4};
}


let {a,b,c,d} = rett();

console.log(
  a,b,c,d
);