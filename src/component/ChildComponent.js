import React, {Component } from 'react'
import ParentElement from './GrandChildComponent'

class ChildComponent extends Component {
render() {
  return (
    <>
    <h2>child Component</h2>
    <ParentElement tech = "JavaScript" bgColor="red" />
    <ParentElement tech = "React" bgColor="yellow" />
    <ParentElement tech = "redux" bgColor="green" />
   
    </>
  )
}
}

export default ChildComponent