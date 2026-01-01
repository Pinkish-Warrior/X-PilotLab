# Challenge Alpha - Beginner Level

Welcome to your first drone programming challenge! This is where you'll learn the fundamentals of drone control.

## Difficulty: Beginner

**Focus:** Understanding UDP communication and basic drone commands without flight risk.

## Objective

Learn to control a drone through command-line input using UDP communication. Start with safe, ground-based commands before attempting flight.

## What You'll Learn

1. Setting up UDP communication with the Tello drone
2. Sending commands and receiving responses
3. Reading drone status information (battery, speed, flight time)
4. Basic command structure and syntax

## Instructions

1. Familiarize yourself with `challenge_alpha.js`, which sets up a command-line interface to send commands via UDP
2. Study how the existing code establishes connection with the drone (IP: 192.168.10.1, Port: 8889)
3. Implement at least 3 commands from the list below
4. Test each command and verify the drone's response in the console

## Commands to Implement

**Status Queries (No Flight Risk - Start Here!):**

- `command` - Enter SDK mode
- `battery?` - Query current battery level
- `speed?` - Query current speed setting
- `time?` - Query flight time

**Basic Movement (After mastering queries):**

- `takeoff` - Initiate takeoff
- `land` - Initiate landing
- `up <distance>` - Ascend by specified distance (cm)
- `down <distance>` - Descend by specified distance (cm)
- `forward <distance>` - Move forward (cm)
- `backward <distance>` - Move backward (cm)
- `left <distance>` - Move left (cm)
- `right <distance>` - Move right (cm)

## Constraints

- Maximum distance range: **100 cm**
- Start with status queries before attempting flight commands
- Always check battery level before takeoff

## Available Mission

Once you've implemented the basic commands, try running:

**missions/xpilot-query.md** - Practice status queries safely

## Files

- `challenge_alpha.js` - Your starter code file
- `missions/xpilot-query.md` - Beginner mission file

## Testing Tips

1. First, test the `command` to enter SDK mode
2. Query battery level with `battery?`
3. Only attempt flight commands if battery > 20%
4. Always have `land` command ready

## Safety First

- Test in a safe, open area
- Keep the drone within visual range
- Monitor battery levels
- Have a clear landing zone

Good luck with your first challenge! Master these basics before moving to Beta level.

