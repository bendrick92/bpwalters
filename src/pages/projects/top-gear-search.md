---
title: "Top Gear Search"
featuredImage: "https://assets.bpwalters.com/images/topgearsearch.png"
stack: ["React", ".NET Core", "Postgres"]
sort: 1
icon: "magnifying-glass"
blurb: ".NET Core + React site for searching catalog of Top Gear episodes by keyword"
---

## Background

As an big fan of the British Top Gear, I found myself doing A LOT of Google searches to find specific episodes. While the Amazon/Netflix descriptions were pretty helpful, they didn't provide much context on what cars were featured or what challenges/specials were in each episode.

Back in 2016 I had been doing a lot of fiddling around, learning how to build RESTful API's with a friend, so I decided this would be a great opportunity to practice myself!

Using descriptions from Wikipedia as a starting point, I scraped the series data into an indexed and searchable Postgres database. Using popular search engines as inspiration, I wanted to make sure the autocomplete functionality was relevant and extremely performant. Especially with so many obscure and random cars, challenges, features, etc. in each episode of the show.

One of the biggest challenges of this project was creating a super-responsive autocomplete (using only Postgres queries). This required a lot of manual data manipulation and optimizing to create something not only fast, but actually relevant and helpful!

The site was rewritten from scratch in June of 2023 to upgrade it from Backbone + Rails to .NET Core + React. Moving to a SPA and self-hosted also allowed me a lot more functionality than I was able to achieve with Backbone in a static S3 bucket.

## Objectives

* Create a highly performant search index 
* Experience self-hosting in a DigitalOcean Droplet
* Replicate Google/DuckDuckGo's auto-complete functionality

## Links

* [Website](https://topgearsearch.com/)
* [Github repo (React website)](https://github.com/bendrick92/tg-search-web)
* (API code is private for now)