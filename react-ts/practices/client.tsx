import * as React from "react";
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import WordRelay from './word-relay'

const Hot= hot(WordRelay);

ReactDOM.render(<WordRelay/>, document.querySelector('#root'));