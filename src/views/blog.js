import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import './blog.css'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()

// Static blog list
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
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const userBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setBlogs(userBlogs)
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
              <h3
                className="blog-card-title thq-heading-3 blog-link"
                style={{ cursor: 'pointer', color: '#4f8cff', textDecoration: 'underline' }}
                onClick={() => window.location.href = `/blog/${blog.id}`}
              >
                {blog.title}
              </h3>
              <div className="blog-card-meta">
                By {blog.author} | {blog.createdAt?.toDate ? blog.createdAt.toDate().toLocaleDateString() : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
