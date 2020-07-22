---
layout: project
title:  "Canvas Draw"
category: github
image: "draw.svg"
link: "http://draw.bencroskery.xyz/"
repo: "https://github.com/bencroskery/Canvas-Draw/"
---
A Node.js HTML5 Canvas Drawing game to play with others!

The goal is to create a game that is playable on a range of devices with various gamemodes to enjoy.

This app uses websocket connections to connect 50+ users to be able to draw and see others changes concurrently (without degrading server performance). Multiple game rooms are a work in progress, which should allow for a number of games to be played at the same time on a low-end cloud server instance. There is the possibility for major performance improvements by switching to a different websocket engine or using a different language on the server-side due to the single-threaded low performance nature of JS.