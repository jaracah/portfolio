---
title: Birdhouse Camera
summary: A Raspberry Pi-powered birdhouse with live camera and motion detection.
order: 2
tags: [Raspberry Pi Zero, Python, Pi Camera NoIR, GPIO, Discord Bot]
images:
  - src: /images/birdhouse/house-1.jpeg
    alt: Birdhouse Exterior 1
  - src: /images/birdhouse/pi-setup-1.jpeg
    alt: Raspberry Pi Setup
  - src: /images/birdhouse/house-2.jpeg
    alt: Raspberry Pi Water Proof Housing
links: []
---

A smart birdhouse built around a Raspberry Pi Zero with a Pi Camera NoIR module and a GPIO motion sensor. Originally developed as a capstone project, I'm actively revisiting and improving it with new hardware and better techniques.

Python handles the main orchestration loop -- detecting motion, capturing images, and sending notifications through a Discord bot and email mailing list. A basic dashboard site provides a view of recent captures and activity.

The birdhouse itself is handmade with a waterproof housing for the electronics and runs on battery power for flexible outdoor placement.
