# Rapido Waiting Charges - Figma Screen Specifications

## Overview
This document provides detailed specifications for creating Figma mockups for the Improving Fare Transparency in Rapido to Reduce Ride Fare Disputes case study.

## Design System

### Colors
- **Primary Background**: #0a0e27 (Dark Navy)
- **Card Background**: #1a1f3a
- **Accent Primary**: #6366f1 (Indigo)
- **Accent Secondary**: #f59e0b (Orange)
- **Success Green**: #10b981
- **Warning Yellow**: #fbbf24
- **Danger Red**: #ef4444
- **Text Primary**: #e8edf9
- **Text Secondary**: #9ca3c3

### Typography
- **Primary Font**: SF Pro Display / Inter
- **Headings**: 24-32px, Bold
- **Body**: 14-16px, Regular
- **Small Text**: 12px, Medium

---

## Screen 1: Booking Screen with Waiting Policy

### Layout
- **Top Bar**: Rapido logo, back button
- **Map View**: 60% of screen
- **Bottom Sheet**: 40% of screen

### Bottom Sheet Content
1. **Pickup & Drop Location**
   - Green dot for pickup
   - Red dot for destination
   - Estimated time: "12 mins away"

2. **Fare Estimate Card**
   ```
   ┌─────────────────────────────────┐
   │ Estimated Fare                  │
   │ ₹85 - ₹95                       │
   │                                 │
   │ ℹ️ Waiting Policy               │
   │ • First 2 minutes: FREE         │
   │ • After 2 mins: ₹1/minute      │
   │                                 │
   │ [Learn More]                    │
   └─────────────────────────────────┘
   ```

3. **Ride Options**
   - Bike (selected)
   - Auto
   - Cab

4. **Book Ride Button**
   - Full width
   - Gradient: Indigo to Purple
   - Text: "Book Rapido Bike"

### Key Features
- Waiting policy is visible BEFORE booking
- Clear pricing structure
- Educational tooltip available

---

## Screen 2: Driver Waiting Alert

### Layout
- **Map View**: Full screen with driver location
- **Alert Card**: Floating at bottom

### Alert Card Design
```
┌─────────────────────────────────────────┐
│ 🏍️ Driver Arrived!                     │
│                                         │
│ Waiting Time: 00:45                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ Free time remaining: 1 min 15 sec      │
│                                         │
│ ⚠️ Charges start at ₹1/min after 2:00 │
│                                         │
│ [I'm Coming] [Cancel Ride]             │
└─────────────────────────────────────────┘
```

### Visual Elements
- **Progress Bar**: Green (free time), Yellow (approaching limit)
- **Timer**: Large, prominent display
- **Driver Info**: Small card at top with photo, name, rating
- **Call Button**: Floating action button

### Animations
- Timer counts down in real-time
- Progress bar animates smoothly
- Color changes from green → yellow → red

---

## Screen 3: Live Ride with Real-Time Charges

### Layout
- **Map View**: 70% of screen showing route
- **Ride Info Card**: Floating at bottom

### Ride Info Card
```
┌─────────────────────────────────────────┐
│ Ride in Progress                        │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                         │
│ ETA: 8 mins | 3.2 km remaining         │
│                                         │
│ ┌─────────────────────────────────┐   │
│ │ ⏱️ Waiting Charges              │   │
│ │ 3 mins 24 secs                  │   │
│ │ ₹3.40                           │   │
│ │                                 │   │
│ │ [Tap for details ▼]            │   │
│ └─────────────────────────────────┘   │
│                                         │
│ Current Fare: ₹88.40                   │
│ (Base: ₹85 + Waiting: ₹3.40)          │
│                                         │
│ [SOS] [Call Driver]                    │
└─────────────────────────────────────────┘
```

### Expanded Details (on tap)
```
┌─────────────────────────────────────────┐
│ Fare Breakdown                          │
│                                         │
│ Base Fare              ₹50.00          │
│ Distance (3.2 km)      ₹32.00          │
│ Time (12 mins)         ₹3.00           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ Subtotal               ₹85.00          │
│                                         │
│ ⏱️ Waiting Charges                     │
│ • Free time: 2:00 mins                 │
│ • Charged time: 3:24 mins              │
│ • Rate: ₹1/min                         │
│ • Amount: ₹3.40                        │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                         │
│ Total Fare             ₹88.40          │
│                                         │
│ [Close]                                 │
└─────────────────────────────────────────┘
```

### Key Features
- **Non-intrusive**: Charges shown in collapsible card
- **Real-time updates**: Fare updates every second
- **Color coding**: Green → Yellow → Red based on amount
- **Transparency**: Full breakdown available on tap

---

## Screen 4: Ride Complete - Fare Breakdown

### Layout
- **Header**: Ride completed checkmark
- **Fare Summary**: Large card
- **Timeline**: Visual representation
- **Action Buttons**: Bottom

### Fare Summary Card
```
┌─────────────────────────────────────────┐
│ ✅ Ride Completed                       │
│                                         │
│ Total Fare                              │
│ ₹88.40                                  │
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                         │
│ Fare Breakdown                          │
│                                         │
│ Base Fare              ₹50.00          │
│ Distance (3.2 km)      ₹32.00          │
│ Time (12 mins)         ₹3.00           │
│                                         │
│ ⏱️ Waiting Charges     ₹3.40           │
│ ├─ Free time: 2:00                     │
│ └─ Charged: 3:24 @ ₹1/min             │
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ Total                  ₹88.40          │
│                                         │
│ [View Timeline] [Report Issue]         │
└─────────────────────────────────────────┘
```

