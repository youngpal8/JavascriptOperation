// let username = "";
// while (username === "" || username === null) {
//     username = window.prompt("Enter Username");
// }

// console.log(username);

// do {
//     username = window.prompt("Enter Username")
// } while (username === "" || username === null);

// console.log(username);


// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("Enter your Username");
//     password = window.prompt("Enter your password");

//     if (username === "olumide" && password === "myPassword") {
//         loggedIn = true;
//         console.log("you have logged in successfully");
//     } else {
//         console.log("invalid login details");
//     }
// }

// do {
//     username = window.prompt("Enter your Username");
//     password = window.prompt("Enter your password");

//     if (username === "olumide" && password === "myPassword") {
//         loggedIn = true;
//         console.log("you have logged in successfully");
//     } else {
//         console.log("invalid login details");
//     }
// } while (!loggedIn);

// for (let i = 4; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 1; i--) {
//     console.log(i);
// }


for (let i = 1; i < 20; i++) {
    if (i == 9) {
        continue;
        //break; *if you dont want it to continue*
    } else {
        console.log(i);
    }
}