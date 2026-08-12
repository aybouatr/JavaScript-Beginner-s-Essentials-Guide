
// window open.js
let myWin;

function openWindow() {
    myWin = window.open("FirstCodeBy.js", "myPopup", "width=300,height=200,scrollbares=yes");

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

