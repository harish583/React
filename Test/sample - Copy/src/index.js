import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // highlight-next-line
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
// ReactDOM.render(
//   <React.StrictMode>
//     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
