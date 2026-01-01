# Challenge Charlie - Advanced Level

Welcome to the advanced tier! Charlie challenges push your skills with complex multi-axis maneuvers, full rotations, and dynamic flight patterns.

## Difficulty: Advanced

**Focus:** Complex flight choreography combining multiple axes of movement with full 360° rotations and precise timing.

## Prerequisites

Before attempting Charlie challenges, you must have:
- ✅ Completed Challenge Alpha (basic commands)
- ✅ Completed Challenge Beta (rotation and patterns)
- ✅ Successfully executed box and vertical missions
- ✅ Solid understanding of command timing and delays
- ✅ Confident in emergency procedures (battery checks, manual landing)

## Objective

Execute advanced flight choreography that combines vertical movement, full rotations, and dynamic motion patterns. Master the timing and coordination required for complex autonomous missions.

## What You'll Master

1. Full 360° rotation maneuvers
2. Multi-axis coordination (vertical + rotational simultaneously)
3. Complex command sequences with 6+ movements
4. Bouncing/oscillating flight patterns
5. Advanced mission debugging and optimization
6. Creating custom mission files

## Advanced Techniques

**Full Rotations:**
- `cw 360` - Complete clockwise spin
- `ccw 360` - Complete counter-clockwise spin

**Multi-Axis Combinations:**
- Down → Full Spin → Up (bouncing motion)
- Multiple bounce cycles in sequence
- Maintaining altitude control during rotations

**Command Sequencing:**
Missions with 8+ commands requiring precise timing and spatial awareness.

## Available Mission

### missions/xpilot-bounce.md
Execute a complex bouncing pattern with full rotations:
1. Takeoff
2. Descend while maintaining control
3. Execute 360° clockwise rotation
4. Ascend back to altitude
5. Execute 360° counter-clockwise rotation
6. Repeat descent cycle
7. Land safely

**Skills practiced:**
- Vertical motion control
- Full 360° rotations
- Oscillating patterns
- Complex sequencing
- Timing and coordination

## Challenge Requirements

1. Execute the bounce mission autonomously without intervention
2. Complete all rotation cycles smoothly
3. Maintain consistent altitude changes
4. Land precisely at the starting position
5. Monitor and log battery consumption throughout mission

## Advanced Constraints

- Full rotation angles: 360°
- Multiple command cycles: 6+ movements
- Vertical range: ±100 cm
- Timing critical: 5-7 second delays between commands
- Battery requirement: > 70% at start (mission is intensive)

## Testing Strategy

### Phase 1: Component Testing
1. Test single 360° rotation on ground
2. Test 360° rotation in hover
3. Test down → spin → up sequence once

### Phase 2: Pattern Testing
1. Execute 2 bounce cycles only
2. Verify altitude consistency
3. Check landing position accuracy

### Phase 3: Full Mission
1. Pre-flight checks (battery > 70%, clear area)
2. Execute complete xpilot-bounce.md
3. Monitor and log any issues
4. Refine timing if needed

### Phase 4: Optimization
1. Adjust command delays for smoother transitions
2. Optimize altitude changes
3. Fine-tune rotation speeds
4. Document your improvements

## Advanced Debugging

**Common Issues:**
- **Drift during rotation:** Wind compensation, recalibrate IMU
- **Altitude loss:** Increase delay between commands
- **Incomplete rotations:** Verify angle values, check for obstacles
- **Battery drain:** Mission too long, reduce cycles or distances

**Solutions:**
- Add delay buffers between complex maneuvers
- Log each command execution and drone response
- Test in multiple locations to account for environmental factors
- Create shorter test missions to isolate problems

## Safety - Critical for Advanced Missions

- **Minimum flight space:** 4+ meters clearance in ALL directions
- **Battery minimum:** 70% at mission start, abort if < 30% mid-flight
- **Weather conditions:** Calm wind only (< 10 mph), no indoor flights
- **Emergency procedures:** Manual override ready, clear landing zone always available
- **Spotter recommended:** Have someone monitor from different angle
- **Test location:** Outdoor, soft landing surface, no overhead obstacles

## Success Criteria

You've mastered Charlie level when you can:
- Execute xpilot-bounce.md autonomously with 100% success rate
- Maintain altitude control throughout full rotations
- Land within 50cm of takeoff position
- Adapt missions for different environmental conditions
- Debug and optimize command sequences independently

## Beyond Charlie: Custom Missions

Ready to create your own? Try designing:
- **Figure-8 pattern:** Combine forward movement with 180° turns
- **Spiral ascent/descent:** Continuous rotation while changing altitude
- **Perimeter patrol:** Rectangular path with altitude changes at corners
- **Dance routine:** Choreograph a sequence to music timing

## Custom Mission Format

Create new `.md` files in the `missions/` folder:

```markdown
# Your Mission Name

Description of what the mission does.

## Commands

\`\`\`script
command
\`\`\`

\`\`\`script
battery?
\`\`\`

[Add your command sequence...]
```

Run with: `node ../../demos/xpilot-mission.js`

## Congratulations!

You've completed all three challenge levels and mastered autonomous drone programming. You can now:
- Control drones programmatically with confidence
- Design and execute complex flight patterns
- Debug and optimize missions
- Create custom autonomous routines

Keep exploring, keep building, and most importantly - fly safe!

## Next Steps

- Share your custom missions with the community
- Experiment with advanced sensors (camera, altitude hold)
- Explore computer vision integration
- Build autonomous navigation systems
- Teach others what you've learned

**Happy flying, pilot!**
