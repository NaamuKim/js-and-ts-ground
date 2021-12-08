import * as React from "react";
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import Response from './Response'

const Hot= hot(Response);

ReactDOM.render(<Response/>, document.querySelector('#root'));