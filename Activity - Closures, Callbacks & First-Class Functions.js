function CallBackFunction(process,callback)
{
    callback(process * 2);
}




function print(number)
{
    console.log("number : ",number);
}

CallBackFunction(3,print);
function makeCounter()
{
    let count = 0;

    function increment()
    {
        count++;
    }

    function print()
    {
        return count;
    }

    return {
        increment,
        print
    };
}

// let res = makeCounter();

// res.increment();
// res.increment();
// res.increment();

// console.log(`Value ${res.print()}`);

function bankAccount()
{
    let Balance = 100;

    function deposit(amount)
    {
        Balance += amount
    }

    function getBalance()
    {
        return Balance;
    }

    return {getBalance,deposit};

}

let bank = bankAccount();

bank.deposit(100);
bank.deposit(100);
bank.deposit(100);
console.log(`this is balance = ${bank.getBalance()}`);