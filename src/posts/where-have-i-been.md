---
title: where have I been?
description: It's been a minute since the last post. A lot has happened for my
  game Spilled! Too much to tell you in this post. I will however tell you about
  some cool things I've done this last week!
author: Lente
date: 2023-02-07T09:34:39.444Z
---
It's been a minute since the last newsletter. A lot has happened for my game Spilled! Too much to tell you in this email. I will however tell you about some cool things I've done this last week!

From now on I will be writing you an email every week, with game updates, and life updates! (boat stuff!)

If you want to catch up on what I have added to the game in the few weeks that I haven't written you an email, you can check out my [YouTube channel](https://www.youtube.com/@LenteGameDev), as I have been posting there every 2 weeks (and will continue to do so).

The YouTube videos and the weekly email newsletter will have some overlap, but the newsletter will be more personal, and more frequent!

## Gameplay Changes?

So one of the first things I did this week was simply to play the demo of the game once. I wanted to get an idea of the playtime (about 6.5 minutes) and how much fun the game is to play in it's current state.

This is all because I'm at a point where I have to figure out what else I want to add to the game and in what way I'll expand it.

And, to what extend I'll expand it. Since I don't want the game to be too big, preferably I'd make it small but polished and move on to the next project. I figured, this way I can learn the most about the whole process of making and releasing a game. And hopefully do it a little better next time :) 

I think I'll start off this next week brainstorming a little about all of this, and see if there is anything I can add to the game to make it a little more challenging. I do plan to add more areas, containing bigger oil spills that need a better upgraded boat. I just fear that this alone still won't be enough for engaging gameplay. Let me know if you have any ideas!

## Movement troubles

On to actual development now!  So, the way the boat's movement has worked so far is that the boat smoothly followed the mouse. 
But it was hard (for me anyway lol) to get Unity's collision to work with this! 
I've spent way too many hours trying to get that to work properly, I could not get it to work.

So the start of this week I decided screw it and change the movement all together. To make it easy on myself, I just changed it to moving the boat with the WASD keys.
It turned out that I liked this way of movement way better than the mouse movement!
And so did others, people on my [Discord server](https://discord.com/invite/qya9Eb9Z9t) have told me they also liked this movement a lot better. So it's a Win-Win! No more pesky collision stuff for me AND better movement!

## Stopping the player from getting lost!

I made this little arrow around the player that guides them towards a nearby recycling facility once their oil tank is full. It's not very pretty yet, but it does it's job!

To implement this, I first figure out what the most nearby recycling facility is. (Since there is two of them in the demo area) 
I then calculate the angle between the boat and this recycling facility! Then I apply this angle to a UI element :)
Simple stuff, but quite a cool result!

## Slurp sounds

If you watch my YouTube videos or follow me on Twitter, you might have heard the somewhat controversial 'Slurp sound'.

Here's a link to the initial Tweet I made about it.
[https://twitter.com/LenteGameDev/status/1616114894855716881](https://twitter.com/LenteGameDev/status/1616114894855716881)

It was just the same sound repeated over and over, pitched up and down.
I wanted to try changing that! I figured I could have a start sound play when you first enter an oil spill, then during collecting a looping sound, and then when you’re done with the spill, an end sound. 
This way it could work for oil spills big and small alike :)

Here you can listen to the new version I made!

[https://twitter.com/LenteGameDev/status/1621480676879998977](https://twitter.com/LenteGameDev/status/1621480676879998977)

This link goes to a thread about how I made the sound. Well, I didn't exactly make it myself, but I did combine and edit two existing sounds! In the thread you can listen to all the sounds involved :)

## Upgrade interface

So, for the longest time now I've wanted to change the interface I have for upgrading your boat in the game. It definitely served it's purpose, but it doesn't look all that great.

Now, I've made quite a few changes! I made it so when you collide with the recycling facility, the camera zooms in on the boat. 

I also rotate the boat so that it's positioned the same every time. 
I did it this way, because I thought it would be cool to show the actual component that you upgrade, and a little green preview of what the next upgrade will look like.

For now the components juts get bigger whenever you upgrade them, but I might change that! 
For the speed upgrade, I added a solar panel on the roof of the boat. For now when you upgrade your speed, this solar panel increases in size. In the future I might make it so you add more solar panels to your boat when you upgrade your speed.

I moved the upgrade buttons to be next to their corresponding components.
It's not super pretty yet, but that can be worked on :)

## Discord Minecraft Server!

Cyklon_3000, a Moderator in my Discord server, took the initiative to set up a Minecraft survival server! 

Anyone is welcome, and details to join can be found on [the Discord](https://discord.com/invite/qya9Eb9Z9t). 
The server is only open on the weekends, to encourage people to play together :)

It's so awesome to see the community we have built! If you haven't joined the Discord yet, you definitely should!

## Boat work, before and after

The above is some of what I did, cleaning the roof! I did do quite some interior work, but it's more so small bits all over the place.

The bottom one is what my mom has been up to! this is the little room where the toilet goes (and maybe a shower some day?). 
It looks a LOT nicer now and I'm so happy with it :) Next step is installing the actual toilet.


That's it for this week's newsletter! If you made it all the way through, or just skipped through it, thank you for reading! I hope to make a new one every week from now on!

See ya!

\- Lente