import React from 'react'
import './custom.css'
const Chat = () => {
  return (
    <div className='outer'>
        <div className='inner'>
            <div className='left'>
                <div className='head'>
                    <h3>Chat App</h3>
                    <span>User</span>
                </div>
                <ul>
                    <li>
                        <h4>Test</h4>
                    </li>
                    <li>
                        <h4>Test</h4>
                    </li>
                    <li>
                        <h4>Test</h4>
                    </li>
                </ul>
            </div>
            <div className='right'>
                <div className='left-head'>
                    <span>Test</span>
                </div>
                <div className='chat'>
<div className='v-msg'>

<ul>
    <li>Hii</li>
    <li>Hello</li>
    <li>Whatsup</li>
    <li>Good Night</li>
    <li>Good Night</li>
</ul>


</div>
<div className='s-msg'>
    <input type='text' placeholder='Enter Message...'/>
    <button>Send</button>
</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Chat