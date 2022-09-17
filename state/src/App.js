import React, { Component } from 'react'
import Bio from './components/bio';
import Fullname from './components/Fullname';
import Imgsrc from './components/ImgSrc';
import Profession from './components/Profession';
import './App.css'
export default class App extends Component {
  
  constructor (props){
    super(props)
    this.state ={show : false}
  }

  toggle = () =>{
    this.setState({show : !this.state.show})
  }


  render() {
    return (
      <div className='app'>
        <button onClick={this.toggle} className='button-27'>Profile</button>
        {this.state.show ? <div><Imgsrc/><Fullname/><Bio/><Profession/></div> : null }
        
      
      </div>
    )
  }
}
