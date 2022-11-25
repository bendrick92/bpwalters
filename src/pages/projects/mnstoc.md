---
title: "MN ST Owners Club"
featuredImage: https://assets.bpwalters.com/images/mnstoc.png
stack: ["Rails", "Ember"]
sort: 4
icon: "comments"
blurb: "Rails API + Ember aggregator of car club postings"
---

## Background

Minnesota is a great place to be a car nut. With a huge variety of clubs, associations, and groups, there's no shortage of opportunities to stand around a parking lot and talk about cars!

One specific group I became regularly involved with was MNSTs. MNSTs is a grcoup of primarily Ford Focus ST/RS and Fiesta ST owners. Most of the members were active on a Facebook group, but a number of others didn't even have Facebook accounts. Since most of the event scheduling was done on our private Facebook group, making this information accessible to our other members became a problem that needed solving.

I came up with the idea of "scraping" various sources (such as forums, our Facebook wall, etc.) to aggregate member posts/group announcements into a centralized location. This created a number of unique challenges, mainly figuring out how to scrape forum posts and recognize/render quotes and conversation threads in a readable format, all while keeping performance and load times in check.

Due to time constraints, lack of use, and difficulty keeping up with Facebook's API changes, I decided to abandon the project after a year or so.

Overall this project was a great learning experience. In order to scrape the forum content efficiently, I created a Ruby gem ([vbulletin_scraper](https://github.com/bendrick92/vbulletin_scraper)). This was a great opportunity to implement some basic unit testing (using RSpec); something I definitely need to get in the habit of doing more often. In addition, learning Facebook's API was...enlightening!

## Objectives

* Learn how to scrape forum content
* Learn Facebook's API
* Learn more about Ember SPAs
* Design a fully responsive layout


## Links

* [Github repo (API)](https://github.com/bendrick92/mn-st-api)
* [Github repo (Ember website)](https://github.com/bendrick92/mn-st-website)
