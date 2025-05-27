import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { serverTimestamp } from 'firebase/firestore'
import './blog.css'

const firebaseConfig = {
  apiKey: 'AIzaSyD5iAR0TGjWhUWhtA5KIchyAN2xkDlIzzk',
  authDomain: 'moneynwealth-8613e.firebaseapp.com',
  projectId: 'moneynwealth-8613e',
  storageBucket: 'moneynwealth-8613e.appspot.com',
  messagingSenderId: '410260585437',
  appId: '1:410260585437:web:96b4b40448c61f1c655434',
  measurementId: 'G-CEKE258GXX',
}
initializeApp(firebaseConfig)
const db = getFirestore()

const staticBlogs = [
  {
    title: '5 Golden Rules of Money Management',
    author: 'Admin',
    content: 'Track your spending, set goals, build an emergency fund, invest early, and review your finances regularly.'
  },
  {
    title: 'How to Start Investing with Little Money',
    author: 'Admin',
    content: 'Start with small amounts, use SIPs, diversify, and focus on long-term growth.'
  },
  {
    title: 'The Power of Budgeting',
    author: 'Admin',
    content: 'Budgeting helps you control your money, avoid debt, and achieve your financial goals.'
  }
]

const Blog = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u))
    fetchBlogs()
    return () => unsubscribe()
  }, [])

  const fetchBlogs = async () => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const userBlogs = querySnapshot.docs.map(doc => doc.data())
    setBlogs(userBlogs)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        author: user.displayName || user.email,
        createdAt: serverTimestamp(),
      })
      setTitle('')
      setContent('')
      fetchBlogs()
    } catch (err) {
      setError('Failed to publish blog')
    }
    setLoading(false)
  }

  return (
    <div className="blog-bg">
      <div className="blog-container thq-section-max-width">
        <h2 className="blog-title thq-heading-2">Money Management Blogs</h2>
        <div className="blog-list">
          {staticBlogs.map((blog, idx) => (
            <div className="blog-card thq-card" key={idx}>
              <h3 className="blog-card-title thq-heading-3">{blog.title}</h3>
              <div className="blog-card-meta">By {blog.author}</div>
              <p className="blog-card-content thq-body-small">{blog.content}</p>
            </div>
          ))}
          {blogs.map((blog, idx) => (
            <div className="blog-card thq-card" key={staticBlogs.length + idx}>
              <h3 className="blog-card-title thq-heading-3">{blog.title}</h3>
              <div className="blog-card-meta">By {blog.author}</div>
              <p className="blog-card-content thq-body-small">{blog.content}</p>
            </div>
          ))}
        </div>
        {user && (
          <form className="blog-form" onSubmit={handleSubmit}>
            <h3 className="blog-form-title">Write a Blog</h3>
            <input
              className="blog-input"
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <textarea
              className="blog-textarea"
              placeholder="Your blog content..."
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
            {error && <div className="blog-error">{error}</div>}
            <button className="blog-btn thq-button-filled" type="submit" disabled={loading}>
              {loading ? 'Publishing...' : 'Publish Blog'}
            </button>
          </form>
        )}
        {!user && (
          <div className="blog-login-msg">Sign in to write and publish your own blog!</div>
        )}
      </div>
    </div>
  )
}

export default Blog
