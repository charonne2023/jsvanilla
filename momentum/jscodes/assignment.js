// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
/*

const superEventHandler = {
  handleMouseEnter : () => {
    title.style.color = colors[1];
    //console.log("the mouse is here!");
    title.innerText = "the mouse is here!";
  },
  'handleMouseLeave' : () => {
    title.style.color = colors[2];
    title.innerText = "the mouse is gone!";
  },
  'handleWindowResize' : () => {
    title.style.color = colors[3];
    title.innerText = "you just resized!";
  },
  'handleWindowContextMenue' : () => {
    title.style.color = colors[4];
    title.innerText = "that was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenue", superEventHandler.handleWindowContextMenue);


title.addEventListener('mouseover', superEventHandler.onMouseOver);