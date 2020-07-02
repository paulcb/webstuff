import _ from 'lodash';
import './style.css';
import Icon from './rocky.png';
import Data from './weather.json';
import printMe from './print.js';

function component() {
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.height = '100px';
  myIcon.style.width = '200px';

  return myIcon;
};

function show(){
  document.getElementById('mymessage').innerHTML = 'heyy';
};

document.body.appendChild(component());

const mybutt = document.getElementById('mybut');
mybutt.onclick = show;
