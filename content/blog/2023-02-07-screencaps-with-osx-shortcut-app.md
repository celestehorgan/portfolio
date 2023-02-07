---
title: "Create ✨ super professional ✨ screenshots with Mac OSX's Shortcuts app"
date: 2023-02-07
author: Celeste Horgan
---

I originally wrote this internally for [Aiven](https://aiven.io)'s Developer Relations team, but figured it would be as cool and mind blowing to the rest of my technical writer and DevRel friends as it was to me. [Mega hat tip](https://macos.gadgethacks.com/how-to/easiest-way-resize-all-windows-your-mac-simultaneously-same-dimensions-0385153/) by the way! 

There are lots of instances where capturing a screenshot with the full window border is preferable. They look clean and professional in presentations, for example, especially when the screenshot is on a white background. It also allows for nice "flipping" through slides if you have screenshots in the same place on multiple slides - it just looks cleaner and more professional when things don't shift about by 1px back and forth. 

This article goes through how to create ✨ super beautiful UI window'ed screenshots ✨ on a MacBook Pro.

In this case, by professional we mean:

1. A consistent window size across the entire presentation or doc where it makes sense.
2. Featuring Mac's built-in window dropshadow or not, depending on our preferences.
3. Showing the full window UI (super useful for people doing web dev tutorials, but also just looks cleaner against a white backdrop).

## The basics:

- Take screenshots **on the same monitor**. The MBP laptop screen has a higher pixel density (pixels per inch) than most monitors and as a result the sizes of things can do Weird Things if you move around. 
- **Cmd+Shift+4** then **Spacebar** lets you screenshot an entire window. 
- **Cmd+Shift+5** gives you a full menu, including creating a screen recording.
- For most documentation and talks, you can do all the annotation you need with Preview's editing tools.

## Our biggest challenge is sizing

The hardest criteria to meet is #1 - taking screenshots of a consistent size. OSX's built in screenshot tools can take care of the other criteria.

Previously the best way to do this was to use the browser's Inspect/Dev tooling and use the mobile resolution previews. But, with the addition of the [Shortcuts app](https://support.apple.com/en-gb/guide/shortcuts-mac/apdf22b0444c/mac) on Mac OSX, we now have If-This-Then-That logic at our disposal! 

## Creating an OSX Shortcut to resize a window on demand

First, open the **Shortcuts** app from the finder:

[Mac OSX search dialog with "Shortcuts" as the search text. Select the Shortcuts app from the menu to open it.](images/2023-02-07/1-open-shortcuts.png)

Next, click the **+** icon to add a new shortcut: 

[Screenshot highlighting the position of the + symbol in the Shortcut app. It is in the upper right in the app's toolbar area.](images/2023-02-07/2-add-new-shortcut.png)

Use the Search bar on the right and look for **Find Windows**.  Drag this into the area on the left. 

Configure Find windows to look for **All windows** where Window Index is 1. using the Add Filter button.

> **Warning:** Later, we'll configure this Shortcut to run from the menu bar if you want. If that's the case, you'll want to look for Window Index = 0. I found this out after taking the GIF that follows, sorry!

Next, use the Search bar to look for **Resize Windows.** 
Drag this into the left and configure it to **Resize windows** to **Ask each time**.

Name the Shortcut something meaningful, like Resize Window for Screenshot.

Here's a quick animation of what how to do this, as Shortcuts is very visual: 

[Screen recorded GIF of creating a shortcut with OSX. It's unfortunately a very visual tool.](images/2023-02-07/create-shortcut-osx.gif)

I'm glaringly aware that this isn't the same aspect ratio as everything else in this article. It's 10:30pm and I can't convince my tools to compress a re-recorded at aspect ratio version to a reasonable size for the web. Maybe tomorrow?

Optionally, make your shortcut available by pinning it to your Menu bar, setting it as a Quick action, or assigning a Keyboard shortcut **keep in mind that if you do this, you _need_ to set the Window rule to look for Index = 0!**: 

[Screenshot highlighting the menu options for pinning the Shortcut to the OSX Menu Bar.](images/2023-02-07/3-pin-to-menu.png)

And that's it! 

Whenever you want to screenshot something, bring its window to the front, select it from either the Shortcuts app or the menu bar, then just use OSX's screenshot functionality!

[An example screenshot taken at a 1024x768 aspect ratio. Look ma, no hands!](images/2023-02-07/example-screenshot-1.png)

## Getting rid of the shadow on command 

Mac OSX's shadow is kind of huge and it comes along for free if you use **Cmd+Shift+4** or **Cmd+Shift+5** and select a specific window. 

You can suppress this by using the **Cmd+Shift+5** option, selecting a window, and holding the **Option** key when you take a screenshot. Pressing **Enter** can also trigger the screenshot if you're feeling like you've got too many fingers engaged.

**This doesn't work when using Cmd+Shift+4**.

[The same example but with no drop shadow](images/2023-02-07/example-screenshot-2.png)

## What about no UI window? 

You'll want to use **Cmd+Shift+5**'s square lasso tool to select a specific area of the screen. I'd recommend resizing your window first for consistency. 

The square bounding box, once set, persists until it's altered again. If you're screencapping multiple applications (the Terminal and a browser, i.e.) I'd recommend resizing both then dragging them into the bounding box area as needed, as moving the bounding box can sometimes introduce unwanted changes.

## How'd you create the GIF of the screen recording?

I used **Cmd+Shift+5**'s screen record tool to make the recording. 

In its **Options** menu, you can select **Show mouse pointer** and **Show mouse clicks** before recording.

Then, I used an online tool to convert this to a GIF. I'd like to make another OSX Shortcut to do this in future, but creating one that can resize, compress, and otherwise optimize a GIF to my specs is a little complicated.

## Additional tips 

- OSX's **Preview** app has limited editing options when you click the marker (Show Markup bar) icon. I use this for 98% of my docs and talks when I need to highlight something with a red square, for example. 

Unless you have a good reason not to, using common desktop or mobile dimensions for screenshots is usually best. Go smaller than you think: 
- **1024x768** is my default, and I use **1280x800** if I need something in more of a 16:9 aspect ratio.
- Mobile resolutions are hard because there's so many, but the iPhone 12's **380x844** works well in most cases.

When you're creating screenshots, always remember to check for the following:

- Visible PII (personally identifiable information). Common ones are:
    - Account or organization names 
    - Open tabs or browser extensions
    - The Downloaded Files bar that sometimes appears along the bottom of the browser window
    - URLs with revealing information like tokens
    - System notifications (push notifications)
    - Private repository names, secrets files, or anything your company would rather never see the light of day

Some things you inevitably need to edit out after the fact, but most of these can be dismissed or removed prior to screencapping.

Have fun!


