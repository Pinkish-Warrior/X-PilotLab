# X-PILOTLAB - BY Pinkish-Warrior

An educational drone programming platform for learning to control DJI/Ryze Tello drones through code. This project provides hands-on experience with UDP communication, command-line interfaces, and autonomous flight programming.

Based on the Tello.js SDK and designed for educational purposes.

**📍 New to the project? Check out the [Visual Roadmap](ROADMAP.md) for an interactive learning journey!**

## Prerequisites

- Node.js v8.11.1 or higher
- DJI/Ryze Tello drone
- WiFi connection to Tello drone network

## Installation

```bash
npm install
```

Required packages: `chalk`, `chance`, `csv-parser`

## Project Structure

```txt
X-PilotLab/
├── demos/             # Working demo implementations & tools
│   ├── xpilot-cli.js       # Interactive command-line interface demo
│   ├── xpilot-console.js   # Console control system demo
│   └── xpilot-mission.js   # Mission file interpreter & executor
├── challenges/        # Ranked learning challenges
│   ├── alpha/              # ⭐ Beginner - Basic commands & queries
│   │   ├── README.md
│   │   ├── challenge_alpha.js
│   │   └── missions/
│   │       └── xpilot-query.md
│   ├── beta/               # ⭐⭐ Intermediate - Rotation & patterns
│   │   ├── README.md
│   │   └── missions/
│   │       ├── xpilot-box.md
│   │       └── xpilot-vertical.md
│   └── charlie/            # ⭐⭐⭐ Advanced - Complex maneuvers
│       ├── README.md
│       └── missions/
│           └── xpilot-bounce.md
└── config.json        # Drone connection configuration
```

## How It Works

**Challenges** are ranked learning paths (Alpha → Beta → Charlie) that teach drone programming progressively

**Missions** are flight patterns within each challenge level that use the commands you implement

**Demos** are working reference implementations and tools that execute missions and communicate with the drone

## Navigation Guide

### Start Here: Challenge Progression System

X-PilotLab uses a ranked progression system. Start with **Alpha** and advance through the levels:

#### 🎯 Challenge Alpha - Beginner

**Location:** `/challenges/alpha/`

**What you'll learn:**

- UDP communication basics
- Drone status queries (battery, speed, time)
- Safe ground-based testing
- Basic movement commands

**Mission:** `xpilot-query.md` - Status queries without flight risk

**Time to complete:** 1-2 hours

[Start Challenge Alpha →](challenges/alpha/README.md)

---

#### 🎯 Challenge Beta - Intermediate

**Location:** `/challenges/beta/`

**Prerequisites:** Complete Challenge Alpha

**What you'll learn:**

- Rotation commands (clockwise/counter-clockwise)
- Coordinated flight patterns
- Multi-command sequences
- Geometric patterns (squares, spirals)

**Missions:**

- `xpilot-box.md` - Square flight pattern with 90° turns
- `xpilot-vertical.md` - Vertical spiral movements

**Time to complete:** 2-4 hours

[Start Challenge Beta →](challenges/beta/README.md)

---

#### 🎯 Challenge Charlie - Advanced

**Location:** `/challenges/charlie/`

**Prerequisites:** Complete Challenges Alpha & Beta

**What you'll learn:**

- Full 360° rotations
- Multi-axis coordination
- Complex flight choreography
- Custom mission creation

**Mission:** `xpilot-bounce.md` - Bouncing pattern with full rotations

**Time to complete:** 4+ hours

[Start Challenge Charlie →](challenges/charlie/README.md)

---

### Quick Start Path

1. **Setup** (15 min)

   ```bash
   npm install
   # Connect to Tello WiFi network
   ```

2. **Alpha Challenge** (1-2 hours)
   - Read `/challenges/alpha/README.md`
   - Implement basic commands in `challenge_alpha.js`
   - Run mission: `xpilot-query.md`

3. **Beta Challenge** (2-4 hours)
   - Read `/challenges/beta/README.md`
   - Add rotation commands
   - Execute missions: `xpilot-box.md`, `xpilot-vertical.md`

4. **Charlie Challenge** (4+ hours)
   - Read `/challenges/charlie/README.md`
   - Master complex patterns
   - Execute mission: `xpilot-bounce.md`
   - Create your own missions!

## Usage

### 1. Interactive Command-Line Interface

```bash
node demos/xpilot-cli.js
```

Control the drone interactively with command history support (use up/down arrow keys to recall commands).

Available commands: `command`, `takeoff`, `land`, `forward`, `back`, `left`, `right`, `up`, `down`, `cw` (clockwise rotation), `ccw` (counter-clockwise rotation), and more.

### 2. Mission Executor

```bash
node demos/xpilot-mission.js
```

Run pre-programmed mission files from challenge folders. The interpreter uses async/await to send commands sequentially with built-in delays (approximately 5 seconds) to ensure the drone completes each maneuver before receiving the next command.

Navigate to a challenge folder and run:

```bash
cd challenges/beta
node ../../demos/xpilot-mission.js
```

When prompted, enter a mission filename from that challenge's `missions/` folder (e.g., `xpilot-box.md`). You can run multiple missions without restarting the drone.

## Safety Notes

- Always fly in a safe, open area
- Be careful in low ambient light conditions
- Monitor battery levels before flights
- Keep clear of obstacles and people
- Follow all local drone regulations

## Configuration

Connection settings are stored in `config.json`:

- Default drone IP: 192.168.10.1
- Default port: 8889

## Technical Details

This project uses:

- UDP sockets (dgram) for drone communication
- Async/await patterns for sequential command execution
- Command delay mapping to ensure proper flight execution
- Readline interface for interactive control with command history

## Let's Have Fun

Experiment, learn, and enjoy programming autonomous drone flights

---

![Human-led - AI-enhanced](https://img.shields.io/badge/🧠%20Human%20Led%20%2D%20🤖%20AI%20Enhanced-success)

*This project was developed with assistance from [Claude](https://www.anthropic.com/claude) by Anthropic.*
