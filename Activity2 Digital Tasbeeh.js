function AllAkbar(Tasbeeh)
{
    Tasbeeh.textContent = "سبحان الله";
    Tasbeeh.style.color = aliceblue;
    let counter = 0;

    let timedown = setInterval(() => {
        
        counter++;
        Tasbeeh.textContent = "سبحان الله - " + counter
        if (counter === 33)
            clearInterval(timedown);
        
    }, 1000);

}

function Allhmdlah( Tasbeeh)
{
    Tasbeeh.textContent = "الحمد لله";
    Tasbeeh.style.color = red;
    let counter = 0;

    let timedown = setInterval(() => {
        
        counter++;
        Tasbeeh.textContent = " الحمد لله - " + counter
        if (counter === 33)
            clearInterval(timedown);
        
    }, 1000);
}

function Subhanalah( Tasbeeh)
{
    Tasbeeh.textContent = "الله أكبر";
    Tasbeeh.style.color = green;
    let counter = 0;

    let timedown = setInterval(() => {
        
        counter++;
        Tasbeeh.textContent = " الله أكبر - " + counter
        if (counter === 33)
            clearInterval(timedown);
        
    }, 1000);
}

// function StartTasbeeh()
// {
//     const Tasbeeh = document.getElementById("Tasbeeh");
//     const button = document.getElementById("btn");


//     Tasbeeh.textContent = "ابدأ التسبيح";
//     button.disabled = false;

    
//         Subhanalah(Tasbeeh);
//         Allhmdlah(Tasbeeh);
//         AllAkbar(Tasbeeh);
    

//     Tasbeeh.textContent = "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير";
//     button.disabled = true;
// }

function StartTasbeeh()
{
    const Tasbeeh = document.getElementById("Tasbeeh");
    const button = document.getElementById("btn");

    button.disabled = true;

    Tasbeeh.style.color = "aliceblue";

    let counter = 0;

    // Subhan Allah
    let timer1 = setInterval(() =>
    {
        counter++;

        Tasbeeh.textContent = "سبحان الله - " + counter;

        if (counter === 33)
        {
            clearInterval(timer1);

            // Wait 1 second, then start Alhamdulillah
            setTimeout(() =>
            {
                Tasbeeh.style.color = "red";
                counter = 0;

                let timer2 = setInterval(() =>
                {
                    counter++;

                    Tasbeeh.textContent = "الحمد لله - " + counter;

                    if (counter === 33)
                    {
                        clearInterval(timer2);

                        // Wait 1 second, then start Allahu Akbar
                        setTimeout(() =>
                        {
                            Tasbeeh.style.color = "green";
                            counter = 0;

                            let timer3 = setInterval(() =>
                            {
                                counter++;

                                Tasbeeh.textContent = "الله أكبر - " + counter;

                                if (counter === 33)
                                {
                                    clearInterval(timer3);

                                    // Finished
                                    setTimeout(() =>
                                    {
                                        Tasbeeh.style.color = "black";

                                        Tasbeeh.textContent =
                                            "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير";

                                        button.disabled = false;

                                    }, 1000);
                                }

                            }, 1000);

                        }, 1000);
                    }

                }, 1000);

            }, 1000);
        }

    }, 1000);
}