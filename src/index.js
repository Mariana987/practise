import { span } from 'child_process';
import React from 'react';
import ReactDOM from 'react-dom';

// const elem1 = React.createElement('span', { children: 'hi' })
const elem1 = <span>hi</span>

// const elem2 = React.createElement('span', { children: 'world' })
const elem2 = <span>world</span>
// const element = React.createElement('div', { a: 5, children: 'hi world' });
// console.log(element)
const jsxElem = (<div>{elem1}
  {elem2}</div>)
console.log(jsxElem)

// ReactDOM.render(element, document.querySelector('#root'))

////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
