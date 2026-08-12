
// window open.js
let myWin;

function openWindow() {
    myWin = window.open("", "myPopup", "width=800,height=600");

    myWin.document.write(
        "<h2>This is a new window opened by JavaScript.</h2>"
    );
    myWin.document.close();
}

// function closeWindow() 
// {
//   if (myWin && !myWin.closed)
// {
//         myWin.close();
//   }
// }

