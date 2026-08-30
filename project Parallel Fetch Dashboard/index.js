const UI = {
    btnLoadDashboard: document.getElementById('btn-load-dashboard'),
    btnDelete: document.getElementById('btn-delete'),
    cardUser: document.getElementById('card-user')
}

function SetStatus(message)
{
    UI.btnDelete.innerHTML = '';
    UI.btnDelete.innerHTML = `${message}`;
}

function card(title, value, description)
{
    return `
        <div class="card">
            <h2>${title}</h2>
            <p>${value}</p>
            <p>${description}</p>
        </div>
    `;
}


function RenderDashboard(users, posts) 
{
     const postsPerUser = Math.round(posts.length / users.length);

          UI.cardUser.innerHTML = [
            card("Users", users.length.toLocaleString(), "Fetched from API"),
            card("Posts", posts.length.toLocaleString(), "Fetched from API"),
            card(
              "Avg posts/user",
              postsPerUser.toLocaleString(),
              "Computed locally"
            ),
          ].join("");
}



async function LoadUserData()
{
    UI.cardUser.innerHTML = '';
    UI.cardUser.innerHTML = '<p>Loading...</p>';
    UI.btnLoadDashboard.disabled = true;

    try
    {
        const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
          ]);

        if (!usersRes.ok || !postsRes.ok)
            throw new Error("One of the requests failed.");
        
        const [users, posts] = await Promise.all([
            usersRes.json(),
            postsRes.json()
        ]);

        SetStatus(`✅ Ready`);
        RenderDashboard(users, posts);


    }
    catch (error)
    {
        SetStatus(`❌ Not Ready`);
        console.error(error);
    }
    finally
    {
        UI.btnLoadDashboard.disabled = false;
    }

}


UI.btnLoadDashboard.addEventListener('click', LoadUserData);
// UI.btnDelete.addEventListener('click', LoadUserData);