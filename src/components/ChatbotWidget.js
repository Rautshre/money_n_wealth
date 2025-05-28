import React, { useState, useRef, useEffect } from 'react'
import './ChatbotWidget.css'

const defaultWelcome = [
  { from: 'bot', text: "Hi! 👋 How can I help you with your finance or money management today?" }
]

const GEMINI_PROXY_URL = "http://localhost:5001/api/gemini" // Update if your backend runs elsewhere

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(defaultWelcome)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage = { from: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)
    setInput('')

    // Show typing...
    setMessages(prev => [...prev, { from: 'bot', text: "..." }])

    try {
      const res = await fetch(GEMINI_PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev.slice(0, -1), // remove the "..." message
        { from: 'bot', text: data.reply }
      ])
    } catch (e) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { from: 'bot', text: "Sorry, there was an error connecting to Gemini." }
      ])
    }
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <div
        className="chatbot-fab"
        onClick={() => setOpen(o => !o)}
        title="Chat with us"
      >
        <span role="img" aria-label="Chatbot">💬</span>
      </div>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Finance Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-msg chatbot-msg-${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Type your finance question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button className="chatbot-send" onClick={handleSend} disabled={loading}>➤</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotWidget
