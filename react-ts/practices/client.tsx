import * as React from "react";
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import NumberBaseball from './number-baseball'

const Hot= hot(NumberBaseball);

ReactDOM.render(<NumberBaseball/>, document.querySelector('#root'));