# Challenge Beta - Intermediate Level

Ready to take your drone programming to the next level? Beta challenges introduce rotation and coordinated flight patterns.

## Difficulty: Intermediate

**Focus:** Combining movement with rotation to create structured flight patterns.

## Prerequisites

Before starting Beta challenges, you should have completed:
- Challenge Alpha
- Successfully implemented basic movement commands
- Tested takeoff, land, and directional movements

## Objective

Master rotational commands and execute coordinated flight patterns that combine movement with precise orientation control.

## What You'll Learn

1. Implementing rotation commands (clockwise and counter-clockwise)
2. Coordinating multiple commands in sequence
3. Creating geometric flight patterns (squares, spirals)
4. Understanding timing and command sequencing
5. Using the mission executor system

## New Commands to Implement

**Rotation Commands:**
- `cw <angle>` - Rotate clockwise by specified degrees (e.g., `cw 90` for 90° right turn)
- `ccw <angle>` - Rotate counter-clockwise by specified degrees (e.g., `ccw 90` for 90° left turn)

**Command Combinations:**
You'll need to chain commands together:
1. Movement → Rotation → Movement
2. Vertical → Rotation → Vertical (spiral patterns)
3. Multiple rotations in sequence

## Available Missions

### missions/xpilot-box.md
Fly the drone in a perfect square pattern:
- Takeoff and ascend
- Move forward, rotate 90°
- Repeat 4 times to complete the square
- Land

**Skills practiced:** Precise rotation, pattern consistency, spatial awareness

### missions/xpilot-vertical.md
Execute a vertical spiral pattern:
- Ascend while rotating
- Descend with counter-rotation
- Combine vertical movement with orientation changes

**Skills practiced:** Multi-axis control, coordination, smooth transitions

## Running Missions

Use the mission executor demo:

```bash
node ../../demos/xpilot-mission.js
```

When prompted, enter the mission filename:
- `xpilot-box.md`
- `xpilot-vertical.md`

## Challenge Requirements

1. Implement rotation commands (`cw`, `ccw`) in your control system
2. Successfully execute both missions without manual intervention
3. Ensure smooth transitions between commands
4. Maintain stable flight throughout patterns

## Constraints

- Rotation angles: 1-360 degrees
- Movement distances: up to 500 cm (more than Alpha!)
- Command delays: ~5 seconds between commands for safety

## Testing Strategy

1. **Test rotations on ground first:**
   - Send `command` to enter SDK mode
   - Test `cw 90` and verify 90° rotation
   - Test `ccw 90` and verify counter-rotation

2. **Test in flight with single rotation:**
   - Takeoff
   - Execute one `cw 90` command
   - Land and verify orientation

3. **Execute simple pattern:**
   - Start with 2-3 commands only
   - Gradually build up to full missions

4. **Run complete missions:**
   - Execute xpilot-vertical.md first (simpler)
   - Then attempt xpilot-box.md (requires precise angles)

## Debugging Tips

- If the drone drifts during rotation, check for wind/interference
- If angles are off, verify your command syntax
- Use `battery?` between mission attempts
- Keep missions short while debugging

## Safety Reminders

- Ensure 3+ meters of clear space in all directions
- Box pattern requires square flight area
- Monitor battery (should be > 50% for full missions)
- Have manual control ready to intervene

## Success Criteria

You've mastered Beta level when you can:
- Execute both missions autonomously
- Maintain consistent flight patterns
- Handle rotation + movement combinations smoothly
- Debug and adjust mission parameters

Ready for more? Advance to **Challenge Charlie** for complex multi-axis maneuvers!