### Timeline View (expandable)
```
┌─────────────────────────────────────────┐
│ Ride Timeline                           │
│                                         │
│ 🕐 2:30 PM - Booking Confirmed         │
│ │                                       │
│ 🕑 2:35 PM - Driver Arrived            │
│ │  ⏱️ Waiting started                  │
│ │                                       │
│ 🕒 2:37 PM - Free waiting ended        │
│ │  💰 Charges started (₹1/min)         │
│ │                                       │
│ 🕓 2:38 PM - Ride Started              │
│ │  ⏱️ Waiting: 3:24 (₹3.40)           │
│ │                                       │
│ 🕘 2:50 PM - Ride Completed            │
│                                         │
│ Total Waiting: 3 mins 24 secs          │
│ Charged Amount: ₹3.40                  │
└─────────────────────────────────────────┘
```

### Rating Section
```
┌─────────────────────────────────────────┐
│ Rate Your Ride                          │
│                                         │
│ ⭐⭐⭐⭐⭐                                │
│                                         │
│ How was your experience?                │
│ [Great] [Good] [Okay] [Poor]           │
│                                         │
│ [Submit Rating]                         │
└─────────────────────────────────────────┘
```

---

## Screen 5: Waiting Charges Education Modal

### Trigger
- Tap on "Learn More" or "?" icon

### Modal Content
```
┌─────────────────────────────────────────┐
│ ⏱️ Understanding Waiting Charges        │
│                                         │
│ Why do we charge for waiting?          │
│ Waiting time compensates drivers for   │
│ time spent waiting for you.            │
│                                         │
│ How it works:                           │
│ 1️⃣ First 2 minutes: FREE               │
│ 2️⃣ After 2 minutes: ₹1/minute         │
│ 3️⃣ Charges shown in real-time          │
│                                         │
│ Tips to avoid charges:                  │
│ • Be ready when driver arrives          │
│ • Track driver location                 │
│ • Communicate delays                    │
│                                         │
│ [Got It]                                │
└─────────────────────────────────────────┘
```

---

## Screen 6: Dispute/Report Issue Flow

### Issue Selection
```
┌─────────────────────────────────────────┐
│ Report an Issue                         │
│                                         │
│ What went wrong?                        │
│                                         │
│ ○ Incorrect waiting charges             │
│ ○ Driver didn't arrive on time          │
│ ○ Wrong fare calculation                │
│ ○ Other issue                           │
│                                         │
│ [Continue]                              │
└─────────────────────────────────────────┘
```

### Waiting Charges Dispute
```
┌─────────────────────────────────────────┐
│ Waiting Charges Dispute                 │
│                                         │
│ Charged Amount: ₹3.40                   │
│ Waiting Time: 3 mins 24 secs            │
│                                         │
│ What's the issue?                       │
│ ┌─────────────────────────────────┐   │
│ │ I was ready on time but driver  │   │
│ │ took longer to reach...         │   │
│ └─────────────────────────────────┘   │
│                                         │
│ Upload Evidence (Optional)              │
│ [📷 Add Photo] [📹 Add Video]          │
│                                         │
│ Expected Resolution:                    │
│ ○ Full refund (₹3.40)                  │
│ ○ Partial refund                        │
│ ○ Review and decide                     │
│                                         │
│ [Submit Dispute]                        │
└─────────────────────────────────────────┘
```

---

## Interaction Patterns

### Micro-interactions
1. **Timer Animation**: Smooth counting with subtle pulse
2. **Progress Bar**: Fills smoothly with color transitions
3. **Card Expansion**: Smooth slide-down animation
4. **Button Press**: Scale down slightly with haptic feedback
5. **Charge Update**: Gentle fade-in when amount changes

### Color States
- **Free Time**: Green (#10b981)
- **Approaching Limit**: Yellow (#fbbf24)
- **Charging**: Red (#ef4444)
- **Neutral**: Gray (#9ca3c3)

### Accessibility
- **High Contrast**: All text meets WCAG AA standards
- **Large Touch Targets**: Minimum 44x44px
- **Screen Reader**: All elements properly labeled
- **Haptic Feedback**: For important state changes

---

## Implementation Notes

### Real-time Updates
- WebSocket connection for live fare updates
- Fallback to polling every 5 seconds
- Offline mode: Show last known state

### Performance
- Lazy load timeline and detailed breakdowns
- Cache driver location updates
- Optimize map rendering

### Edge Cases
- Network loss during ride
- GPS inaccuracy
- Driver app crashes
- Dispute resolution flow

---

## Figma File Structure

```
Rapido Waiting Charges
├── 📱 Screens
│   ├── 01 - Booking with Policy
│   ├── 02 - Driver Waiting Alert
│   ├── 03 - Live Ride with Charges
│   ├── 04 - Fare Breakdown
│   ├── 05 - Education Modal
│   └── 06 - Dispute Flow
├── 🎨 Components
│   ├── Buttons
│   ├── Cards
│   ├── Modals
│   ├── Progress Bars
│   └── Timers
├── 🎭 Variants
│   ├── Light Mode (optional)
│   ├── Dark Mode (primary)
│   └── High Contrast
└── 📐 Specs
    ├── Typography
    ├── Colors
    ├── Spacing
    └── Animations
```

---

## Next Steps

1. Create high-fidelity mockups in Figma
2. Add interactive prototypes with transitions
3. Conduct usability testing with 20-30 users
4. Iterate based on feedback
5. Create developer handoff documentation
6. Build and test MVP

---

## Tools Needed

- **Figma**: For design mockups
- **Principle/ProtoPie**: For advanced animations
- **Maze/UserTesting**: For remote usability testing
- **Zeplin/Figma Dev Mode**: For developer handoff
