---
type: "project"
title: "catPi"
featuredImage: https://assets.bpwalters.com/images/catpi.jpg
stack: ["Python", "Raspberry Pi"]
sort: 2
icon: "cat"
blurb: "Raspberry Pi cloud-enabled cat feeder"
---

## Background

Back when my wife and I had two cats to feed, it was sometimes hard to keep up with consistent meals. Between hectic work schedules and out-of-town trips, the idea of a remote cat feeder became extremely appealing.

However, with off-the-shelf options out of the budget, I employed a bit of Google-Fu and came across an [awesome project by David Bryan](http://drstrangelove.net/2013/12/raspberry-pi-power-cat-feeder-updates). Using some servos and a repurposed cereal dispenser, he had built his own Raspberry Pi-powered cat feeder!

Using David's project as inspiration, I whipped together a few Python scripts, added a custom enclosure, a Pi Camera module, and the ability to operate the feeder remotely using a Dropbox "schedule" file.

The resulting product, affectionately known as "Jeeves" around the house, was used almost daily for a number of years. However, as life and circumstances have changed we've gone without an automated feeder since we moved back to Milwaukee.

*2022 Update: I have plans to revisit this project with a v2, and spent most of Christmas break in 2021 proof of concepting a Homekit-compatible version. Now I just need to find the time to finish it!*

## Objectives

* Learn how to wire a servo
* Learn how to utilize Dropbox SDK
* Create a cat-proof feeder design
* Learn how to use the Pi Camera

## Links

* [Blog post](https://bpwalters.com/blog/raspberry-pi-powered-internet-cat-feeder/)
* [Github repo](https://github.com/bendrick92/catPi)
* [Setup/documentation](https://github.com/bendrick92/catPi#catpi)
