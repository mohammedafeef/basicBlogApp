import React from 'react';
import ReactDOM from 'react-dom';
import './blogApp/Blog.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import Blog from './blogApp/Blog';
ReactDOM.render(<BrowserRouter>
        <Blog/>
</BrowserRouter>
    ,document.getElementById('root'));

