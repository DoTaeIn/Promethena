---
name: Chronos
tagline: A timing assistant for course registration that accounts for server time and reaction speed
kind: tool
status: live
tags: [Chrome extension, course registration, timing assistant, network measurement, local-first]
---

# Chronos

In a competitive course-registration session, the goal is not to click for the user—it is to help the user click at the right moment.

Chronos is a Manifest V3 Chrome extension that measures the current page's estimated server time, network round-trip time (RTT), jitter, and the user's reaction speed. Set a target time and Chronos runs a focused 10-second countdown, then signals the recommended click moment with a visual flash and a short beep.

## Core features

- **Estimated server time:** Uses the page's HTTP `Date` response and round-trip delay to estimate the offset between the local clock and the server clock.
- **Network monitoring:** Calculates median RTT and jitter from multiple samples and labels the connection stable, watch, or unstable.
- **Reaction calibration:** Measures reaction time over five click tests and stores the result in Chrome local storage.
- **Smart trigger:** Combines reaction time, estimated one-way network delay, and a safety margin to signal slightly before the target time.
- **Focused countdown:** Switches to a large countdown during the final 10 seconds.
- **Local-first privacy:** Measurements and settings stay in the browser and are not sent to an external server.

## User flow

1. Open Chronos on a course-registration page.
2. Let it measure the server clock and network conditions.
3. Run reaction calibration if needed.
4. Enter a target time and start the countdown.
5. When the signal appears, click the registration button yourself.

## Deliberate boundaries

Chronos never clicks application buttons, submits forms, sends repeated requests, or attempts to bypass CAPTCHAs or queues. Its timing is a personalized recommendation based on the current environment, not a guarantee of successful registration. Actual request processing still depends on each university's site and browser conditions.

## Status and roadmap

The current release is an early MVP that runs as an unpacked Manifest V3 extension with no build step. Planned work includes university-specific site adapters, confidence and error-range estimates, accessible low-stimulation alerts, result-based personalization, and automated unit, integration, and browser end-to-end tests.
