import _ from 'lodash';
import './style.css';
import Icon from './rocky.png';
import Data from './weather.json';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
