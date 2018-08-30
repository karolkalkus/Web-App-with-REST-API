import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Main from './js/Main';


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<Main/>, document.getElementById('app'))
});

