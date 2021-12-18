import * as React from "react";
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import Mine from "./Mine";

const Hot= hot(Mine);

ReactDOM.render(<Mine/>, document.querySelector('#root'));