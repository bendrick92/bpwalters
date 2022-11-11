---
type: "project"
title: "Mako"
image: https://assets.bpwalters.com/images/professional_blog/mako_mounted_2.jpg
slug: "mako"
stack: ["Arduino", "Telematics"]
sort: 6
icon: "gauge"
blurb: "Arduino carputer sending OBD-II data to touchscreen GUI"
---

## Background

After publishing my original [obdPi](https://github.com/bendrick92/professional-website/blob/master/raspberry-pi-obdii-carputer) post, I was pleasantly suprised to discover the number of people working on the same types of projects.

Through emails, Reddit threads, and in-person discussions at conferences, I realized there was much more interest in Raspberry Pi/carputer projects than I had first thought! Unfortunately, I also realized there were a number of limitations with the Raspberry Pi approach (namely boot time and power requirements).

As a result, I began exploring alternatives, which eventually led me to the Arduino community. Through some Googling, I discovered a company called [Freematics](http://www.freematics.com/) which specializes in automotive Arduino applications.

Thanks to Freematics' awesome documentation and OBD-II adapter, I was able to realize my original dream of a standalone in-car performance monitor. While I had pivoted from my initial design of an integrated, all-in-one carputer, I saw a new opportunity to replicate the type of portable, configurable monitoring provided by the [COBB Accessport](https://www.cobbtuning.com/products/accessport).

Along the way, I gained a healthy appreciation for building GUIs from scratch while also refreshing my geometry skills (something I realized I really enjoy!). Unfortunately, as with many of my projects, I haven't found the time to continue development.

## Objectives

* Learn how to develop with Arduino
* Learn how to design a GUI
* Build a real-time vehicle performance monitor
* Ensure fast boot, high portability

## Links

* [Blog post](https://github.com/bendrick92/professional-website/blob/master/blog/arduino-obd-carputer)
* [Github repo](https://github.com/bendrick92/mako)