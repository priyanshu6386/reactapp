import React, {Component } from 'react'

class GrandChildComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {tech,bgColor} = this.props
  return (
    <>
    <p style={{backgroundColor:bgColor}}>I Love {tech}!</p>
    </>
  )
}
}

export default GrandChildComponent