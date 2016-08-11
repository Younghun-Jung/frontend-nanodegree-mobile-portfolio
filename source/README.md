## Website Performance Optimization portfolio project

This project is a course of the Udacity Website Optimizaiton Project. The goal is to optimize this online portfolio for speed! In particular, optimizing the critical rendering path and make this page render as quickly as possible.


###Part 1: Optimize PageSpeed Insights score for index.html


Optimizations made:
1. Optimize google fonts by using Web font loader
2. Add media attribute to print.css file tag in HTMl
3. Made Google Analytics Script asynchronous
4. Optimize image manually : change original file pizzeria.jpg to pizzeria_100px.jpg
5. Insert css script at bottom of HTML after body tag


###Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I modified views/js/main.js until the frames per second rate is 60 fps or higher.

To view the effects of optimizations part, open pizza.html in Chrome.
Use timeline tab in Chrome Developer Tools to see the fps score.

I used Grunt to minify views/js/main.js as well as the style.css and bootstrap files in the views folder.
All source file is in 'source' folder and js, css files which are modified are in 'dist' folder

optimizations:

function changePizzaSizes(size)
1. Changed querySelectorAll() to getElementsByClassName
2. Used array object instead of querySelectorAll()[i]

function updatePositions()
1. Items defined via getElementsByClassName instead of querySelectAll
2. Assigned the items.length into var len even though it only makes a small difference in speed, but every millisecond counts
3. Took document.body.scrollTop out of the for loop and placed it in a variable that we can then call in the for loop
4.Calculated repeating values for phase and pushing them into an empty array (tempArray), for loop then iterates through array instead of recalculating for each pizza,
