
const UI = {
    loadDataBtn: document.getElementById("loadDataBtn"),
    retryBtn: document.getElementById("retryBtn"),
    loadingStatus: document.getElementById("loadingStatus"),
    toast: document.getElementById("toast"),
    grid: document.getElementById("grid"),
    meta: document.getElementById("meta"),
}

function renderUsers(users) 
{
  UI.grid.innerHTML = users
    .map(
          (u) => `
           <div class="user-data">
             <div style="font-weight:700;">${u.name}</div>
             <div class="muted">@${u.username}</div>
             <div style="margin-top:8px;" class="muted">${u.email}</div>
           </div>
       `  
    )
    .join("");
}

async function loadUsers()
{
    UI.loadDataBtn.disabled = true;
        UI.retryBtn.disabled = true;
        UI.grid.innerHTML = "";
        UI.loadingStatus.style.display = "flex";
        UI.meta.textContent = "";

    try 
    {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

          // If the server responded with an error code, treat it as an error
          if (!res.ok) 
          {
            throw new Error(`Server error: ${res.status}`);
          }
          const users = await res.json();
          renderUsers(users);
          UI.meta.textContent = `Loaded ${users.length.toLocaleString()} users`;
          showToast("✅ Loaded successfully");
    } 
    catch (error) 
    {
        console.error("Error loading users:", error);
        UI.toast.style.display = "block";

    } 
    finally 
    {
         UI.status.style.display = "none";
          UI.btnLoad.disabled = false;
    }
}

UI.loadDataBtn.addEventListener("click", loadUsers);
UI.retryBtn.addEventListener("click", loadUsers);






