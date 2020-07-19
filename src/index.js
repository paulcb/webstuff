import _ from 'lodash';
import './style.css';
import Icon from './rocky.png';
import Data from './weather.json';
import printMe from './print.js';

function component() {
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.height = '75px';
  myIcon.style.width = '150px';

  return myIcon;
};

function show() {
  document.getElementById('mymessage').innerHTML = 'heyy';
};

var headimage = document.getElementById("headimage");
headimage.appendChild(component());

const mybutt = document.getElementById('abutt');
mybutt.onclick = show;

var c = document.getElementById("myCanvas");

/** @type {CanvasRenderingContext2D} */
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
