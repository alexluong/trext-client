import React from "react"
import io from "socket.io-client"
import { withUser } from "contexts/User"
import "./MessageList.css"

class MessageList extends React.Component {
  state = { messages: this.props.messages ? this.props.messages : [] }

  componentDidMount() {
    this.socket = io("https://trext-prod.appspot.com")
    this.socket.on("NEW_MESSAGE", message => {
      this.setState(prevState => ({
        messages: [...this.state.messages, message],
      }))
    })
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }

  render() {
    const { messages } = this.state
    const userNumber = this.props.user.twilioNumber

    return (
      <div className="message-list">
        {messages.length > 0 ? (
          messages.map(msg => (
            <div
              key={msg._id}
              className={`message-list__item ${
                msg.author === userNumber ? "message-list__item--user" : ""
              }`}
            >
              <span>
                {msg.author === userNumber ? msg.body : msg.translation}
              </span>
            </div>
          ))
        ) : (
          <p>No messages</p>
        )}
      </div>
    )
  }
}

export default withUser(MessageList)
