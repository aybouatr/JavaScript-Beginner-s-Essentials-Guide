async function getFakeJoke()
{
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
        if (!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jokeData = await response.json();
        return `${jokeData[0].setup} - ${jokeData[0].punchline}`;
    } catch (error) 
    {
        console.error('Error fetching joke:', error);
        return null;
    }
}

function initJokeApp() 
{
    const btn = document.getElementById('button-joke');
    const jokeElement = document.getElementById('joke');

    btn.addEventListener('click', async () => {
        jokeElement.textContent = 'Fetching a joke...';
        const joke = await getFakeJoke();
        
        if (!joke) {
            jokeElement.textContent = 'Failed to fetch a joke.';
        } else {
            jokeElement.textContent = joke;
        }
    });
}

initJokeApp();

 async function sendJokeToServer(joke)
{

    await fetch("/api/users", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Ali",
            email: "ali@example.com"
        })
    });

    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Ali"
      }),
      credentials: "include",
      cache: "no-cache"
    });

}