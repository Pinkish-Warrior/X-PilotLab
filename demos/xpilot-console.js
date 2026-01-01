/*
  Based On  
	Rzye Tello
	http://www.ryzerobotics.com
Developed with educational purposes only.
UK -london/ 2025
*/

const eol = require("os").EOL;
const readline = require('readline');
const chalk = require('chalk');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var dataToTrack_keys = ["battery", "x", "y", "z", "speed"];
var lastDataReceived = null;

var fs = require("fs");

// Allowed commands for validation
const ALLOWED_COMMANDS = [
  "command", "takeoff", "land", "up", "down", "left", "right",
  "forward", "back", "cw", "ccw", "flip", "battery?", "time?",
  "speed?", "setspeed"
];

// Validate distance parameter (Tello range: 20-500cm)
function validateDistance(distance) {
  const dist = parseInt(distance);
  if (isNaN(dist)) {
    return { valid: false, error: "Distance must be a number" };
  }
  if (dist < 20 || dist > 500) {
    return { valid: false, error: "Distance must be between 20-500cm" };
  }
  return { valid: true, value: dist };
}

// Validate angle parameter (Tello range: 1-360 degrees)
function validateAngle(angle) {
  const ang = parseInt(angle);
  if (isNaN(ang)) {
    return { valid: false, error: "Angle must be a number" };
  }
  if (ang < 1 || ang > 360) {
    return { valid: false, error: "Angle must be between 1-360 degrees" };
  }
  return { valid: true, value: ang };
}

var PORT = 8889;
var HOST = "192.168.10.1";

const dgram = require("dgram");
const client = dgram.createSocket("udp4");

client.bind(8001);

function respondToPoll(response) {
  var noDataReceived = false;

  var resp = "";
  var i;
  for (i = 0; i < dataToTrack_keys.length; i++) {
    resp += dataToTrack_keys[i] + " ";
    resp += i + 10;
    resp += "\n";
  }
  response.end(resp);
}

function CommandRequest() {
  var message = Buffer.from("command");

  client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
  });

  client.on("message", (msg, info) => {
    console.log(chalk.cyan("📡 Data received from server: " + msg.toString()));
    console.log(
      chalk.blue("Received %d bytes from %s:%d\n"),
      msg.length,
      info.address,
      info.port
    );
  });
}

function TakeoffRequest() {
  var message = Buffer.from("takeoff");

  client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
  });
}

function LandRequest() {
  var message = Buffer.from("land");

  client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
  });
}

function sendCommand(telloCommand) {
  // Validate command is in allowed list
  if (!ALLOWED_COMMANDS.includes(telloCommand)) {
    console.log(chalk.red(`✗ Error: Invalid command "${telloCommand}"`));
    console.log(chalk.yellow(`Allowed commands: ${ALLOWED_COMMANDS.join(", ")}`));
    return;
  }

  switch (telloCommand) {
    case "poll":
      respondToPoll(response);
      break;

    case "command":
      console.log(chalk.green("✓ Sending command: command"));
      CommandRequest();
      break;

    case "takeoff":
      console.log(chalk.green("✓ Sending command: takeoff"));
      TakeoffRequest();
      break;

    case "land":
      console.log(chalk.green("✓ Sending command: land"));
      LandRequest();
      break;

    case "up":
      dis = 60;
      const upValidation = validateDistance(dis);
      if (!upValidation.valid) {
        console.log(chalk.red(`✗ Error: ${upValidation.error}`));
        return;
      }
      console.log(chalk.green(`✓ Sending command: up ${upValidation.value}cm`));
      var message = Buffer.from("up " + upValidation.value);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) {
            console.log(chalk.red("✗ Error sending command:", err.message));
            return;
          }
        }
      );
      break;

    case "down":
      dis = 60;
      const downValidation = validateDistance(dis);
      if (!downValidation.valid) {
        console.log(chalk.red(`✗ Error: ${downValidation.error}`));
        return;
      }
      console.log(chalk.green(`✓ Sending command: down ${downValidation.value}cm`));
      var message = Buffer.from("down " + downValidation.value);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) {
            console.log(chalk.red("✗ Error sending command:", err.message));
            return;
          }
        }
      );
      break;

    case "left":
      dis = 100;
      console.log("left " + dis);
      var message = Buffer.from("left " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "right":
      dis = 100;
      console.log("right " + dis);
      var message = Buffer.from("right " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "forward":
      dis = 100;
      console.log("forward " + dis);
      var message = Buffer.from("forward " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "back":
      dis = 100;
      console.log("back " + dis);
      var message = Buffer.from("back " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "cw":
      dis = 360;
      console.log("cw " + dis);
      var message = Buffer.from("cw " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "flip":
      dis = "f";
      console.log("flip " + dis);
      var message = Buffer.from("flip " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "ccw":
      dis = 360;
      console.log("ccw " + dis);
      var message = Buffer.from("ccw " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "battery?":
      console.log("battery strength?");
      var message = Buffer.from("battery?");
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "time?":
      console.log("flight time?");
      var message = Buffer.from("time?");
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "speed?":
      console.log("current speed?");
      var message = Buffer.from("speed?");
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;

    case "setspeed":
      dis = 20;
      console.log("setspeed " + dis);
      var message = Buffer.from("speed " + dis);
      client.send(
        message,
        0,
        message.length,
        PORT,
        HOST,
        function (err, bytes) {
          if (err) throw err;
        }
      );
      break;
  }
}

const keyMap = new Map();
keyMap.set("h", "help");
keyMap.set("c", "command");
keyMap.set("t", "takeoff");
keyMap.set(" ", "land");
keyMap.set("f", "forward");
keyMap.set("b", "back");
keyMap.set("l", "left");
keyMap.set("r", "right");
keyMap.set("u", "up");
keyMap.set("d", "down");
keyMap.set("a", "cw");
keyMap.set("s", "ccw");
keyMap.set("w", "battery?");
keyMap.set("z", "time?");
keyMap.set("x", "speed?");
keyMap.set("q", "flip");

function listKeys() {
  console.log(chalk.yellow(`${eol}Available Keys:`));
  keyMap.forEach((value, key) => {
    console.log(chalk.cyan(`  ${key}`) + chalk.white(` - ${value}`));
  });
  console.log();
}
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    console.log(chalk.yellow("\nExiting..."));
    client.close();
    process.exit(); // eslint-disable-line no-process-exit
  } else if (key.name === "h") {
    listKeys();
  } else {
    if (keyMap.has(str)) {
      sendCommand(keyMap.get(str));
    } else {
      console.log(chalk.yellow(`⚠ No command defined for "${str}" key. Press 'h' for help.`));
    }
  }
});

console.log(chalk.cyan("---------------------------------------"));
console.log(chalk.bold.cyan("    Tello Command Console"));
console.log(chalk.cyan("---------------------------------------"));

console.log(chalk.green("Press a key to send a command to Tello"));
console.log(chalk.yellow("Press 'h' for help or Ctrl+C to exit"));
listKeys();
