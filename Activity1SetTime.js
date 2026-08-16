function StartTime()
{
    let Status = document.getElementById("koko2");

        Status.textContent = "Starting soon...";

        setTimeout(() => {
          Status.textContent = "Running...";

          let count = 0;
          let intervalID = setInterval(() => {
            count++;
            Status.textContent = "Running... " + count;

            if (count === 5) {
              clearInterval(intervalID);
              Status.textContent = "Process complete!";
            }
          }, 1000);
        }, 2000);

}