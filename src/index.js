// import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import './exampleBalel'
import './index.css'

import toy from '../images/toy.jpg'

console.log('Hello world');

const Index = () => {
    console.log('hello I\'m React Component test')
    return (
        <div>
            <img src =  {toy }  width = '400'/>
            <h1>Hello React</h1>
        </div >
    )
}


ReactDOM.render(<Index />, document.getElementById('app'))

export default Index
