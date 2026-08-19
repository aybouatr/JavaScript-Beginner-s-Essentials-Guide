const cl = console.log;

function printNumber()
{
    for (let i =  0;i <= 10;i++)
    {
        cl(`number : ${i}`);
    }
}

function printNumberEven()
{
    for (let i =  1;i <= 10;i+=2)
    {
        cl(`number : ${i}`);
    }
}

function printArry()
{
    let fruits = ["Apple", "Banana", "Orange"];

    for (let i = 0; i < fruits.length;i++)
    {
        cl(`fruits : ${fruits[i]}`)
    }
}

function ForInForEach()
{
    const fruist = {name:"ali",age:32,adress:"missour"};
    let arr = [1,2,3,4,5];
    
    cl("-----------> print by key <---------------");
    for (let key in fruist)
    {
        cl(`key : ${key} value : ${fruist[key]}`);
    }

    cl("------------------> print by value <---------------");
    
    for(let index of arr)
    {
        cl(`index : ${index} value : ${arr[index]}`);
    }


}

function labelLoop()
{
    const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    search:
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] === 5)
            {
                console.log("Found!");
                continue search;
            }
            console.log(`i = ${i} j = ${j}`);
        }   
    }
}

labelLoop();

// ForInForEach();

// printArry();

// printNumberEven();
// printNumber();