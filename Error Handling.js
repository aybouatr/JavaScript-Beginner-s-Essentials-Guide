// THROW: cannot continue safely
function loadConfig(config) 
{
  if (!config) 
  {
    throw new Error("Missing configuration");
  }

}

// RETURN: expected outcome
function findUser(id) 
{
   if (!id) 
    {
       return null;
    }
}