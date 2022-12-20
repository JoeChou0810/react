import React, { Component } from 'react'

class CC extends Component {
  constructor(props) {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('DidMount')
  }

  // 元件更新完成後才執行 (after) , 解決異步的方法二
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'DidUpdate',
      '更新前的 total=',
      prevState.total,
      '更新後的 total=',
      this.state.total
    )
  }

  // cleaner
  componentWillUnmount() {
    console.log('WillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
