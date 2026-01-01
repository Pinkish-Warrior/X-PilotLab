//ALERT 1st version
/*
  Based On  
	Rzye Tello
	http://www.ryzerobotics.com
Software Developer, written for educational purposes only.
UK -london/ 2025

*/

const net = require("net");
const dgram = require("dgram");
const readline = require("readline");
const chalk = require("chalk");
const { EOL } = require("os");

// Read configuration file
const config = require("./config.json");

// Create UDP socket
const client = dgram.createSocket("udp4");

// Track drone connection status
let isDroneConnected = false;

// Listen for messages from drone
client.on("message", (msg) => {
  isDroneConnected = true;
  console.log(`Drone's response: ${msg.toString()}`);
});

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "🤖 Robotics Hub> \n",
});

// Create a map of commands
const commands = new Map();
commands.set("h", "help");
commands.set("c", "command");
commands.set("t", "takeoff");
commands.set("l", "land");
commands.set("f", "forward");
commands.set("b", "back");
commands.set("l", "left");
commands.set("r", "right");
commands.set("u", "up");
commands.set("d", "down");
commands.set("a", "cw");
commands.set("s", "ccw");
commands.set("w", "battery?");
commands.set("z", "time?");
commands.set("x", "speed?");
commands.set("q", "flip");

// Helper function to get random color
function getRandomColor() {
  const colors = [
    "#FFB6C1", "#FF69B4", "#FF34B3", "#C71585", "#9370DB", "#8E4585",
    "#FF1493", "#FFD700", "#FFA500", "#FF4500", "#FF8C00", "#FF6347",
    "#FF3E3E", "#B22222", "#8B0000", "#800000", "#808000", "#7CFC00",
    "#7FFF00", "#00FF7F", "#00FF00", "#00FA9A", "#00FFFF", "#00B2EE",
    "#0000FF", "#0000CD", "#00008B", "#000080"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// List keys function with ASCII art logo
function listKeys() {
  console.log(
    chalk.yellow(`${EOL}Ready for a flight experience with 01Founders Coding School?`)
  );
  console.log(
    chalk.bgGrey(
      chalk.green(`${EOL}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(##(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%(#########((%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@((###################(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%%(##########################(%%@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@((####################################(@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@%&(############################################(%%@@@@@@@@@@@@@@@
@@@@@@@@@@@@(#####################################################((@@@@@@@@@@@@
@@@@@@%%(#########(#(/(##(/(((//(((/(((#######(##/(##(/(#(############((%@@@@@@@
@@@@(############(#,   ..   ,    ,   .#(#####(#*   ..   ,#(################@@@@@
@@@@(#############(#*.,#(,.*#/,,/#*.,(#///#(##(#/*/(#,.*#(//(#(############@@@@@
@@@@(############(#,   ..   ,    ,   ..   ,#(#####(#.   ,    /#(###########@@@@@
@@@@(#############(#*.,((,.*#(//(#*.,(#,.*#(######(((,.*#(,./#(############@@@@@
@@@@(############(#*   ..   *#((#*   ..   ,#(#####(#.   ,    /#(###########@@@@@
@@@@(#############((*.,((,.*((##((*.,((,.*(((#####(((,.*#/../#(############@@@@@
@@@@(############(#*   ,,   *#((#*   ,,   *#(#####(#,   *    (#(###########@@@@@
@@@@(############(#(,..//..,((((#(,..//..,(((#####(#/..,(*..*#(############@@@@@
@@@@(############(#/   **   *#((#/   ,,   *#(#####(#,   /.  .#(############@@@@@
@@@@(############(#/.  **  ./#((#(.  */. ./#(#####(#*. ./,  .(((###########@@@@@
@@@@(############(#(   **   (#((#(   **   (#(#####(#*   #,  .#(############@@@@@
@@@@(############(#/   **   /#((#/   ,*   /#(#####(#,   /.  .(((###########@@@@@
@@@@(#############(#, .((. ,######, .((. ,########(#(. ,#*. *#(############@@@@@
@@@@(############(#*   ,,   *.  .*   ,,   *#(#####(#,   *.   (#(###########@@@@@
@@@@(#############(#*.,##*.*#(,,(#*.*##*.*#(#########,.*#(,,(#(############@@@@@
@@@@(###############(((#.   *    *   .,   ,#(########((((    /#(###########@@@@@
@@@@@((################(#/*(##**##(*/##/*(#(##############**##############(@@@@@
@@@@@@@%%%(##############(((##((###((##(((################((########((%@%@@@@@@@
@@@@@@@@@@@@@@((################################################((@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%@@%%(########################################(%%%@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@(#################################(@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@%(((#####################(%%@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@((###############(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%(#####((%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`)
    )
  );
  console.log(chalk.cyan(`${EOL}Available Commands:`));
  commands.forEach((value, key) => {
    const color = getRandomColor();
    console.log(
      chalk.bgHex(color)(chalk.black(` ${key} `)) + chalk.white(` - ${value}`)
    );
  });
  console.log();
}

// Handle readline input
rl.on("line", (input) => {
  // Split the input into words
  const words = input.trim().split(" ");

  // Check if the input is "lol"
  if (words[0] === "lol") {
    client.close();
    rl.close();
    return;
  }

  // Check if the input is a command
  if (commands.has(words[0])) {
    // Reset connection flag for this command
    isDroneConnected = false;

    // Send the command to the drone
    client.send(
      commands.get(words[0]),
      0,
      commands.get(words[0]).length,
      config.dronePort,
      config.droneHost,
      (err) => {
        if (err) {
          console.log("❌ Error sending command:", err.message);
          return;
        }
        console.log(`📤 Sent command: ${commands.get(words[0])}`);
      }
    );

    // Wait for 1 second and check if the drone has responded
    setTimeout(() => {
      if (!isDroneConnected) {
        console.log(
          "❌ Drone not connected.\n😟 Check your connection and try again. 🚀"
        );
      }
    }, 1000);
  } else {
    console.log("Invalid command.");
  }
});

// Handle readline close
rl.on("close", () => {
  console.log(
    `Exiting Command Line: \nBye for now, keep your wings spread and your batteries charged! \nSee you next time! 🚀👋`
  );
  process.exit(0);
});

// Create TCP server
const server = net.createServer();
server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening on port ${address.port}`);
  client.bind(address.port);
});
server.listen(0);

// List keys
listKeys();

// Prompt user input
rl.prompt();
