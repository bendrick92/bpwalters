---
type: "project"
title: "obdPi"
featuredImage: https://assets.bpwalters.com/images/obdpi.jpg
stack: ["Python", "Raspberry Pi", "Telematics"]
sort: 1
icon: "gauge"
blurb: "Raspberry Pi carputer sending OBD-II data to a 16x2 OLED display"
---

## Background

The obdPi project was born out of a desire to build a custom boost gauge for my 2014 Fiesta ST. I had been inspired by the 2015 WRX's central multi-function display, and got to researching existing Raspberry Pi-based car computers (carputers).

I quickly realized that, while there were a number of great projects already out there, I could use this as an opportunity to learn more about the Raspberry Pi's capabilities, the OBD-II interface, as well as wiring and coding for 16x2 character OLED displays.

In total, I spent probably about ten hours a week for a year coding, testing, learning, wiring, and troubleshooting. Fortunately, the hard work paid off and I was able to get a fully working system up and running reliably in my car.

Overall, obdPi has easily been my most challenging project, but also the most rewarding. Unfortunately, due to time constraints and other projects, I haven't had a chance to revisit obdPi for some time. I hope to get back into it some day soon!

## Objectives

* Learn how to code in Python
* Learn how to wire a 16x2 OLED display
* Learn how to retrieve OBD-II diagnostic data from my car via Bluetooth
* Learn how to wire a ignition-dependent power supply
* Learn how to configure an extremely lightweight, headless Raspbian OS

## Links

* [Blog post](https://bpwalters.com/blog/raspberry-pi-obd-ii-carputer/)
* [Setup and documentation](https://bendrick92.github.io/obdPi/)
* [Github repo](https://github.com/bendrick92/obdPi)