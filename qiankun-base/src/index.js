import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from "react-router-dom";

registerMicroApps([
  {
    name: 'qiankun-mirco-vue',
    entry: '//localhost:8080',
    container: '#container',
    props: {},
    activeRule: '/app-vue',
  },
  {
    name: 'qiankun-mirco-react',
    entry: '//localhost:4000',
    container: '#container',
    props: {},
    activeRule: '/app-react',
  },
]);

// 启动 qiankun
start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
因为后续会加上 react-router-dom ，所以此处后续要记得加上BrowserRouter哦
<BrowserRouter>
 <App />
</BrowserRouter>
*/



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


