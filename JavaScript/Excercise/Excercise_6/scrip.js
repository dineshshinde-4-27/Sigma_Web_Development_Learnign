// Question;
//  create a hacking simulator which has green background and it shows these  message with radom dely of 1 to 7 seconds.
//  use async await

//   show following message
//     1)Initializing Hacking...
//     2)Reading your files...
//     3)Password files detected...
//     4) Sending all passwords and personal information  to server...
//     5) Cleaning up...
// hacking_simulator.js

document.addEventListener("DOMContentLoaded", () => {
  let terminal = document.getElementsByClassName("terminal")[0];

  console.log(terminal);
  async function logMessage(message) {
    let time = Math.floor(Math.random() * 7) + 1;
    let newMessage = document.createElement("div");
    newMessage.innerText = message;
    newMessage.classList.add("terminal-msg");
    terminal.insertAdjacentElement("beforeend", newMessage);

    await delay(time);
  }
  async function startHacking() {
    await logMessage("Initializing Hacking...");
    await logMessage("Reading Your file...");
    await logMessage("password files detected...");
    await logMessage("sending all passwords and personal files to server...");
    await logMessage("Cleaning up...");
  }
  let delay = (delayTime) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("This process will take :", delayTime + "seconds");
        resolve();
      }, delayTime * 1000);
    });
  };
  startHacking();
});
