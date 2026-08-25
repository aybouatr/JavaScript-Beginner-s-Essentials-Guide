async function getUserDashboard(userId)
{
  try 
  {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    console.log(`User: ${user.name}, Total posts: ${posts.length}`);
    
    return { user, posts };

  }
  catch (error)
  {
        console.error("Failed to load dashboard:", error.message);
  }
}

async function loadData()
{
    const user = await fetchUser();
    const posts = await fetchPosts();
}


