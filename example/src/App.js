import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PaymentModal from 'paybeam-modal-library'
import { Button } from 'antd'

const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ padding: 24 }}>
      <Button type='primary' onClick={() => setVisible(true)}>
        Open Payment Modal
      </Button>
      <PaymentModal visible={visible} onCancel={() => setVisible(false)} />
    </div>
  )
}

export default App

// ReactDOM.render(<App />, document.getElementById('root'))
